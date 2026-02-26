import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for user preference validation
const UserPreferenceSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  userId: z.string().uuid(),
  preferenceKey: z.string().min(1, { message: 'Preference key is required' }).max(255),
  preferenceValue: z.string().min(1, { message: 'Preference value is required' }),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

// Type inference from Zod schema
export type UserPreference = z.infer<typeof UserPreferenceSchema>;

/**
 * UserPreference class representing user-specific preferences for the platform experience
 */
export class UserPreferenceModel {
  id: string;
  userId: string;
  preferenceKey: string;
  preferenceValue: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<UserPreference>) {
    const parsedData = UserPreferenceSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.userId = parsedData.userId;
    this.preferenceKey = parsedData.preferenceKey;
    this.preferenceValue = parsedData.preferenceValue;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Validates user preference data against the schema
   */
  static validate(data: Partial<UserPreference>): boolean {
    try {
      UserPreferenceSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates user preference data and returns detailed error information
   */
  static validateWithErrors(data: Partial<UserPreference>): { success: boolean; errors?: string[] } {
    try {
      UserPreferenceSchema.parse(data);
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
   * Updates the preference value
   */
  updateValue(newValue: string): void {
    if (!newValue || newValue.trim().length === 0) {
      throw new Error('Preference value cannot be empty');
    }
    this.preferenceValue = newValue;
    this.updatedAt = new Date();
  }

  /**
   * Gets the preference value as a string
   */
  getStringValue(): string {
    return this.preferenceValue;
  }

  /**
   * Gets the preference value as a boolean
   */
  getBooleanValue(): boolean {
    return this.preferenceValue.toLowerCase() === 'true';
  }

  /**
   * Gets the preference value as a number
   */
  getNumericValue(): number {
    const num = parseFloat(this.preferenceValue);
    if (isNaN(num)) {
      throw new Error(`Preference value '${this.preferenceValue}' is not a valid number`);
    }
    return num;
  }

  /**
   * Gets the preference value as a JSON object
   */
  getJsonValue(): any {
    try {
      return JSON.parse(this.preferenceValue);
    } catch (error) {
      throw new Error(`Preference value '${this.preferenceValue}' is not valid JSON`);
    }
  }

  /**
   * Checks if the preference key matches the given key
   */
  hasKey(key: string): boolean {
    return this.preferenceKey === key;
  }

  /**
   * Checks if the preference value matches the given value
   */
  hasValue(value: string): boolean {
    return this.preferenceValue === value;
  }
}

/**
 * UserPreference factory for creating user preference instances with validation
 */
export class UserPreferenceFactory {
  /**
   * Creates a new user preference instance
   */
  static create(preferenceData: Omit<UserPreference, 'id' | 'createdAt' | 'updatedAt'>): UserPreferenceModel {
    return new UserPreferenceModel(preferenceData);
  }

  /**
   * Creates a string preference
   */
  static createStringPreference(userId: string, key: string, value: string): UserPreferenceModel {
    return new UserPreferenceModel({
      userId,
      preferenceKey: key,
      preferenceValue: value
    });
  }

  /**
   * Creates a boolean preference
   */
  static createBooleanPreference(userId: string, key: string, value: boolean): UserPreferenceModel {
    return new UserPreferenceModel({
      userId,
      preferenceKey: key,
      preferenceValue: value.toString()
    });
  }

  /**
   * Creates a numeric preference
   */
  static createNumericPreference(userId: string, key: string, value: number): UserPreferenceModel {
    return new UserPreferenceModel({
      userId,
      preferenceKey: key,
      preferenceValue: value.toString()
    });
  }

  /**
   * Creates a JSON preference
   */
  static createJsonPreference(userId: string, key: string, value: any): UserPreferenceModel {
    return new UserPreferenceModel({
      userId,
      preferenceKey: key,
      preferenceValue: JSON.stringify(value)
    });
  }

  /**
   * Creates common user preferences with default values
   */
  static createDefaultPreferences(userId: string): UserPreferenceModel[] {
    return [
      // Theme preference (light/dark/auto)
      UserPreferenceFactory.createStringPreference(userId, 'theme', 'light'),

      // Content difficulty level (beginner/intermediate/advanced)
      UserPreferenceFactory.createStringPreference(userId, 'content_difficulty', 'beginner'),

      // Preferred language
      UserPreferenceFactory.createStringPreference(userId, 'preferred_language', 'en'),

      // Notifications enabled
      UserPreferenceFactory.createBooleanPreference(userId, 'notifications_enabled', true),

      // Email notifications enabled
      UserPreferenceFactory.createBooleanPreference(userId, 'email_notifications_enabled', true),

      // Reading speed (words per minute)
      UserPreferenceFactory.createNumericPreference(userId, 'reading_speed_wpm', 200),

      // Font size preference
      UserPreferenceFactory.createStringPreference(userId, 'font_size', 'medium'),

      // Show progress tracking
      UserPreferenceFactory.createBooleanPreference(userId, 'show_progress_tracking', true),

      // Enable quiz auto-submission
      UserPreferenceFactory.createBooleanPreference(userId, 'auto_submit_quizzes', false),

      // Preferred content format (text/images/videos)
      UserPreferenceFactory.createJsonPreference(userId, 'content_format_preferences', {
        text: 0.6,
        images: 0.3,
        videos: 0.1
      })
    ];
  }
}