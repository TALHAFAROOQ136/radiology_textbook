import { User, UserProfile } from '../models/user';
import { UserModel, UserProfileModel, UserFactory } from '../models/user';

/**
 * UserService class for handling user-related operations
 */
export class UserService {
  /**
   * Creates a new user with profile
   */
  async createUser(userData: {
    email: string;
    name: string;
    passwordHash: string;
    medicalLevel?: string;
    institution?: string;
    specialtyInterest?: string;
    learningGoals?: string[];
    preferredLanguage?: string;
    timezone?: string;
    bio?: string;
    avatarUrl?: string;
  }): Promise<{ user: User; profile: UserProfile }> {
    // Validate user data
    const validation = UserModel.validateWithErrors({
      email: userData.email,
      name: userData.name,
      passwordHash: userData.passwordHash,
      medicalLevel: userData.medicalLevel
    });

    if (!validation.success) {
      throw new Error(`User validation failed: ${validation.errors?.join(', ')}`);
    }

    // Create user
    const user = UserFactory.create({
      email: userData.email,
      name: userData.name,
      passwordHash: userData.passwordHash,
      medicalLevel: (userData.medicalLevel || 'medical_student') as User['medicalLevel'],
      preferences: {}
    });

    // Create user profile
    const profile = UserFactory.createProfile({
      userId: user.id,
      institution: userData.institution,
      specialtyInterest: userData.specialtyInterest,
      learningGoals: userData.learningGoals || [],
      preferredLanguage: userData.preferredLanguage || 'en',
      timezone: userData.timezone || 'UTC',
      bio: userData.bio,
      avatarUrl: userData.avatarUrl
    });

    // In a real implementation, save both to database
    return { user: user as User, profile: profile as UserProfile };
  }

  /**
   * Gets user by ID
   */
  async getUserById(userId: string): Promise<(User & { profile: UserProfile }) | null> {
    // In a real implementation, this would query the database
    // For now, return a mock user
    return null;
  }

  /**
   * Gets user by email
   */
  async getUserByEmail(email: string): Promise<(User & { profile: UserProfile }) | null> {
    // In a real implementation, this would query the database
    // For now, return a mock user
    return null;
  }

  /**
   * Updates user information
   */
  async updateUser(userId: string, userData: Partial<User>): Promise<User> {
    // In a real implementation, this would update the database
    // For now, return a mock updated user
    const updatedUser = {
      id: userId,
      email: userData.email || 'mock@example.com',
      name: userData.name || 'Mock User',
      passwordHash: userData.passwordHash || 'mock_hash',
      medicalLevel: (userData.medicalLevel || 'medical_student') as User['medicalLevel'],
      preferences: userData.preferences || {},
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLoginAt: userData.lastLoginAt || new Date(),
      isActive: userData.isActive ?? true,
      isVerified: userData.isVerified ?? false
    };

    // Update the user object
    const userInstance = new UserModel(updatedUser);
    userInstance.update(userData);

    return userInstance as User;
  }

  /**
   * Updates user profile
   */
  async updateUserProfile(userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> {
    // In a real implementation, this would update the database
    // For now, return a mock updated profile
    const updatedProfile = {
      id: 'mock-profile-id',
      userId: userId,
      institution: profileData.institution,
      specialtyInterest: profileData.specialtyInterest,
      learningGoals: profileData.learningGoals || [],
      preferredLanguage: profileData.preferredLanguage || 'en',
      timezone: profileData.timezone || 'UTC',
      bio: profileData.bio,
      avatarUrl: profileData.avatarUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Update the profile object
    const profileInstance = new UserProfileModel(updatedProfile);
    profileInstance.update(profileData);

    return profileInstance as UserProfile;
  }

  /**
   * Gets user profile by user ID
   */
  async getUserProfileByUserId(userId: string): Promise<UserProfile | null> {
    // In a real implementation, this would query the database
    // For now, return a mock profile
    return null;
  }

  /**
   * Deletes a user
   */
  async deleteUser(userId: string): Promise<boolean> {
    // In a real implementation, this would delete from the database
    // For now, return true to indicate success
    console.log(`Deleting user with ID: ${userId}`);
    return true;
  }

  /**
   * Activates a user account
   */
  async activateUser(userId: string): Promise<User> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const updatedUser = await this.updateUser(userId, { isActive: true });
    return updatedUser;
  }

  /**
   * Deactivates a user account
   */
  async deactivateUser(userId: string): Promise<User> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const updatedUser = await this.updateUser(userId, { isActive: false });
    return updatedUser;
  }

  /**
   * Verifies a user's email
   */
  async verifyUser(userId: string): Promise<User> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const updatedUser = await this.updateUser(userId, { isVerified: true });
    return updatedUser;
  }

  /**
   * Gets users by medical level
   */
  async getUsersByMedicalLevel(medicalLevel: string): Promise<User[]> {
    // In a real implementation, this would query the database
    // For now, return an empty array
    return [];
  }

  /**
   * Searches users by name or email
   */
  async searchUsers(searchTerm: string): Promise<User[]> {
    // In a real implementation, this would query the database
    // For now, return an empty array
    return [];
  }
}

// Singleton instance
export const userService = new UserService();