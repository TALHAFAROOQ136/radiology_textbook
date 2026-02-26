import { LearningProgress } from '../models/progress';
import { LearningProgressModel, LearningProgressFactory } from '../models/progress';

/**
 * ProgressService class for handling user learning progress operations
 */
export class ProgressService {
  /**
   * Creates or updates user progress for content
   */
  async createOrUpdateProgress(progressData: {
    userId: string;
    contentId: string;
    status?: 'not_started' | 'in_progress' | 'completed';
    completionPercentage?: number;
    timeSpentSeconds?: number;
    notes?: string | null;
    quizScores?: Array<{
      quizId: string;
      score: number;
      maxScore: number;
      completedAt: Date;
    }>;
  }): Promise<LearningProgress> {
    // Validate progress data
    const validation = LearningProgressModel.validateWithErrors({
      userId: progressData.userId,
      contentId: progressData.contentId,
      status: progressData.status || 'not_started',
      completionPercentage: progressData.completionPercentage || 0,
      timeSpentSeconds: progressData.timeSpentSeconds || 0,
      notes: progressData.notes,
      quizScores: progressData.quizScores || []
    });

    if (!validation.success) {
      throw new Error(`Progress validation failed: ${validation.errors?.join(', ')}`);
    }

    // Create or update progress
    const progress = LearningProgressFactory.create({
      userId: progressData.userId,
      contentId: progressData.contentId,
      status: progressData.status || 'not_started',
      completionPercentage: progressData.completionPercentage || 0,
      timeSpentSeconds: progressData.timeSpentSeconds || 0,
      notes: progressData.notes,
      quizScores: progressData.quizScores || []
    });

    // In a real implementation, save to database
    return progress as LearningProgress;
  }

  /**
   * Gets user progress for specific content
   */
  async getProgress(userId: string, contentId: string): Promise<LearningProgress | null> {
    // In a real implementation, this would query the database
    // For now, return null to indicate not found
    return null;
  }

  /**
   * Gets all progress for a user
   */
  async getProgressByUser(userId: string): Promise<LearningProgress[]> {
    // In a real implementation, this would query the database
    // For now, return an empty array
    return [];
  }

  /**
   * Gets all progress for a specific content item
   */
  async getProgressByContent(contentId: string): Promise<LearningProgress[]> {
    // In a real implementation, this would query the database
    // For now, return an empty array
    return [];
  }

  /**
   * Updates user progress
   */
  async updateProgress(progressId: string, progressData: Partial<LearningProgress>): Promise<LearningProgress> {
    // In a real implementation, this would update the database
    // For now, return a mock updated progress
    const updatedProgress = {
      id: progressId,
      userId: progressData.userId || 'mock-user-id',
      contentId: progressData.contentId || 'mock-content-id',
      status: progressData.status || 'not_started',
      completionPercentage: progressData.completionPercentage || 0,
      timeSpentSeconds: progressData.timeSpentSeconds || 0,
      lastAccessedAt: progressData.lastAccessedAt || new Date(),
      firstAccessedAt: progressData.firstAccessedAt || new Date(),
      completedAt: progressData.completedAt || null,
      notes: progressData.notes || null,
      quizScores: progressData.quizScores || [],
      engagementMetrics: progressData.engagementMetrics || {},
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Update the progress object
    const progressInstance = new LearningProgressModel(updatedProgress);
    progressInstance.update(progressData);

    return progressInstance as LearningProgress;
  }

  /**
   * Marks content as started for user
   */
  async markAsStarted(userId: string, contentId: string): Promise<LearningProgress> {
    const existingProgress = await this.getProgress(userId, contentId);
    let progress: LearningProgress;

    if (existingProgress) {
      progress = await this.updateProgress(existingProgress.id, {
        status: 'in_progress',
        firstAccessedAt: existingProgress.firstAccessedAt || new Date(),
        lastAccessedAt: new Date()
      });
    } else {
      progress = await this.createOrUpdateProgress({
        userId,
        contentId,
        status: 'in_progress',
        firstAccessedAt: new Date(),
        lastAccessedAt: new Date()
      });
    }

    return progress;
  }

  /**
   * Updates progress percentage
   */
  async updateProgressPercentage(userId: string, contentId: string, percentage: number): Promise<LearningProgress> {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Progress percentage must be between 0 and 100');
    }

    const status = percentage === 100 ? 'completed' : percentage > 0 ? 'in_progress' : 'not_started';
    const completedAt = percentage === 100 ? new Date() : undefined;

    const existingProgress = await this.getProgress(userId, contentId);
    let progress: LearningProgress;

    if (existingProgress) {
      progress = await this.updateProgress(existingProgress.id, {
        completionPercentage: percentage,
        status,
        completedAt
      });
    } else {
      progress = await this.createOrUpdateProgress({
        userId,
        contentId,
        status,
        completionPercentage: percentage,
        completedAt
      });
    }

    return progress;
  }

  /**
   * Adds time spent to user's progress
   */
  async addTimeSpent(userId: string, contentId: string, seconds: number): Promise<LearningProgress> {
    if (seconds < 0) {
      throw new Error('Time spent must be non-negative');
    }

    const existingProgress = await this.getProgress(userId, contentId);
    let progress: LearningProgress;

    if (existingProgress) {
      const newTimeSpent = existingProgress.timeSpentSeconds + seconds;
      progress = await this.updateProgress(existingProgress.id, {
        timeSpentSeconds: newTimeSpent,
        lastAccessedAt: new Date()
      });
    } else {
      progress = await this.createOrUpdateProgress({
        userId,
        contentId,
        timeSpentSeconds: seconds,
        lastAccessedAt: new Date()
      });
    }

    return progress;
  }

  /**
   * Adds a quiz score to user's progress
   */
  async addQuizScore(userId: string, contentId: string, quizId: string, score: number, maxScore: number): Promise<LearningProgress> {
    if (score < 0 || score > maxScore) {
      throw new Error(`Score (${score}) must be between 0 and maxScore (${maxScore})`);
    }

    const existingProgress = await this.getProgress(userId, contentId);
    let progress: LearningProgress;

    if (existingProgress) {
      // Check if quiz score already exists and update it, otherwise add new
      const existingQuizScoreIndex = existingProgress.quizScores.findIndex(qs => qs.quizId === quizId);
      let updatedQuizScores = [...existingProgress.quizScores];

      if (existingQuizScoreIndex >= 0) {
        updatedQuizScores[existingQuizScoreIndex] = {
          quizId,
          score,
          maxScore,
          completedAt: new Date()
        };
      } else {
        updatedQuizScores.push({
          quizId,
          score,
          maxScore,
          completedAt: new Date()
        });
      }

      progress = await this.updateProgress(existingProgress.id, {
        quizScores: updatedQuizScores
      });
    } else {
      progress = await this.createOrUpdateProgress({
        userId,
        contentId,
        quizScores: [{
          quizId,
          score,
          maxScore,
          completedAt: new Date()
        }]
      });
    }

    return progress;
  }

  /**
   * Adds a note to user's progress
   */
  async addNote(userId: string, contentId: string, note: string): Promise<LearningProgress> {
    const existingProgress = await this.getProgress(userId, contentId);
    let progress: LearningProgress;

    if (existingProgress) {
      progress = await this.updateProgress(existingProgress.id, {
        notes: note
      });
    } else {
      progress = await this.createOrUpdateProgress({
        userId,
        contentId,
        notes: note
      });
    }

    return progress;
  }

  /**
   * Gets user's progress summary for a course or part
   */
  async getUserProgressSummary(userId: string, rootContentId: string): Promise<{
    totalContent: number;
    completedContent: number;
    inProgressContent: number;
    notStartedContent: number;
    overallProgress: number;
    timeSpent: number;
  }> {
    // In a real implementation, this would aggregate progress data from the database
    // For now, return mock summary data
    return {
      totalContent: 0,
      completedContent: 0,
      inProgressContent: 0,
      notStartedContent: 0,
      overallProgress: 0,
      timeSpent: 0
    };
  }

  /**
   * Gets content completion status for a user
   */
  async isContentCompleted(userId: string, contentId: string): Promise<boolean> {
    const progress = await this.getProgress(userId, contentId);
    return progress ? progress.status === 'completed' : false;
  }

  /**
   * Resets user's progress for specific content
   */
  async resetProgress(userId: string, contentId: string): Promise<LearningProgress> {
    const progress = await this.createOrUpdateProgress({
      userId,
      contentId,
      status: 'not_started',
      completionPercentage: 0,
      timeSpentSeconds: 0,
      notes: null,
      quizScores: []
    });

    return progress;
  }

  /**
   * Deletes progress for specific content
   */
  async deleteProgress(progressId: string): Promise<boolean> {
    // In a real implementation, this would delete from the database
    // For now, return true to indicate success
    console.log(`Deleting progress with ID: ${progressId}`);
    return true;
  }

  /**
   * Gets user's average quiz score across all content
   */
  async getUserAverageQuizScore(userId: string): Promise<number | null> {
    const allProgress = await this.getProgressByUser(userId);

    if (allProgress.length === 0) {
      return null;
    }

    const allQuizScores = allProgress.flatMap(p => p.quizScores);

    if (allQuizScores.length === 0) {
      return null;
    }

    const totalScore = allQuizScores.reduce((sum, qs) => sum + (qs.score / qs.maxScore * 100), 0);
    return totalScore / allQuizScores.length;
  }
}

// Singleton instance
export const progressService = new ProgressService();