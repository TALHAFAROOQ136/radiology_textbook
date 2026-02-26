/**
 * CDN Configuration for Radiology Textbook Platform
 *
 * This configuration sets up CDN for static assets to improve performance
 * and reduce server load by serving static content from edge locations.
 */

module.exports = {
  /**
   * CDN Provider Configuration
   */
  provider: 'cloudflare', // Options: 'cloudflare', 'aws-cloudfront', 'akamai', 'custom'

  /**
   * Asset Configuration
   */
  assets: {
    // Paths to static assets that should be served via CDN
    staticPaths: [
      '/static/img/',
      '/static/css/',
      '/static/js/',
      '/assets/images/',
      '/assets/fonts/',
      '/docs/**/*.md', // Documentation files
      '/static/media/' // Media files
    ],

    // File extensions to cache
    fileExtensions: [
      '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', // Images
      '.css', '.js', '.jsx', '.ts', '.tsx', // Code
      '.woff', '.woff2', '.ttf', '.eot', // Fonts
      '.pdf', '.mp4', '.webm', '.ogg', // Media
      '.ico', '.txt', '.md' // Others
    ],

    // Assets that should NOT be cached
    excludePatterns: [
      '/api/*', // API routes
      '/_next/static/chunks/pages/_app*', // Dynamic app chunks
      '*auth*', // Authentication-related files
      '*session*' // Session-related files
    ]
  },

  /**
   * Caching Configuration
   */
  cache: {
    // Cache duration for different types of assets
    durations: {
      images: '1y', // 1 year for images
      fonts: '1y', // 1 year for fonts
      cssJs: '1w', // 1 week for CSS/JS (versioned)
      html: '1h', // 1 hour for HTML files
      media: '1m', // 1 month for media files
      docs: '1d' // 1 day for documentation
    },

    // Cache invalidation settings
    invalidation: {
      enabled: true,
      method: 'tag-based', // Options: 'tag-based', 'path-based', 'full-purge'
      tags: {
        images: 'images',
        fonts: 'fonts',
        cssJs: 'assets',
        docs: 'docs',
        all: 'all'
      }
    }
  },

  /**
   * Performance Configuration
   */
  performance: {
    // Compression settings
    compression: {
      enabled: true,
      algorithms: ['gzip', 'brotli'] // Enable both gzip and brotli
    },

    // Image optimization
    imageOptimization: {
      enabled: true,
      formats: ['webp', 'avif'], // Serve modern formats with fallback
      resize: {
        enabled: true,
        sizes: [320, 640, 1024, 1536, 2048] // Common responsive image sizes
      }
    },

    // Edge-side includes
    esi: {
      enabled: false, // Enable for dynamic content composition at edge
      allowedPaths: ['/partials/*']
    }
  },

  /**
   * Security Configuration
   */
  security: {
    // CORS settings for CDN
    cors: {
      allowedOrigins: [
        process.env.FRONTEND_URL || 'http://localhost:3000',
        'https://*.radiology-textbook.com',
        'https://radiology-textbook.com'
      ],
      allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
      maxAge: 86400 // 24 hours
    },

    // Security headers
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    },

    // Bot protection
    botProtection: {
      enabled: true,
      challengeType: 'managed-rules', // Options: 'managed-rules', 'rate-limiting', 'custom'
      rateLimiting: {
        requestsPerMinute: 100,
        burstLimit: 10
      }
    }
  },

  /**
   * Monitoring and Analytics
   */
  monitoring: {
    enabled: true,
    analytics: {
      provider: 'cloudflare-analytics',
      enabled: true,
      trackMetrics: [
        'bandwidth',
        'requests',
        'threats',
        'pageViews',
        'uniqueVisitors'
      ]
    },
    logging: {
      level: 'info', // Options: 'debug', 'info', 'warn', 'error'
      format: 'json',
      retentionDays: 30
    }
  },

  /**
   * Domain Configuration
   */
  domains: {
    // Primary CDN domain
    primary: process.env.CDN_PRIMARY_DOMAIN || 'cdn.radiology-textbook.com',

    // Fallback domains
    fallbacks: [
      process.env.CDN_FALLBACK_DOMAIN || 'd2abcdef123456.cloudfront.net'
    ],

    // Subdomain configuration
    subdomains: {
      images: 'img.cdn.radiology-textbook.com',
      static: 'static.cdn.radiology-textbook.com',
      docs: 'docs.cdn.radiology-textbook.com'
    }
  },

  /**
   * Origin Configuration
   */
  origin: {
    // Primary origin server
    primary: {
      host: process.env.ORIGIN_HOST || 'origin.radiology-textbook.com',
      port: 443,
      protocol: 'https',
      path: '/'
    },

    // Backup origin servers
    backup: [
      {
        host: process.env.BACKUP_ORIGIN_HOST || 'backup-origin.radiology-textbook.com',
        port: 443,
        protocol: 'https',
        path: '/'
      }
    ],

    // Origin failover settings
    failover: {
      enabled: true,
      timeout: 5000, // 5 seconds
      maxRetries: 3
    }
  },

  /**
   * SSL/TLS Configuration
   */
  ssl: {
    enabled: true,
    certificate: {
      provider: 'letsencrypt',
      autoRenew: true,
      minValidityDays: 30
    },
    protocols: ['TLSv1.2', 'TLSv1.3'],
    ciphers: [
      'ECDHE-ECDSA-AES128-GCM-SHA256',
      'ECDHE-RSA-AES128-GCM-SHA256',
      'ECDHE-ECDSA-AES256-GCM-SHA384',
      'ECDHE-RSA-AES256-GCM-SHA384'
    ]
  },

  /**
   * Environment-specific overrides
   */
  environments: {
    development: {
      enabled: false, // Disable CDN in development
      localProxy: {
        enabled: true,
        port: 8080
      }
    },
    staging: {
      enabled: true,
      cache: {
        durations: {
          images: '1d',
          fonts: '1d',
          cssJs: '1h',
          html: '5m',
          media: '1d',
          docs: '1h'
        }
      }
    },
    production: {
      enabled: true,
      performance: {
        imageOptimization: {
          enabled: true,
          formats: ['webp', 'avif']
        }
      }
    }
  }
};