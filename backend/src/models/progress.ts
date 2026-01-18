import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for learning progress validation
const LearningProgressSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  userId: z.string().uuid(),
  contentId: z.string().uuid(),
  status: z.enum(['not_started', 'in_progress', 'completed']).default('not_started'),
  completionPercentage: z.number().min(0).max(100).default(0),
  timeSpentSeconds: z.number().int().min(0).default(0),
  lastAccessedAt: z.date().nullable().optional(),
  firstAccessedAt: z.date().nullable().optional(),
  completedAt: z.date().nullable().optional(),
  notes: z.string().nullable().optional(),
  quizScores: z.array(z.object({
    quizId: z.string().uuid(),
    score: z.number().min(0).max(100),
    maxScore: z.number().min(0).max(100),
    completedAt: z.date()
  })).optional().default([]),
  engagementMetrics: z.record(z.unknown()).optional().default({}),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

// Type inference from Zod schema
export type LearningProgress = z.infer<typeof LearningProgressSchema>;

/**
 * LearningProgress class representing user progress through textbook content
 */
export class LearningProgressModel {
  id: string;
  userId: string;
  contentId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  completionPercentage: number;
  timeSpentSeconds: number;
  lastAccessedAt: Date | null;
  firstAccessedAt: Date | null;
  completedAt: Date | null;
  notes: string | null;
  quizScores: Array<{
    quizId: string;
    score: number;
    maxScore: number;
    completedAt: Date;
  }>;
  engagementMetrics: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<LearningProgress>) {
    const parsedData = LearningProgressSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.userId = parsedData.userId;
    this.contentId = parsedData.contentId;
    this.status = parsedData.status;
    this.completionPercentage = parsedData.completionPercentage;
    this.timeSpentSeconds = parsedData.timeSpentSeconds;
    this.lastAccessedAt = parsedData.lastAccessedAt || null;
    this.firstAccessedAt = parsedData.firstAccessedAt || null;
    this.completedAt = parsedData.completedAt || null;
    this.notes = parsedData.notes || null;
    this.quizScores = parsedData.quizScores;
    this.engagementMetrics = parsedData.engagementMetrics;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Validates learning progress data against the schema
   */
  static validate(data: Partial<LearningProgress>): boolean {
    try {
      LearningProgressSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates learning progress data and returns detailed error information
   */
  static validateWithErrors(data: Partial<LearningProgress>): { success: boolean; errors?: string[] } {
    try {
      LearningProgressSchema.parse(data);
      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          success: false,
          errors: error.errors.map(e => e.message)
        };
      }
      return { success: false, errors: ['Validation failed'] };
    }
  }

  /**
   * Updates learning progress information
   */
  update(progressData: Partial<LearningProgress>): void {
    const updateData = { ...this, ...progressData, updatedAt: new Date() };
    const parsedData = LearningProgressSchema.parse(updateData);

    this.status = parsedData.status;
    this.completionPercentage = parsedData.completionPercentage;
    this.timeSpentSeconds = parsedData.timeSpentSeconds;
    this.lastAccessedAt = parsedData.lastAccessedAt;
    this.completedAt = parsedData.completedAt;
    this.notes = parsedData.notes;
    this.quizScores = parsedData.quizScores;
    this.engagementMetrics = parsedData.engagementMetrics;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Marks content as started
   */
  start(): void {
    if (this.status === 'not_started') {
      this.status = 'in_progress';
      this.firstAccessedAt = new Date();
    }
    this.lastAccessedAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Updates progress percentage
   */
  updateProgress(percentage: number): void {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Progress percentage must be between 0 and 100');
    }

    this.completionPercentage = percentage;

    if (percentage === 100) {
      this.status = 'completed';
      this.completedAt = new Date();
    } else if (percentage > 0) {
      this.status = 'in_progress';
    }

    this.updatedAt = new Date();
  }

  /**
   * Adds time spent on content
   */
  addTimeSpent(seconds: number): void {
    if (seconds < 0) {
      throw new Error('Time spent must be non-negative');
    }

    this.timeSpentSeconds += seconds;
    this.lastAccessedAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Adds a quiz score
   */
  addQuizScore(quizId: string, score: number, maxScore: number): void {
    if (score < 0 || score > maxScore) {
      throw new Error(`Score (${score}) must be between 0 and maxScore (${maxScore})`);
    }

    // Check if quiz score already exists and update it, otherwise add new
    const existingIndex = this.quizScores.findIndex(qs => qs.quizId === quizId);
    if (existingIndex >= 0) {
      this.quizScores[existingIndex] = {
        quizId,
        score,
        maxScore,
        completedAt: new Date()
      };
    } else {
      this.quizScores.push({
        quizId,
        score,
        maxScore,
        completedAt: new Date()
      });
    }

    this.updatedAt = new Date();
  }

  /**
   * Adds a note to the progress
   */
  addNote(note: string): void {
    this.notes = note;
    this.updatedAt = new Date();
  }

  /**
   * Checks if content is completed
   */
  isCompleted(): boolean {
    return this.status === 'completed';
  }

  /**
   * Gets progress percentage as a number between 0 and 1
   */
  getProgressFraction(): number {
    return this.completionPercentage / 100;
  }

  /**
   * Calculates average quiz score
   */
  getAverageQuizScore(): number | null {
    if (this.quizScores.length === 0) {
      return null;
    }

    const totalScore = this.quizScores.reduce((sum, qs) => sum + (qs.score / qs.maxScore * 100), 0);
    return totalScore / this.quizScores.length;
  }

  /**
   * Gets formatted time spent
   */
  getFormattedTimeSpent(): string {
    const hours = Math.floor(this.timeSpentSeconds / 3600);
    const minutes = Math.floor((this.timeSpentSeconds % 3600) / 60);
    const seconds = this.timeSpentSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }
}

/**
 * LearningProgress factory for creating progress instances with validation
 */
export class LearningProgressFactory {
  /**
   * Creates a new learning progress instance
   */
  static create(progressData: Omit<LearningProgress, 'id' | 'createdAt' | 'updatedAt'>): LearningProgressModel {
    return new LearningProgressModel(progressData);
  }

  /**
   * Creates a progress instance for a specific user and content
   */
  static createForUserAndContent(userId: string, contentId: string): LearningProgressModel {
    return new LearningProgressModel({
      userId,
      contentId,
      status: 'not_started',
      completionPercentage: 0,
      timeSpentSeconds: 0
    });
  }

  /**
   * Creates a progress instance with initial completion
   */
  static createWithInitialProgress(
    userId: string,
    contentId: string,
    initialProgress: number
  ): LearningProgressModel {
    const progress = new LearningProgressModel({
      userId,
      contentId,
      status: initialProgress === 100 ? 'completed' : initialProgress > 0 ? 'in_progress' : 'not_started',
      completionPercentage: initialProgress,
      timeSpentSeconds: 0
    });

    if (initialProgress === 100) {
      progress.completedAt = new Date();
    }

    return progress;
  }
}