import request from 'supertest';
import { app } from '../../src/server'; // Adjust import path to your actual app instance
import { User } from '../../src/models/user';
import { BookContent } from '../../src/models/content';
import { UserService } from '../../src/services/user-service';
import { ContentService } from '../../src/services/content-service';

describe('Performance and Load Tests', () => {
  let testUser: User;
  let testContent: BookContent;
  let authToken: string;

  beforeAll(async () => {
    // Setup test user
    const userService = new UserService();
    testUser = await userService.createUser({
      email: 'perf-test@example.com',
      name: 'Performance Test User',
      passwordHash: '$2b$10$examplehashedpassword',
      medicalLevel: 'medical_student'
    });

    // Setup test content
    const contentService = new ContentService();
    testContent = await contentService.createContent({
      parentId: null,
      type: 'chapter',
      title: 'Performance Test Chapter',
      slug: 'perf-test-chapter',
      content: 'This is a test chapter for performance testing.',
      orderNumber: 1,
      partNumber: 1,
      chapterNumber: 1,
      createdBy: testUser.id
    });

    // Login to get token
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'perf-test@example.com',
        password: 'ValidPassword123!' // Use actual password
      })
      .expect(200);

    authToken = loginResponse.body.token;
  });

  afterAll(async () => {
    // Cleanup test data
    if (testContent) {
      const contentService = new ContentService();
      await contentService.deleteContent(testContent.id);
    }

    if (testUser) {
      const userService = new UserService();
      await userService.deleteUser(testUser.id);
    }
  });

  describe('API Response Times', () => {
    const TIMEOUT_THRESHOLD = 2000; // 2 seconds in milliseconds

    it('should respond to health check within threshold', async () => {
      const startTime = Date.now();

      await request(app)
        .get('/health')
        .expect(200);

      const responseTime = Date.now() - startTime;
      expect(responseTime).toBeLessThan(TIMEOUT_THRESHOLD);
    });

    it('should retrieve user profile within threshold', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const startTime = Date.now();

      await request(app)
        .get('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      const responseTime = Date.now() - startTime;
      expect(responseTime).toBeLessThan(TIMEOUT_THRESHOLD);
    });

    it('should retrieve content within threshold', async () => {
      const startTime = Date.now();

      await request(app)
        .get(`/api/content/${testContent.id}`)
        .expect(200);

      const responseTime = Date.now() - startTime;
      expect(responseTime).toBeLessThan(TIMEOUT_THRESHOLD);
    });

    it('should save progress within threshold', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const progressData = {
        contentId: testContent.id,
        status: 'in_progress' as const,
        completionPercentage: 25
      };

      const startTime = Date.now();

      await request(app)
        .post('/api/user/progress')
        .set('Authorization', `Bearer ${authToken}`)
        .send(progressData)
        .expect(200);

      const responseTime = Date.now() - startTime;
      expect(responseTime).toBeLessThan(TIMEOUT_THRESHOLD);
    });
  });

  describe('Concurrent User Simulation', () => {
    const NUM_CONCURRENT_USERS = 10;
    const REQUESTS_PER_USER = 5;

    it(`should handle ${NUM_CONCURRENT_USERS} concurrent users making ${REQUESTS_PER_USER} requests each`, async () => {
      const promises = [];

      // Create multiple users
      for (let i = 0; i < NUM_CONCURRENT_USERS; i++) {
        const userEmail = `concurrent-user-${i}@example.com`;

        // Register user
        const registerPromise = request(app)
          .post('/api/auth/register')
          .send({
            email: userEmail,
            name: `Concurrent User ${i}`,
            password: 'SecurePass123!',
            medicalLevel: 'medical_student'
          })
          .then(response => response.body.token);

        promises.push(registerPromise);
      }

      // Wait for all users to be registered
      const authTokens = await Promise.all(promises);

      // Now simulate each user making multiple requests
      const userRequests = [];
      for (let i = 0; i < NUM_CONCURRENT_USERS; i++) {
        const token = authTokens[i];

        for (let j = 0; j < REQUESTS_PER_USER; j++) {
          const requestPromise = request(app)
            .get('/api/auth/profile')
            .set('Authorization', `Bearer ${token}`)
            .then(response => response.status);

          userRequests.push(requestPromise);
        }
      }

      // Execute all requests concurrently
      const results = await Promise.all(userRequests);

      // Verify all requests succeeded
      expect(results.every(status => status === 200)).toBe(true);
      expect(results.length).toBe(NUM_CONCURRENT_USERS * REQUESTS_PER_USER);
    });
  });

  describe('Content Search Performance', () => {
    it('should search content within acceptable time', async () => {
      const startTime = Date.now();

      await request(app)
        .get('/api/content/search?q=radiology')
        .expect(200);

      const responseTime = Date.now() - startTime;
      expect(responseTime).toBeLessThan(1000); // Should complete in under 1 second
    });

    it('should retrieve content hierarchy efficiently', async () => {
      const startTime = Date.now();

      await request(app)
        .post(`/api/content/hierarchy/${testContent.id}`)
        .expect(200);

      const responseTime = Date.now() - startTime;
      expect(responseTime).toBeLessThan(1000); // Should complete in under 1 second
    });
  });

  describe('Database Operation Performance', () => {
    it('should handle multiple simultaneous progress updates', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const progressUpdates = [];
      for (let i = 0; i < 5; i++) {
        const progressData = {
          contentId: testContent.id,
          status: 'in_progress' as const,
          completionPercentage: 20 * (i + 1),
          timeSpentSeconds: 60 * (i + 1)
        };

        const updatePromise = request(app)
          .post('/api/user/progress')
          .set('Authorization', `Bearer ${authToken}`)
          .send(progressData)
          .then(response => response.status);

        progressUpdates.push(updatePromise);
      }

      const results = await Promise.all(progressUpdates);
      expect(results.every(status => status === 200)).toBe(true);
    });

    it('should retrieve multiple content items efficiently', async () => {
      const contentIds = [testContent.id];

      // Create additional content items for testing
      const contentService = new ContentService();
      for (let i = 0; i < 4; i++) {
        const newContent = await contentService.createContent({
          parentId: null,
          type: 'section',
          title: `Additional Test Section ${i}`,
          slug: `additional-section-${i}`,
          content: `Additional test content ${i}`,
          orderNumber: i + 1,
          createdBy: testUser.id
        });
        contentIds.push(newContent.id);
      }

      // Measure time to retrieve multiple items
      const startTime = Date.now();

      const retrievalPromises = contentIds.map(id =>
        request(app)
          .get(`/api/content/${id}`)
          .expect(200)
      );

      await Promise.all(retrievalPromises);

      const responseTime = Date.now() - startTime;

      // Clean up additional content
      for (let i = 0; i < 4; i++) {
        await contentService.deleteContent(contentIds[i + 1]);
      }

      expect(responseTime).toBeLessThan(2000); // Should complete in under 2 seconds for 5 items
    });
  });
});