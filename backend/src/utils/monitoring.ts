import express, { Request, Response, NextFunction } from 'express';
import promClient from 'prom-client';
import logger, { PerformanceMonitor } from './logger';

// Create Prometheus metrics
export const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in milliseconds',
  labelNames: ['method', 'route', 'status_code']
});

export const httpRequestTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

export const activeConnections = new promClient.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

export const memoryUsage = new promClient.Gauge({
  name: 'memory_usage_bytes',
  help: 'Current memory usage in bytes',
  labelNames: ['type']
});

export const cpuUsage = new promClient.Gauge({
  name: 'cpu_usage_percent',
  help: 'CPU usage percentage'
});

// Register metrics collection
setInterval(() => {
  const memory = process.memoryUsage();
  memoryUsage.set({ type: 'rss' }, memory.rss);
  memoryUsage.set({ type: 'heapTotal' }, memory.heapTotal);
  memoryUsage.set({ type: 'heapUsed' }, memory.heapUsed);
  memoryUsage.set({ type: 'external' }, memory.external);

  // For CPU usage, we'd typically use a library like 'pidusage'
  // For now, we'll just log it periodically
  logger.debug('Memory usage', memory);
}, 10000); // Update every 10 seconds

/**
 * Middleware to collect metrics for each request
 */
export const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;

    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode.toString())
      .observe(duration);

    httpRequestTotal
      .labels(req.method, req.route?.path || req.path, res.statusCode.toString())
      .inc();
  });

  next();
};

/**
 * Endpoint to expose metrics to Prometheus
 */
export const metricsEndpoint = (req: Request, res: Response) => {
  res.set('Content-Type', promClient.register.contentType);
  promClient.register.metrics().then(metrics => {
    res.end(metrics);
  }).catch(err => {
    logger.error('Error collecting metrics', err);
    res.status(500).end();
  });
};

/**
 * Performance monitoring utility class
 */
export class MonitoringService {
  /**
   * Monitors database query performance
   */
  static monitorDBQuery(queryName: string, queryFn: () => Promise<any>): Promise<any> {
    PerformanceMonitor.startTimer(`db_query_${queryName}`);
    return queryFn()
      .then(result => {
        const duration = PerformanceMonitor.endTimer(`db_query_${queryName}`);
        logger.debug(`DB query ${queryName} completed`, { duration: `${duration}ms` });
        return result;
      })
      .catch(error => {
        const duration = PerformanceMonitor.endTimer(`db_query_${queryName}`);
        logger.error(`DB query ${queryName} failed`, { duration: `${duration}ms`, error: error.message });
        throw error;
      });
  }

  /**
   * Monitors API endpoint performance
   */
  static monitorAPIEndpoint(endpointName: string, endpointFn: () => Promise<any>): Promise<any> {
    PerformanceMonitor.startTimer(`api_endpoint_${endpointName}`);
    return endpointFn()
      .then(result => {
        const duration = PerformanceMonitor.endTimer(`api_endpoint_${endpointName}`);
        PerformanceMonitor.logMetric(`api_response_time_${endpointName}`, duration);
        logger.debug(`API endpoint ${endpointName} completed`, { duration: `${duration}ms` });
        return result;
      })
      .catch(error => {
        const duration = PerformanceMonitor.endTimer(`api_endpoint_${endpointName}`);
        logger.error(`API endpoint ${endpointName} failed`, { duration: `${duration}ms`, error: error.message });
        throw error;
      });
  }

  /**
   * Monitors cache performance
   */
  static monitorCacheOperation(operationName: string, operationFn: () => Promise<any>): Promise<any> {
    PerformanceMonitor.startTimer(`cache_operation_${operationName}`);
    return operationFn()
      .then(result => {
        const duration = PerformanceMonitor.endTimer(`cache_operation_${operationName}`);
        logger.debug(`Cache operation ${operationName} completed`, { duration: `${duration}ms` });
        return result;
      })
      .catch(error => {
        const duration = PerformanceMonitor.endTimer(`cache_operation_${operationName}`);
        logger.error(`Cache operation ${operationName} failed`, { duration: `${duration}ms`, error: error.message });
        throw error;
      });
  }
}

/**
 * Health check utility
 */
export const healthCheck = async () => {
  const healthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks: {}
  };

  try {
    // Add application-specific health checks here
    // For example, database connectivity, external service availability, etc.

    // Example: Check if we can write to logs
    logger.info('Health check performed');
    healthStatus.checks['logging'] = { status: 'ok' };

    // Example: Check memory usage
    const memoryUsage = process.memoryUsage();
    healthStatus.checks['memory'] = {
      status: memoryUsage.heapUsed < memoryUsage.heapTotal * 0.9 ? 'ok' : 'warning', // Warning if 90% of heap used
      used: memoryUsage.heapUsed,
      total: memoryUsage.heapTotal
    };

    return healthStatus;
  } catch (error) {
    logger.error('Health check failed', error);
    return {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message
    };
  }
};