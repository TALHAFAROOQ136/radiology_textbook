/**
 * UserProfile Model
 *
 * Defines the structure and validation for user profile entities in the Radiology Textbook Platform
 */

import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { User, UserSchema } from './user';

// Zod schema for user profile validation
const UserProfileSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  userId: z.string().uuid(), // Reference to the associated user
  institution: z.string().nullable().optional(),
  specialtyInterest: z.string().nullable().optional(),
  learningGoals: z.array(z.string()).default([]),
  preferredLanguage: z.string().length(2).default('en'),
  timezone: z.string().default('UTC'),
  bio: z.string().nullable().optional(),
  avatarUrl: z.string().url().nullable().optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date())
});

// Type inference from Zod schema
export type UserProfile = z.infer<typeof UserProfileSchema>;

/**
 * UserProfile class representing extended profile information for a user
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
    this.institution = parsedData.institution || null;
    this.specialtyInterest = parsedData.specialtyInterest || null;
    this.learningGoals = parsedData.learningGoals;
    this.preferredLanguage = parsedData.preferredLanguage;
    this.timezone = parsedData.timezone;
    this.bio = parsedData.bio || null;
    this.avatarUrl = parsedData.avatarUrl || null;
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
   * Validates profile data and returns detailed error information
   */
  static validateWithErrors(data: Partial<UserProfile>): { success: boolean; errors?: string[] } {
    try {
      UserProfileSchema.parse(data);
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
   * Updates profile information
   */
  update(profileData: Partial<UserProfile>): void {
    const updateData = { ...this, ...profileData, updatedAt: new Date() };
    const parsedData = UserProfileSchema.parse(updateData);

    this.institution = parsedData.institution;
    this.specialtyInterest = parsedData.specialtyInterest;
    this.learningGoals = parsedData.learningGoals;
    this.preferredLanguage = parsedData.preferredLanguage;
    this.timezone = parsedData.timezone;
    this.bio = parsedData.bio;
    this.avatarUrl = parsedData.avatarUrl;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Adds a learning goal to the profile
   */
  addLearningGoal(goal: string): void {
    if (!this.learningGoals.includes(goal)) {
      this.learningGoals.push(goal);
      this.updatedAt = new Date();
    }
  }

  /**
   * Removes a learning goal from the profile
   */
  removeLearningGoal(goal: string): void {
    this.learningGoals = this.learningGoals.filter(g => g !== goal);
    this.updatedAt = new Date();
  }

  /**
   * Updates the user's timezone preference
   */
  updateTimezone(timezone: string): void {
    this.timezone = timezone;
    this.updatedAt = new Date();
  }

  /**
   * Updates the user's language preference
   */
  updateLanguage(language: string): void {
    // Validate language code is 2 characters
    if (language.length === 2) {
      this.preferredLanguage = language;
      this.updatedAt = new Date();
    } else {
      throw new Error('Language preference must be a 2-character code (e.g., "en", "es")');
    }
  }

  /**
   * Updates the user's institution
   */
  updateInstitution(institution: string): void {
    this.institution = institution;
    this.updatedAt = new Date();
  }

  /**
   * Updates the user's specialty interest
   */
  updateSpecialtyInterest(specialty: string): void {
    this.specialtyInterest = specialty;
    this.updatedAt = new Date();
  }

  /**
   * Updates the user's avatar URL
   */
  updateAvatar(avatarUrl: string): void {
    // Validate URL format
    try {
      new URL(avatarUrl);
      this.avatarUrl = avatarUrl;
      this.updatedAt = new Date();
    } catch {
      throw new Error('Invalid avatar URL format');
    }
  }

  /**
   * Updates the user's bio
   */
  updateBio(bio: string): void {
    this.bio = bio;
    this.updatedAt = new Date();
  }

  /**
   * Gets public profile information (excluding sensitive data)
   */
  getPublicProfile(): Omit<UserProfile, 'userId'> {
    const { userId, ...publicProfile } = this;
    return publicProfile;
  }
}

/**
 * UserPreference class representing user preferences and settings
 */
export class UserPreferenceModel {
  id: string;
  userId: string;
  preferenceKey: string;
  preferenceValue: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: {
    id?: string;
    userId: string;
    preferenceKey: string;
    preferenceValue: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = data.id || uuidv4();
    this.userId = data.userId;
    this.preferenceKey = data.preferenceKey;
    this.preferenceValue = data.preferenceValue;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  /**
   * Updates the preference value
   */
  updateValue(newValue: string): void {
    this.preferenceValue = newValue;
    this.updatedAt = new Date();
  }

  /**
   * Gets the preference as a typed value
   */
  getValueAs<T>(): T {
    try {
      return JSON.parse(this.preferenceValue) as T;
    } catch {
      // If parsing fails, return the raw string value
      return this.preferenceValue as unknown as T;
    }
  }

  /**
   * Sets the preference value from a typed value
   */
  setValueFrom<T>(value: T): void {
    this.preferenceValue = typeof value === 'string' ? value : JSON.stringify(value);
    this.updatedAt = new Date();
  }
}

/**
 * MedicalBackground class for storing medical background information
 */
export class MedicalBackgroundModel {
  id: string;
  userId: string;
  medicalLevel: string; // medical_student, resident, attending, etc.
  specialization: string | null;
  yearsOfExperience: number;
  institutions: string[];
  certifications: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(data: {
    id?: string;
    userId: string;
    medicalLevel: string;
    specialization?: string | null;
    yearsOfExperience?: number;
    institutions?: string[];
    certifications?: string[];
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = data.id || uuidv4();
    this.userId = data.userId;
    this.medicalLevel = data.medicalLevel;
    this.specialization = data.specialization || null;
    this.yearsOfExperience = data.yearsOfExperience || 0;
    this.institutions = data.institutions || [];
    this.certifications = data.certifications || [];
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  /**
   * Adds an institution to the user's background
   */
  addInstitution(institution: string): void {
    if (!this.institutions.includes(institution)) {
      this.institutions.push(institution);
      this.updatedAt = new Date();
    }
  }

  /**
   * Adds a certification to the user's background
   */
  addCertification(certification: string): void {
    if (!this.certifications.includes(certification)) {
      this.certifications.push(certification);
      this.updatedAt = new Date();
    }
  }

  /**
   * Updates years of experience
   */
  updateYearsOfExperience(years: number): void {
    if (years >= 0) {
      this.yearsOfExperience = years;
      this.updatedAt = new Date();
    }
  }
}

/**
 * UserProfile factory for creating profile instances with validation
 */
export class UserProfileFactory {
  /**
   * Creates a new user profile instance
   */
  static create(profileData: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>): UserProfileModel {
    return new UserProfileModel(profileData);
  }

  /**
   * Creates a new user preference instance
   */
  static createPreference(preferenceData: Omit<UserPreferenceModel, 'id' | 'createdAt' | 'updatedAt'>): UserPreferenceModel {
    return new UserPreferenceModel({
      ...preferenceData,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  /**
   * Creates a new medical background instance
   */
  static createMedicalBackground(bgData: Omit<MedicalBackgroundModel, 'id' | 'createdAt' | 'updatedAt'>): MedicalBackgroundModel {
    return new MedicalBackgroundModel({
      ...bgData,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  /**
   * Creates a complete user profile with preferences and background
   */
  static createUserCompleteProfile(
    profileData: Omit<UserProfile, 'id' | 'userId' | 'createdAt' | 'updatedAt'>,
    userId: string
  ): { profile: UserProfileModel } {
    const profile = UserProfileFactory.create({ ...profileData, userId });

    return { profile };
  }
}