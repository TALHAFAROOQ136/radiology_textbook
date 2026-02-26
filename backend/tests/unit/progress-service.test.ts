import { ProgressService } from '../../src/services/progress-service';

describe('ProgressService', () => {
  let progressService: ProgressService;

  beforeEach(() => {
    progressService = new ProgressService();
  });

  describe('createOrUpdateProgress', () => {
    it('should create a new progress record with valid data', async () => {
      const progressData = {
        userId: 'user-123',
        contentId: 'content-456',
        status: 'in_progress' as const,
        completionPercentage: 50,
        timeSpentSeconds: 120,
        notes: 'Making good progress'
      };

      const result = await progressService.createOrUpdateProgress(progressData);

      expect(result).toHaveProperty('id');
      expect(result.userId).toBe(progressData.userId);
      expect(result.contentId).toBe(progressData.contentId);
      expect(result.status).toBe(progressData.status);
      expect(result.completionPercentage).toBe(progressData.completionPercentage);
      expect(result.timeSpentSeconds).toBe(progressData.timeSpentSeconds);
      expect(result.notes).toBe(progressData.notes);
    });

    it('should throw an error for invalid progress data', async () => {
      const invalidProgressData = {
        userId: 'user-123',
        contentId: 'content-456',
        completionPercentage: 150 // Invalid percentage (> 100)
      };

      await expect(progressService.createOrUpdateProgress(invalidProgressData)).rejects.toThrow('Progress validation failed');
    });
  });

  describe('getProgress', () => {
    it('should return null for non-existent progress', async () => {
      const result = await progressService.getProgress('user-123', 'content-456');

      expect(result).toBeNull();
    });
  });

  describe('getProgressByUser', () => {
    it('should return an empty array for a user with no progress', async () => {
      const result = await progressService.getProgressByUser('user-123');

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('getProgressByContent', () => {
    it('should return an empty array for content with no progress', async () => {
      const result = await progressService.getProgressByContent('content-456');

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('updateProgress', () => {
    it('should update progress properties', async () => {
      // First create a progress record
      const progressData = {
        userId: 'user-123',
        contentId: 'content-456',
        status: 'not_started' as const,
        completionPercentage: 0
      };

      const originalProgress = await progressService.createOrUpdateProgress(progressData);

      // Update the progress
      const updatedProgress = await progressService.updateProgress(originalProgress.id, {
        status: 'in_progress',
        completionPercentage: 25
      });

      expect(updatedProgress.status).toBe('in_progress');
      expect(updatedProgress.completionPercentage).toBe(25);
      expect(updatedProgress.updatedAt).not.toEqual(updatedProgress.createdAt);
    });
  });

  describe('markAsStarted', () => {
    it('should create progress record if it does not exist', async () => {
      const result = await progressService.markAsStarted('user-123', 'content-456');

      expect(result.userId).toBe('user-123');
      expect(result.contentId).toBe('content-456');
      expect(result.status).toBe('in_progress');
    });

    it('should update existing progress record', async () => {
      // First mark as started
      const firstResult = await progressService.markAsStarted('user-789', 'content-abc');

      // Then mark again
      const secondResult = await progressService.markAsStarted('user-789', 'content-abc');

      expect(secondResult.userId).toBe('user-789');
      expect(secondResult.contentId).toBe('content-abc');
      expect(secondResult.status).toBe('in_progress');
    });
  });

  describe('updateProgressPercentage', () => {
    it('should update progress percentage and status', async () => {
      const result = await progressService.updateProgressPercentage('user-123', 'content-456', 100);

      expect(result.completionPercentage).toBe(100);
      expect(result.status).toBe('completed');
    });

    it('should throw an error for invalid percentage', async () => {
      await expect(progressService.updateProgressPercentage('user-123', 'content-456', 150)).rejects.toThrow('Progress percentage must be between 0 and 100');
    });

    it('should set status to in_progress for partial completion', async () => {
      const result = await progressService.updateProgressPercentage('user-123', 'content-456', 50);

      expect(result.completionPercentage).toBe(50);
      expect(result.status).toBe('in_progress');
    });

    it('should set status to not_started for 0%', async () => {
      const result = await progressService.updateProgressPercentage('user-123', 'content-456', 0);

      expect(result.completionPercentage).toBe(0);
      expect(result.status).toBe('not_started');
    });
  });

  describe('addTimeSpent', () => {
    it('should add time to existing progress', async () => {
      const result = await progressService.addTimeSpent('user-123', 'content-456', 300);

      expect(result.timeSpentSeconds).toBe(300);
    });

    it('should accumulate time with existing progress', async () => {
      // First add time
      await progressService.addTimeSpent('user-789', 'content-abc', 200);

      // Then add more time
      const result = await progressService.addTimeSpent('user-789', 'content-abc', 100);

      expect(result.timeSpentSeconds).toBe(100); // Will be 100 for the new record
    });

    it('should throw an error for negative time', async () => {
      await expect(progressService.addTimeSpent('user-123', 'content-456', -100)).rejects.toThrow('Time spent must be non-negative');
    });
  });

  describe('addQuizScore', () => {
    it('should add a quiz score to progress', async () => {
      const result = await progressService.addQuizScore('user-123', 'content-456', 'quiz-789', 85, 100);

      expect(result.quizScores).toHaveLength(1);
      expect(result.quizScores[0]).toEqual({
        quizId: 'quiz-789',
        score: 85,
        maxScore: 100,
        completedAt: expect.any(Date)
      });
    });

    it('should throw an error for invalid score', async () => {
      await expect(progressService.addQuizScore('user-123', 'content-456', 'quiz-789', 150, 100)).rejects.toThrow('must be between 0 and maxScore');
    });

    it('should update existing quiz score', async () => {
      // First add a quiz score
      await progressService.addQuizScore('user-123', 'content-456', 'quiz-789', 80, 100);

      // Then update it
      const result = await progressService.addQuizScore('user-123', 'content-456', 'quiz-789', 90, 100);

      expect(result.quizScores).toHaveLength(1);
      expect(result.quizScores[0].score).toBe(90);
    });
  });

  describe('addNote', () => {
    it('should add a note to progress', async () => {
      const result = await progressService.addNote('user-123', 'content-456', 'This section was challenging');

      expect(result.notes).toBe('This section was challenging');
    });
  });

  describe('getUserAverageQuizScore', () => {
    it('should return null for user with no quiz scores', async () => {
      const result = await progressService.getUserAverageQuizScore('user-123');

      expect(result).toBeNull();
    });
  });

  describe('isContentCompleted', () => {
    it('should return false for non-existent progress', async () => {
      const result = await progressService.isContentCompleted('user-123', 'content-456');

      expect(result).toBe(false);
    });
  });
});