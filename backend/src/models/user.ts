/**
 * User Model
 *
 * Defines the structure and validation for user entities in the Radiology Textbook Platform
 */

import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for user validation
const UserSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  email: z.string().email({ message: 'Invalid email format' }),
  name: z.string().min(1, { message: 'Name is required' }).max(255),
  passwordHash: z.string().min(8, { message: 'Password hash must be at least 8 characters' }),
  medicalLevel: z.enum(['medical_student', 'resident', 'fellow', 'attending', 'other'], {
    required_error: 'Medical level is required',
    invalid_type_error: 'Medical level must be one of: medical_student, resident, fellow, attending, other'
  }).default('medical_student'),
  isVerified: z.boolean().default(false),
  verificationToken: z.string().nullable().optional(),
  passwordResetToken: z.string().nullable().optional(),
  passwordResetExpires: z.date().nullable().optional(),
  preferences: z.record(z.unknown()).optional().default({}),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  lastLoginAt: z.date().nullable().optional(),
  isActive: z.boolean().default(true)
});

// UserProfile schema
const UserProfileSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  userId: z.string().uuid(),
  institution: z.string().nullable().optional(),
  specialtyInterest: z.string().nullable().optional(),
  learningGoals: z.array(z.string()).optional().default([]),
  preferredLanguage: z.string().length(2).default('en'),
  timezone: z.string().default('UTC'),
  bio: z.string().nullable().optional(),
  avatarUrl: z.string().url().nullable().optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date())
});

// Type inference from Zod schemas
export type User = z.infer<typeof UserSchema>;
export type UserProfile = z.infer<typeof UserProfileSchema>;

/**
 * User class representing a registered user of the platform
 */
export class UserModel {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  medicalLevel: 'medical_student' | 'resident' | 'fellow' | 'attending' | 'other';
  isVerified: boolean;
  verificationToken: string | null;
  passwordResetToken: string | null;
  passwordResetExpires: Date | null;
  preferences: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date | null;
  isActive: boolean;

  constructor(data: Partial<User>) {
    const parsedData = UserSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.email = parsedData.email;
    this.name = parsedData.name;
    this.passwordHash = parsedData.passwordHash;
    this.medicalLevel = parsedData.medicalLevel;
    this.isVerified = parsedData.isVerified;
    this.verificationToken = parsedData.verificationToken ?? null;
    this.passwordResetToken = parsedData.passwordResetToken ?? null;
    this.passwordResetExpires = parsedData.passwordResetExpires ?? null;
    this.preferences = parsedData.preferences;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
    this.lastLoginAt = parsedData.lastLoginAt ?? null;
    this.isActive = parsedData.isActive;
  }

  /**
   * Validates user data against the schema
   */
  static validate(data: Partial<User>): boolean {
    try {
      UserSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates user data and returns detailed error information
   */
  static validateWithErrors(data: Partial<User>): { success: boolean; errors?: string[] } {
    try {
      UserSchema.parse(data);
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
   * Updates user information
   */
  update(userData: Partial<User>): void {
    const updateData = { ...this, ...userData, updatedAt: new Date() };
    const parsedData = UserSchema.parse(updateData);

    this.email = parsedData.email;
    this.name = parsedData.name;
    this.medicalLevel = parsedData.medicalLevel;
    this.preferences = parsedData.preferences;
    this.updatedAt = parsedData.updatedAt;
    this.lastLoginAt = parsedData.lastLoginAt ?? null;
    this.isActive = parsedData.isActive;
  }

  /**
   * Marks user as verified
   */
  verify(): void {
    this.isVerified = true;
    this.verificationToken = null;
    this.updatedAt = new Date();
  }

  /**
   * Sets a verification token
   */
  setVerificationToken(token: string): void {
    this.verificationToken = token;
    this.updatedAt = new Date();
  }

  /**
   * Sets a password reset token with expiration
   */
  setPasswordResetToken(token: string): void {
    this.passwordResetToken = token;
    this.passwordResetExpires = new Date(Date.now() + 3600000); // 1 hour from now
    this.updatedAt = new Date();
  }

  /**
   * Clears password reset token
   */
  clearPasswordResetToken(): void {
    this.passwordResetToken = null;
    this.passwordResetExpires = null;
    this.updatedAt = new Date();
  }

  /**
   * Updates last login timestamp
   */
  updateLastLogin(): void {
    this.lastLoginAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Gets public user information (excluding sensitive data)
   */
  getPublicProfile(): Omit<User, 'passwordHash'> {
    const { passwordHash, ...publicProfile } = this;
    return publicProfile;
  }
}

/**
 * UserProfile class representing extended profile information
 */
export class UserProfileModel {
  id: string;
  userId: string;
  institution: string | null;
  specialtyInterest: string | null;
  learningGoals: string[];
  preferredLanguage: string;
  timezone: string;
  bio: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<UserProfile>) {
    const parsedData = UserProfileSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.userId = parsedData.userId;
    this.institution = parsedData.institution ?? null;
    this.specialtyInterest = parsedData.specialtyInterest ?? null;
    this.learningGoals = parsedData.learningGoals || [];
    this.preferredLanguage = parsedData.preferredLanguage;
    this.timezone = parsedData.timezone;
    this.bio = parsedData.bio ?? null;
    this.avatarUrl = parsedData.avatarUrl ?? null;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Validates profile data against the schema
   */
  static validate(data: Partial<UserProfile>): boolean {
    try {
      UserProfileSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Updates profile information
   */
  update(profileData: Partial<UserProfile>): void {
    const updateData = { ...this, ...profileData, updatedAt: new Date() };
    const parsedData = UserProfileSchema.parse(updateData);

    this.institution = parsedData.institution ?? null;
    this.specialtyInterest = parsedData.specialtyInterest ?? null;
    this.learningGoals = parsedData.learningGoals;
    this.preferredLanguage = parsedData.preferredLanguage;
    this.timezone = parsedData.timezone;
    this.bio = parsedData.bio ?? null;
    this.avatarUrl = parsedData.avatarUrl ?? null;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Adds a learning goal
   */
  addLearningGoal(goal: string): void {
    if (!this.learningGoals.includes(goal)) {
      this.learningGoals.push(goal);
      this.updatedAt = new Date();
    }
  }

  /**
   * Removes a learning goal
   */
  removeLearningGoal(goal: string): void {
    this.learningGoals = this.learningGoals.filter(g => g !== goal);
    this.updatedAt = new Date();
  }

  /**
   * Updates timezone
   */
  updateTimezone(timezone: string): void {
    this.timezone = timezone;
    this.updatedAt = new Date();
  }
}

/**
 * User factory for creating user instances with validation
 */
export class UserFactory {
  /**
   * Creates a new user instance
   */
  static create(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): UserModel {
    return new UserModel(userData);
  }

  /**
   * Creates a new user profile instance
   */
  static createProfile(profileData: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>): UserProfileModel {
    return new UserProfileModel(profileData);
  }

  /**
   * Creates a user with associated profile
   */
  static createUserWithProfile(
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    profileData: Omit<UserProfile, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
  ): { user: UserModel; profile: UserProfileModel } {
    const user = UserFactory.create(userData);
    const profile = UserFactory.createProfile({ ...profileData, userId: user.id });

    return { user, profile };
  }
}