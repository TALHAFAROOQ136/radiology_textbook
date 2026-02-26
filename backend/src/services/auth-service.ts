import { User } from '../models/user';
import { UserModel, UserFactory } from '../models/user';
import { z } from 'zod';

/**
 * AuthService class for handling authentication-related operations
 */
export class AuthService {
  /**
   * Registers a new user
   */
  async register(userData: {
    email: string;
    name: string;
    password: string;
    medicalLevel?: 'medical_student' | 'resident' | 'fellow' | 'attending' | 'other';
    institution?: string;
    specialtyInterest?: string;
  }): Promise<{ user: User; token: string }> {
    // Validate input data
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      throw new Error('Invalid email format');
    }

    if (userData.password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    // Check if user already exists
    const existingUser = await this.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash the password (in a real implementation, use bcrypt or similar)
    const passwordHash = await this.hashPassword(userData.password);

    // Create user
    const user = UserFactory.create({
      email: userData.email,
      name: userData.name,
      passwordHash,
      medicalLevel: userData.medicalLevel || 'medical_student',
      isVerified: false,
      preferences: {},
      isActive: true
    });

    // In a real implementation, save to database
    // For now, we'll return a mock token
    const token = this.generateToken(user.id);

    return { user: user as User, token };
  }

  /**
   * Authenticates a user
   */
  async login(email: string, password: string): Promise<{ user: User; token: string } | null> {
    // Find user by email
    const user = await this.findByEmail(email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Verify password (in a real implementation, compare hashes)
    const isValidPassword = await this.verifyPassword(password, user.passwordHash);
    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    // Update last login
    await this.updateLastLogin(user.id);

    // Generate token
    const token = this.generateToken(user.id);

    return { user, token };
  }

  /**
   * Finds a user by email
   */
  async findByEmail(email: string): Promise<User | null> {
    // In a real implementation, this would query the database
    // For now, return null to indicate no user found
    return null;
  }

  /**
   * Updates user's last login time
   */
  async updateLastLogin(userId: string): Promise<void> {
    // In a real implementation, this would update the database
    console.log(`Updating last login for user ${userId}`);
  }

  /**
   * Hashes a password
   */
  private async hashPassword(password: string): Promise<string> {
    // In a real implementation, use bcrypt or similar
    // For now, return a mock hash
    return `mock_hash_${password}`;
  }

  /**
   * Verifies a password against its hash
   */
  private async verifyPassword(password: string, hash: string): Promise<boolean> {
    // In a real implementation, use bcrypt.compare or similar
    // For now, check if the mock hash matches
    return hash === `mock_hash_${password}`;
  }

  /**
   * Generates an authentication token
   */
  private generateToken(userId: string): string {
    // In a real implementation, use JWT or similar
    // For now, return a mock token
    return `mock_token_${userId}_${Date.now()}`;
  }

  /**
   * Validates user registration data
   */
  validateRegistrationData(data: {
    email: string;
    name: string;
    password: string;
  }): { success: boolean; errors?: string[] } {
    const registrationSchema = z.object({
      email: z.string().email({ message: 'Invalid email format' }),
      name: z.string().min(1, { message: 'Name is required' }).max(255),
      password: z.string().min(8, { message: 'Password must be at least 8 characters' })
    });

    try {
      registrationSchema.parse(data);
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
   * Updates user profile
   */
  async updateUserProfile(userId: string, profileData: Partial<{
    name: string;
    medicalLevel: 'medical_student' | 'resident' | 'fellow' | 'attending' | 'other';
    institution: string;
    specialtyInterest: string;
    preferences: Record<string, unknown>;
  }>): Promise<User> {
    // In a real implementation, this would update the user in the database
    // For now, return a mock updated user
    const updatedUser = {
      id: userId,
      email: 'mock@example.com', // Would get from DB in real implementation
      name: profileData.name || 'Mock User',
      passwordHash: 'mock_hash',
      medicalLevel: profileData.medicalLevel || 'medical_student',
      institution: profileData.institution,
      specialtyInterest: profileData.specialtyInterest,
      preferences: profileData.preferences || {},
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLoginAt: new Date(),
      isActive: true,
      isVerified: true
    };

    return updatedUser;
  }

  /**
   * Sends password reset email
   */
  async sendPasswordResetEmail(email: string): Promise<boolean> {
    // In a real implementation, send email with reset token
    console.log(`Sending password reset email to ${email}`);
    return true;
  }

  /**
   * Resets user password
   */
  async resetPassword(token: string, newPassword: string): Promise<boolean> {
    // In a real implementation, verify token and update password
    console.log(`Resetting password for token: ${token}`);
    return true;
  }
}

// Singleton instance
export const authService = new AuthService();