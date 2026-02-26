import { UserPreference } from '../models/user-preference';
import { UserPreferenceModel, UserPreferenceFactory } from '../models/user-preference';

/**
 * UserPreferenceService class for handling user preference operations
 */
export class UserPreferenceService {
  /**
   * Creates or updates a user preference
   */
  async createOrUpdatePreference(preferenceData: {
    userId: string;
    preferenceKey: string;
    preferenceValue: string;
  }): Promise<UserPreference> {
    // Validate preference data
    const validation = UserPreferenceModel.validateWithErrors({
      userId: preferenceData.userId,
      preferenceKey: preferenceData.preferenceKey,
      preferenceValue: preferenceData.preferenceValue
    });

    if (!validation.success) {
      throw new Error(`Preference validation failed: ${validation.errors?.join(', ')}`);
    }

    // Create or update preference
    const existingPreference = await this.getPreference(preferenceData.userId, preferenceData.preferenceKey);

    if (existingPreference) {
      // Update existing preference
      const updatedPreference = await this.updatePreference(existingPreference.id, {
        preferenceValue: preferenceData.preferenceValue
      });
      return updatedPreference;
    } else {
      // Create new preference
      const preference = UserPreferenceFactory.create({
        userId: preferenceData.userId,
        preferenceKey: preferenceData.preferenceKey,
        preferenceValue: preferenceData.preferenceValue
      });

      // In a real implementation, save to database
      return preference as UserPreference;
    }
  }

  /**
   * Gets a specific user preference
   */
  async getPreference(userId: string, preferenceKey: string): Promise<UserPreference | null> {
    // In a real implementation, this would query the database
    // For now, return null to indicate not found
    return null;
  }

  /**
   * Gets all preferences for a user
   */
  async getPreferencesByUser(userId: string): Promise<UserPreference[]> {
    // In a real implementation, this would query the database
    // For now, return an empty array
    return [];
  }

  /**
   * Updates a user preference
   */
  async updatePreference(preferenceId: string, preferenceData: Partial<UserPreference>): Promise<UserPreference> {
    // In a real implementation, this would update the database
    // For now, return a mock updated preference
    const updatedPreference = {
      id: preferenceId,
      userId: preferenceData.userId || 'mock-user-id',
      preferenceKey: preferenceData.preferenceKey || 'mock-key',
      preferenceValue: preferenceData.preferenceValue || 'mock-value',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Update the preference object
    const preferenceInstance = new UserPreferenceModel(updatedPreference);
    if (preferenceData.preferenceValue) {
      preferenceInstance.updateValue(preferenceData.preferenceValue);
    }

    return preferenceInstance as UserPreference;
  }

  /**
   * Gets a preference value as string
   */
  async getPreferenceAsString(userId: string, preferenceKey: string, defaultValue: string = ''): Promise<string> {
    const preference = await this.getPreference(userId, preferenceKey);
    return preference ? preference.getStringValue() : defaultValue;
  }

  /**
   * Gets a preference value as boolean
   */
  async getPreferenceAsBoolean(userId: string, preferenceKey: string, defaultValue: boolean = false): Promise<boolean> {
    const preference = await this.getPreference(userId, preferenceKey);
    return preference ? preference.getBooleanValue() : defaultValue;
  }

  /**
   * Gets a preference value as number
   */
  async getPreferenceAsNumber(userId: string, preferenceKey: string, defaultValue: number = 0): Promise<number> {
    const preference = await this.getPreference(userId, preferenceKey);
    if (!preference) {
      return defaultValue;
    }

    try {
      return preference.getNumericValue();
    } catch (error) {
      console.warn(`Could not convert preference ${preferenceKey} to number for user ${userId}:`, error);
      return defaultValue;
    }
  }

  /**
   * Gets a preference value as JSON object
   */
  async getPreferenceAsJson<T>(userId: string, preferenceKey: string, defaultValue: T = undefined): Promise<T> {
    const preference = await this.getPreference(userId, preferenceKey);
    if (!preference) {
      return defaultValue;
    }

    try {
      return preference.getJsonValue();
    } catch (error) {
      console.warn(`Could not parse preference ${preferenceKey} as JSON for user ${userId}:`, error);
      return defaultValue;
    }
  }

  /**
   * Sets a string preference
   */
  async setStringPreference(userId: string, preferenceKey: string, value: string): Promise<UserPreference> {
    return await this.createOrUpdatePreference({
      userId,
      preferenceKey,
      preferenceValue: value
    });
  }

  /**
   * Sets a boolean preference
   */
  async setBooleanPreference(userId: string, preferenceKey: string, value: boolean): Promise<UserPreference> {
    return await this.createOrUpdatePreference({
      userId,
      preferenceKey,
      preferenceValue: value.toString()
    });
  }

  /**
   * Sets a numeric preference
   */
  async setNumericPreference(userId: string, preferenceKey: string, value: number): Promise<UserPreference> {
    return await this.createOrUpdatePreference({
      userId,
      preferenceKey,
      preferenceValue: value.toString()
    });
  }

  /**
   * Sets a JSON preference
   */
  async setJsonPreference(userId: string, preferenceKey: string, value: any): Promise<UserPreference> {
    return await this.createOrUpdatePreference({
      userId,
      preferenceKey,
      preferenceValue: JSON.stringify(value)
    });
  }

  /**
   * Deletes a user preference
   */
  async deletePreference(preferenceId: string): Promise<boolean> {
    // In a real implementation, this would delete from the database
    // For now, return true to indicate success
    console.log(`Deleting preference with ID: ${preferenceId}`);
    return true;
  }

  /**
   * Deletes a user preference by key
   */
  async deletePreferenceByKey(userId: string, preferenceKey: string): Promise<boolean> {
    const preference = await this.getPreference(userId, preferenceKey);
    if (preference) {
      return await this.deletePreference(preference.id);
    }
    return false;
  }

  /**
   * Gets default preferences for a user
   */
  async getDefaultPreferences(userId: string): Promise<UserPreference[]> {
    return UserPreferenceFactory.createDefaultPreferences(userId);
  }

  /**
   * Initializes default preferences for a user if they don't exist
   */
  async initializeDefaultPreferences(userId: string): Promise<void> {
    const defaultPrefs = await this.getDefaultPreferences(userId);

    for (const pref of defaultPrefs) {
      // Check if preference already exists
      const existing = await this.getPreference(userId, pref.preferenceKey);
      if (!existing) {
        // Create the preference with default value
        await this.createOrUpdatePreference({
          userId: pref.userId,
          preferenceKey: pref.preferenceKey,
          preferenceValue: pref.preferenceValue
        });
      }
    }
  }

  /**
   * Bulk updates user preferences
   */
  async bulkUpdatePreferences(userId: string, preferences: Record<string, any>): Promise<UserPreference[]> {
    const results: UserPreference[] = [];

    for (const [key, value] of Object.entries(preferences)) {
      let stringValue: string;

      if (typeof value === 'object') {
        stringValue = JSON.stringify(value);
      } else if (typeof value === 'boolean' || typeof value === 'number') {
        stringValue = value.toString();
      } else {
        stringValue = value;
      }

      const updatedPref = await this.createOrUpdatePreference({
        userId,
        preferenceKey: key,
        preferenceValue: stringValue
      });

      results.push(updatedPref);
    }

    return results;
  }

  /**
   * Gets all preference keys for a user
   */
  async getPreferenceKeys(userId: string): Promise<string[]> {
    const preferences = await this.getPreferencesByUser(userId);
    return preferences.map(pref => pref.preferenceKey);
  }

  /**
   * Checks if a preference exists for a user
   */
  async hasPreference(userId: string, preferenceKey: string): Promise<boolean> {
    const preference = await this.getPreference(userId, preferenceKey);
    return !!preference;
  }
}

// Singleton instance
export const userPreferenceService = new UserPreferenceService();