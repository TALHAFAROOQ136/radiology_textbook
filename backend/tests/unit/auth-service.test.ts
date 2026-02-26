import { AuthService } from '../../src/services/auth-service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  describe('register', () => {
    it('should register a new user with valid data', async () => {
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'securePassword123!',
        medicalLevel: 'medical_student',
        institution: 'Test Institution',
        specialtyInterest: 'Radiology'
      };

      const result = await authService.register(userData);

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('token');
      expect(result.user.email).toBe(userData.email);
      expect(result.user.name).toBe(userData.name);
    });

    it('should throw an error for invalid email format', async () => {
      const userData = {
        email: 'invalid-email',
        name: 'Test User',
        password: 'securePassword123!'
      };

      await expect(authService.register(userData)).rejects.toThrow('Invalid email format');
    });

    it('should throw an error for weak password', async () => {
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'weak'
      };

      await expect(authService.register(userData)).rejects.toThrow('Password must be at least 8 characters long');
    });

    it('should throw an error when user already exists', async () => {
      // First registration
      const userData = {
        email: 'existing@example.com',
        name: 'Existing User',
        password: 'securePassword123!'
      };

      await authService.register(userData);

      // Second registration with same email should fail
      await expect(authService.register(userData)).rejects.toThrow('User with this email already exists');
    });
  });

  describe('login', () => {
    it('should authenticate user with valid credentials', async () => {
      // Register user first
      const userData = {
        email: 'login@example.com',
        name: 'Login User',
        password: 'securePassword123!'
      };

      await authService.register(userData);

      // Login with valid credentials
      const result = await authService.login(userData.email, userData.password);

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('token');
      expect(result!.user.email).toBe(userData.email);
    });

    it('should return null for invalid credentials', async () => {
      await expect(authService.login('nonexistent@example.com', 'wrongpassword')).rejects.toThrow('Invalid email or password');
    });

    it('should return null for wrong password', async () => {
      // Register user first
      const userData = {
        email: 'wrongpass@example.com',
        name: 'Wrong Pass User',
        password: 'securePassword123!'
      };

      await authService.register(userData);

      // Login with wrong password
      await expect(authService.login(userData.email, 'wrongpassword')).rejects.toThrow('Invalid email or password');
    });
  });

  describe('validateRegistrationData', () => {
    it('should return success for valid registration data', () => {
      const validData = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'securePassword123!'
      };

      const result = authService.validateRegistrationData(validData);

      expect(result.success).toBe(true);
    });

    it('should return errors for invalid email', () => {
      const invalidData = {
        email: 'invalid-email',
        name: 'Test User',
        password: 'securePassword123!'
      };

      const result = authService.validateRegistrationData(invalidData);

      expect(result.success).toBe(false);
      expect(result.errors).toContainEqual(expect.stringContaining('Invalid email format'));
    });

    it('should return errors for short name', () => {
      const invalidData = {
        email: 'test@example.com',
        name: 'A',
        password: 'securePassword123!'
      };

      const result = authService.validateRegistrationData(invalidData);

      expect(result.success).toBe(false);
      expect(result.errors).toContainEqual(expect.stringContaining('Name is required'));
    });

    it('should return errors for weak password', () => {
      const invalidData = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'weak'
      };

      const result = authService.validateRegistrationData(invalidData);

      expect(result.success).toBe(false);
      expect(result.errors).toContainEqual(expect.stringContaining('Password must be at least 8 characters'));
    });
  });
});