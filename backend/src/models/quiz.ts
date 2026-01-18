import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for quiz validation
const QuizSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  contentId: z.string().uuid(),
  title: z.string().min(1, { message: 'Title is required' }).max(500),
  description: z.string().nullable().optional(),
  questions: z.array(z.object({
    id: z.string().uuid().default(() => uuidv4()),
    questionText: z.string().min(1, { message: 'Question text is required' }),
    questionType: z.enum(['multiple_choice', 'true_false', 'short_answer', 'essay']),
    options: z.array(z.string()).optional(), // For multiple choice questions
    correctAnswer: z.string().min(1, { message: 'Correct answer is required' }),
    explanation: z.string().nullable().optional(),
    points: z.number().int().min(1).default(1)
  })),
  passingScore: z.number().min(0).max(100).default(70),
  maxAttempts: z.number().int().min(1).default(3),
  timeLimitMinutes: z.number().int().nullable().optional(),
  isActive: z.boolean().default(true),
  randomizeQuestions: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  createdBy: z.string().uuid().nullable().optional(),
});

// Type inference from Zod schema
export type Quiz = z.infer<typeof QuizSchema>;

/**
 * Quiz class representing quiz questions for specific content sections
 */
export class QuizModel {
  id: string;
  contentId: string;
  title: string;
  description: string | null;
  questions: Array<{
    id: string;
    questionText: string;
    questionType: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
    options?: string[];
    correctAnswer: string;
    explanation: string | null;
    points: number;
  }>;
  passingScore: number;
  maxAttempts: number;
  timeLimitMinutes: number | null;
  isActive: boolean;
  randomizeQuestions: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;

  constructor(data: Partial<Quiz>) {
    const parsedData = QuizSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.contentId = parsedData.contentId;
    this.title = parsedData.title;
    this.description = parsedData.description || null;
    this.questions = parsedData.questions;
    this.passingScore = parsedData.passingScore;
    this.maxAttempts = parsedData.maxAttempts;
    this.timeLimitMinutes = parsedData.timeLimitMinutes || null;
    this.isActive = parsedData.isActive;
    this.randomizeQuestions = parsedData.randomizeQuestions;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
    this.createdBy = parsedData.createdBy || null;
  }

  /**
   * Validates quiz data against the schema
   */
  static validate(data: Partial<Quiz>): boolean {
    try {
      QuizSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates quiz data and returns detailed error information
   */
  static validateWithErrors(data: Partial<Quiz>): { success: boolean; errors?: string[] } {
    try {
      QuizSchema.parse(data);
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
   * Updates quiz information
   */
  update(quizData: Partial<Quiz>): void {
    const updateData = { ...this, ...quizData, updatedAt: new Date() };
    const parsedData = QuizSchema.parse(updateData);

    this.title = parsedData.title;
    this.description = parsedData.description;
    this.questions = parsedData.questions;
    this.passingScore = parsedData.passingScore;
    this.maxAttempts = parsedData.maxAttempts;
    this.timeLimitMinutes = parsedData.timeLimitMinutes;
    this.isActive = parsedData.isActive;
    this.randomizeQuestions = parsedData.randomizeQuestions;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Activates the quiz
   */
  activate(): void {
    this.isActive = true;
    this.updatedAt = new Date();
  }

  /**
   * Deactivates the quiz
   */
  deactivate(): void {
    this.isActive = false;
    this.updatedAt = new Date();
  }

  /**
   * Adds a new question to the quiz
   */
  addQuestion(question: {
    questionText: string;
    questionType: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
    options?: string[];
    correctAnswer: string;
    explanation?: string;
    points?: number;
  }): void {
    const newQuestion = {
      id: uuidv4(),
      questionText: question.questionText,
      questionType: question.questionType,
      options: question.options,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation || null,
      points: question.points || 1
    };

    this.questions.push(newQuestion);
    this.updatedAt = new Date();
  }

  /**
   * Removes a question from the quiz
   */
  removeQuestion(questionId: string): void {
    this.questions = this.questions.filter(q => q.id !== questionId);
    this.updatedAt = new Date();
  }

  /**
   * Updates a specific question in the quiz
   */
  updateQuestion(questionId: string, updatedQuestion: Partial<{
    questionText: string;
    questionType: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
    options: string[];
    correctAnswer: string;
    explanation: string;
    points: number;
  }>): void {
    const index = this.questions.findIndex(q => q.id === questionId);
    if (index !== -1) {
      this.questions[index] = {
        ...this.questions[index],
        ...updatedQuestion
      };
      this.updatedAt = new Date();
    }
  }

  /**
   * Gets total possible points for the quiz
   */
  getTotalPoints(): number {
    return this.questions.reduce((total, question) => total + question.points, 0);
  }

  /**
   * Checks if a score is passing
   */
  isPassingScore(score: number): boolean {
    return score >= this.passingScore;
  }

  /**
   * Shuffles the questions (for randomization)
   */
  shuffleQuestions(): void {
    if (!this.randomizeQuestions) {
      return;
    }

    // Fisher-Yates shuffle algorithm
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  /**
   * Gets quiz duration in seconds
   */
  getDurationInSeconds(): number | null {
    if (this.timeLimitMinutes === null) {
      return null;
    }
    return this.timeLimitMinutes * 60;
  }

  /**
   * Checks if user can take the quiz again
   */
  canRetake(attemptsTaken: number): boolean {
    return attemptsTaken < this.maxAttempts;
  }

  /**
   * Gets question count
   */
  getQuestionCount(): number {
    return this.questions.length;
  }
}

/**
 * Quiz factory for creating quiz instances with validation
 */
export class QuizFactory {
  /**
   * Creates a new quiz instance
   */
  static create(quizData: Omit<Quiz, 'id' | 'createdAt' | 'updatedAt'>): QuizModel {
    return new QuizModel(quizData);
  }

  /**
   * Creates a quiz with basic information
   */
  static createBasic(contentId: string, title: string, description: string | null = null): QuizModel {
    return new QuizModel({
      contentId,
      title,
      description,
      questions: []
    });
  }

  /**
   * Creates a quiz with questions
   */
  static createWithQuestions(
    contentId: string,
    title: string,
    questions: Array<{
      questionText: string;
      questionType: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
      options?: string[];
      correctAnswer: string;
      explanation?: string;
      points?: number;
    }>,
    description?: string
  ): QuizModel {
    const quiz = new QuizModel({
      contentId,
      title,
      description: description || null,
      questions: questions.map(q => ({
        id: uuidv4(),
        questionText: q.questionText,
        questionType: q.questionType,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || null,
        points: q.points || 1
      }))
    });

    return quiz;
  }
}