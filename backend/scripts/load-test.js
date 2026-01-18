/**
 * Load testing script for the Radiology Textbook Platform
 * This script simulates concurrent users accessing the platform to test scalability
 */

const axios = require('axios');
const chalk = require('chalk');
const ora = require('ora');

class LoadTester {
  constructor(baseURL = 'http://localhost:8000') {
    this.baseURL = baseURL;
    this.results = [];
    this.spinner = null;
  }

  async runTest(testName, testFn, concurrency = 10, iterations = 100) {
    console.log(chalk.blue(`\nStarting ${testName} test...`));
    console.log(chalk.gray(`Concurrency: ${concurrency}, Iterations: ${iterations}\n`));

    this.spinner = ora({
      text: chalk.yellow('Running tests...'),
      spinner: 'clock'
    }).start();

    const startTime = Date.now();
    const promises = [];

    // Create concurrent requests
    for (let i = 0; i < iterations; i++) {
      promises.push(
        this.executeTestIteration(testFn, i)
          .catch(error => ({
            iteration: i,
            success: false,
            error: error.message,
            responseTime: -1
          }))
      );

      // Control concurrency by limiting active requests
      if (promises.length >= concurrency) {
        await Promise.all(promises.splice(0, concurrency));
      }
    }

    // Wait for remaining promises
    await Promise.all(promises);

    const endTime = Date.now();
    const totalTime = endTime - startTime;

    this.spinner.succeed(chalk.green(`${testName} test completed in ${totalTime}ms`));

    this.printResults(testName);
  }

  async executeTestIteration(testFn, iteration) {
    const startTime = Date.now();

    try {
      const response = await testFn(iteration);
      const responseTime = Date.now() - startTime;

      const result = {
        iteration,
        success: true,
        responseTime,
        status: response.status,
        data: response.data
      };

      this.results.push(result);
      return result;
    } catch (error) {
      const responseTime = Date.now() - startTime;

      const result = {
        iteration,
        success: false,
        responseTime,
        error: error.message,
        status: error.response?.status || 500
      };

      this.results.push(result);
      return result;
    }
  }

  printResults(testName) {
    const totalRequests = this.results.length;
    const successfulRequests = this.results.filter(r => r.success).length;
    const failedRequests = totalRequests - successfulRequests;

    const successRate = (successfulRequests / totalRequests) * 100;
    const responseTimes = this.results.map(r => r.responseTime).filter(rt => rt > 0);

    const avgResponseTime = responseTimes.length > 0
      ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
      : 0;

    const minResponseTime = responseTimes.length > 0 ? Math.min(...responseTimes) : 0;
    const maxResponseTime = responseTimes.length > 0 ? Math.max(...responseTimes) : 0;

    // Calculate percentiles
    responseTimes.sort((a, b) => a - b);
    const p95Index = Math.floor(responseTimes.length * 0.95);
    const p95ResponseTime = responseTimes[p95Index] || 0;

    console.log(chalk.bold('\n=== Test Results ==='));
    console.log(chalk.white(`Test: ${testName}`));
    console.log(chalk.white(`Total Requests: ${totalRequests}`));
    console.log(chalk.white(`Successful: ${successfulRequests}`));
    console.log(chalk.white(`Failed: ${failedRequests}`));
    console.log(chalk.white(`Success Rate: ${successRate.toFixed(2)}%`));
    console.log(chalk.white(`Avg Response Time: ${avgResponseTime.toFixed(2)}ms`));
    console.log(chalk.white(`Min Response Time: ${minResponseTime}ms`));
    console.log(chalk.white(`Max Response Time: ${maxResponseTime}ms`));
    console.log(chalk.white(`P95 Response Time: ${p95ResponseTime}ms`));

    if (failedRequests > 0) {
      console.log(chalk.red('\n=== Failed Requests ==='));
      const failedResults = this.results.filter(r => !r.success);
      failedResults.slice(0, 5).forEach(result => {
        console.log(chalk.red(`  Request ${result.iteration}: ${result.error}`));
      });

      if (failedResults.length > 5) {
        console.log(chalk.red(`  ... and ${failedResults.length - 5} more`));
      }
    }

    // Reset results for next test
    this.results = [];
  }

  // Individual test scenarios
  async testPublicContentAccess(iteration) {
    const response = await axios.get(`${this.baseURL}/api/content/type/chapter`);
    return response;
  }

  async testUserAuthentication(iteration) {
    // Simulate user registration/login
    const userData = {
      email: `testuser${iteration}@example.com`,
      name: `Test User ${iteration}`,
      password: 'SecurePass123!'
    };

    const response = await axios.post(`${this.baseURL}/api/auth/register`, userData);
    return response;
  }

  async testContentSearch(iteration) {
    const response = await axios.get(`${this.baseURL}/api/content/search?q=radiology`);
    return response;
  }

  async testUserProgressUpdate(iteration) {
    // First authenticate
    const authResponse = await axios.post(`${this.baseURL}/api/auth/login`, {
      email: 'admin@example.com',
      password: 'password123'
    });

    const token = authResponse.data.token;

    // Then update progress
    const response = await axios.post(
      `${this.baseURL}/api/user/progress`,
      {
        contentId: `content_${iteration}`,
        status: 'in_progress',
        completionPercentage: 50
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    return response;
  }

  async runAllTests() {
    console.log(chalk.bold.magenta('🚀 Starting Radiology Textbook Platform Load Tests'));

    // Test public content access
    await this.runTest(
      'Public Content Access',
      this.testPublicContentAccess.bind(this),
      20, // 20 concurrent users
      50  // 50 iterations
    );

    // Test content search
    await this.runTest(
      'Content Search',
      this.testContentSearch.bind(this),
      15, // 15 concurrent users
      30  // 30 iterations
    );

    // Test user authentication
    await this.runTest(
      'User Authentication',
      this.testUserAuthentication.bind(this),
      10, // 10 concurrent registrations
      20  // 20 iterations
    );

    // Test user progress updates (requires auth)
    await this.runTest(
      'User Progress Updates',
      this.testUserProgressUpdate.bind(this),
      5,  // 5 concurrent authenticated users
      15  // 15 iterations
    );

    console.log(chalk.bold.green('\n🎉 All load tests completed!'));
  }
}

// Run the tests if this file is executed directly
if (require.main === module) {
  const loadTester = new LoadTester(process.env.API_BASE_URL || 'http://localhost:8000');
  loadTester.runAllTests().catch(console.error);
}

module.exports = LoadTester;