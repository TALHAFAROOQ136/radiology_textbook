import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for quiz attempt validation
const QuizAttemptSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  quizId: z.string().uuid(),
  userId: z.string().uuid(),
  attemptNumber: z.number().int().min(1),
  score: z.number().min(0).max(100),
  responses: z.array(z.object({
    questionId: z.string().uuid(),
    selectedAnswer: z.string(),
    isCorrect: z.boolean(),
    pointsAwarded: z.number().min(0)
  })),
  feedback: z.record(z.string()).optional().default({}),
  startedAt: z.date(),
  completedAt: z.date().nullable().optional(),
  timeTakenSeconds: z.number().int().min(0),
  isPassed: z.boolean(),
  createdAt: z.date().default(() => new Date()),
});

// Type inference from Zod schema
export type QuizAttempt = z.infer<typeof QuizAttemptSchema>;

/**
 * QuizAttempt class representing a user's attempt at a quiz
 */
export class QuizAttemptModel {
  id: string;
  quizId: string;
  userId: string;
  attemptNumber: number;
  score: number;
  responses: Array<{
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
    pointsAwarded: number;
  }>;
  feedback: Record<string, string>;
  startedAt: Date;
  completedAt: Date | null;
  timeTakenSeconds: number;
  isPassed: boolean;
  createdAt: Date;

  constructor(data: Partial<QuizAttempt>) {
    const parsedData = QuizAttemptSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date()
    });

    this.id = parsedData.id;
    this.quizId = parsedData.quizId;
    this.userId = parsedData.userId;
    this.attemptNumber = parsedData.attemptNumber;
    this.score = parsedData.score;
    this.responses = parsedData.responses;
    this.feedback = parsedData.feedback;
    this.startedAt = parsedData.startedAt;
    this.completedAt = parsedData.completedAt || null;
    this.timeTakenSeconds = parsedData.timeTakenSeconds;
    this.isPassed = parsedData.isPassed;
    this.createdAt = parsedData.createdAt;
  }

  /**
   * Validates quiz attempt data against the schema
   */
  static validate(data: Partial<QuizAttempt>): boolean {
    try {
      QuizAttemptSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates quiz attempt data and returns detailed error information
   */
  static validateWithErrors(data: Partial<QuizAttempt>): { success: boolean; errors?: string[] } {
    try {
      QuizAttemptSchema.parse(data);
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
   * Marks the quiz attempt as completed
   */
  complete(): void {
    if (this.completedAt) {
      throw new Error('Quiz attempt already completed');
    }

    this.completedAt = new Date();
    this.timeTakenSeconds = Math.floor((this.completedAt.getTime() - this.startedAt.getTime()) / 1000);
  }

  /**
   * Gets the number of correct answers
   */
  getCorrectAnswersCount(): number {
    return this.responses.filter(response => response.isCorrect).length;
  }

  /**
   * Gets the total number of questions
   */
  getTotalQuestionsCount(): number {
    return this.responses.length;
  }

  /**
   * Gets the percentage of correct answers
   */
  getCorrectPercentage(): number {
    if (this.getTotalQuestionsCount() === 0) {
      return 0;
    }
    return (this.getCorrectAnswersCount() / this.getTotalQuestionsCount()) * 100;
  }

  /**
   * Gets the total possible points
   */
  getTotalPossiblePoints(): number {
    return this.responses.reduce((total, response) => total + response.pointsAwarded, 0);
  }

  /**
   * Gets the points earned
   */
  getPointsEarned(): number {
    return this.responses.reduce((total, response) => total + response.pointsAwarded, 0);
  }

  /**
   * Gets the formatted time taken
   */
  getFormattedTimeTaken(): string {
    const hours = Math.floor(this.timeTakenSeconds / 3600);
    const minutes = Math.floor((this.timeTakenSeconds % 3600) / 60);
    const seconds = this.timeTakenSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }

  /**
   * Gets detailed feedback for a specific question
   */
  getQuestionFeedback(questionId: string): string | undefined {
    return this.feedback[questionId];
  }

  /**
   * Checks if a specific question was answered correctly
   */
  isQuestionCorrect(questionId: string): boolean {
    const response = this.responses.find(r => r.questionId === questionId);
    return response ? response.isCorrect : false;
  }

  /**
   * Gets the selected answer for a specific question
   */
  getSelectedAnswer(questionId: string): string | undefined {
    const response = this.responses.find(r => r.questionId === questionId);
    return response ? response.selectedAnswer : undefined;
  }

  /**
   * Calculates the overall performance rating
   */
  getPerformanceRating(): 'excellent' | 'good' | 'fair' | 'needs_improvement' {
    if (this.score >= 90) {
      return 'excellent';
    } else if (this.score >= 75) {
      return 'good';
    } else if (this.score >= 60) {
      return 'fair';
    } else {
      return 'needs_improvement';
    }
  }

  /**
   * Checks if the attempt score is passing
   */
  isPassingAttempt(passingScore: number): boolean {
    return this.score >= passingScore;
  }
}

/**
 * QuizAttempt factory for creating quiz attempt instances with validation
 */
export class QuizAttemptFactory {
  /**
   * Creates a new quiz attempt instance
   */
  static create(attemptData: Omit<QuizAttempt, 'id' | 'createdAt'>): QuizAttemptModel {
    return new QuizAttemptModel(attemptData);
  }

  /**
   * Creates a new quiz attempt for a user taking a quiz
   */
  static createForUser(
    quizId: string,
    userId: string,
    attemptNumber: number,
    startedAt: Date = new Date()
  ): QuizAttemptModel {
    return new QuizAttemptModel({
      quizId,
      userId,
      attemptNumber,
      score: 0,
      responses: [],
      feedback: {},
      startedAt,
      timeTakenSeconds: 0,
      isPassed: false
    });
  }

  /**
   * Creates a completed quiz attempt with responses
   */
  static createCompleted(
    quizId: string,
    userId: string,
    attemptNumber: number,
    responses: Array<{
      questionId: string;
      selectedAnswer: string;
      isCorrect: boolean;
      pointsAwarded: number;
    }>,
    score: number,
    isPassed: boolean,
    startedAt: Date,
    completedAt: Date,
    feedback?: Record<string, string>
  ): QuizAttemptModel {
    const attempt = new QuizAttemptModel({
      quizId,
      userId,
      attemptNumber,
      score,
      responses,
      feedback: feedback || {},
      startedAt,
      completedAt,
      timeTakenSeconds: Math.floor((completedAt.getTime() - startedAt.getTime()) / 1000),
      isPassed
    });

    return attempt;
  }
}