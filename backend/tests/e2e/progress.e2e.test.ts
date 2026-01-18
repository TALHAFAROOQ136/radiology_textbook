import request from 'supertest';
import { app } from '../../src/server'; // Adjust import path to your actual app instance
import { User } from '../../src/models/user';
import { BookContent } from '../../src/models/content';
import { UserService } from '../../src/services/user-service';
import { ContentService } from '../../src/services/content-service';

describe('Progress Tracking E2E Tests', () => {
  let testUser: User;
  let testContent: BookContent;
  let authToken: string;

  beforeAll(async () => {
    // Setup test user
    const userService = new UserService();
    testUser = await userService.createUser({
      email: 'progress-test@example.com',
      name: 'Progress Test User',
      passwordHash: '$2b$10$examplehashedpassword',
      medicalLevel: 'medical_student'
    });

    // Setup test content
    const contentService = new ContentService();
    testContent = await contentService.createContent({
      parentId: null,
      type: 'chapter',
      title: 'Test Chapter for Progress',
      slug: 'test-chapter-progress',
      content: 'This is a test chapter for progress tracking.',
      orderNumber: 1,
      partNumber: 1,
      chapterNumber: 1,
      createdBy: testUser.id
    });

    // Login to get token
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'progress-test@example.com',
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

  describe('Progress Tracking', () => {
    it('should save user progress for content', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const progressData = {
        contentId: testContent.id,
        status: 'in_progress' as const,
        completionPercentage: 50,
        timeSpentSeconds: 180,
        notes: 'Making good progress on this chapter'
      };

      const response = await request(app)
        .post('/api/user/progress')
        .set('Authorization', `Bearer ${authToken}`)
        .send(progressData)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.progress).toHaveProperty('id');
      expect(response.body.progress.userId).toBe(testUser.id);
      expect(response.body.progress.contentId).toBe(testContent.id);
      expect(response.body.progress.status).toBe('in_progress');
      expect(response.body.progress.completionPercentage).toBe(50);
      expect(response.body.progress.timeSpentSeconds).toBe(180);
      expect(response.body.progress.notes).toBe('Making good progress on this chapter');
    });

    it('should retrieve user progress for specific content', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .get(`/api/user/progress/${testContent.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.progress).toHaveProperty('id');
      expect(response.body.progress.userId).toBe(testUser.id);
      expect(response.body.progress.contentId).toBe(testContent.id);
      expect(response.body.progress.status).toBe('in_progress');
      expect(response.body.progress.completionPercentage).toBe(50);
    });

    it('should retrieve all user progress', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .get('/api/user/progress')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(Array.isArray(response.body.progress)).toBe(true);
      expect(response.body.progress.length).toBeGreaterThan(0);

      const progressItem = response.body.progress.find(p => p.contentId === testContent.id);
      expect(progressItem).toBeDefined();
      expect(progressItem.userId).toBe(testUser.id);
      expect(progressItem.contentId).toBe(testContent.id);
    });

    it('should update progress percentage', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      // Mark content as completed
      const response = await request(app)
        .post(`/api/user/progress/${testContent.id}/update-progress`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ percentage: 100 })
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.progress).toHaveProperty('id');
      expect(response.body.progress.completionPercentage).toBe(100);
      expect(response.body.progress.status).toBe('completed');
      expect(response.body.progress.completedAt).not.toBeNull();
    });

    it('should add time spent to progress', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .post(`/api/user/progress/${testContent.id}/add-time`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ seconds: 120 })
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.progress).toHaveProperty('id');
      expect(response.body.progress.timeSpentSeconds).toBe(300); // Previous 180 + 120
    });
  });

  describe('User Preferences', () => {
    it('should save user preferences', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const preferenceData = {
        theme: 'dark',
        contentDifficulty: 'intermediate',
        notificationsEnabled: true
      };

      const response = await request(app)
        .post('/api/user/preferences/bulk-update')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ preferences: preferenceData })
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(Array.isArray(response.body.preferences)).toBe(true);
      expect(response.body.preferences.length).toBeGreaterThan(0);
    });

    it('should retrieve user preferences', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .get('/api/user/preferences')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(Array.isArray(response.body.preferences)).toBe(true);
    });

    it('should update individual preference', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .put('/api/user/preferences/theme')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ value: 'light' })
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.preference).toHaveProperty('id');
      expect(response.body.preference.preferenceKey).toBe('theme');
      expect(response.body.preference.preferenceValue).toBe('light');
    });
  });

  describe('Quiz Functionality', () => {
    it('should track quiz attempts', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const quizAttemptData = {
        quizId: 'test-quiz-id',
        responses: [
          { questionId: 'q1', selectedAnswer: 'A' },
          { questionId: 'q2', selectedAnswer: 'B' }
        ],
        timeTakenSeconds: 300
      };

      const response = await request(app)
        .post('/api/user/quizzes/attempt')
        .set('Authorization', `Bearer ${authToken}`)
        .send(quizAttemptData)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.quizAttempt).toHaveProperty('id');
      expect(response.body.quizAttempt.userId).toBe(testUser.id);
      expect(response.body.quizAttempt.quizId).toBe('test-quiz-id');
      expect(response.body.quizAttempt.score).toBeDefined();
      expect(response.body.quizAttempt.responses).toHaveLength(2);
      expect(response.body.quizAttempt.timeTakenSeconds).toBe(300);
    });

    it('should retrieve user quiz history', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .get('/api/user/quizzes/history')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(Array.isArray(response.body.quizAttempts)).toBe(true);
    });
  });
});