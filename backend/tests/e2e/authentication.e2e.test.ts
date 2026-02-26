import request from 'supertest';
import { app } from '../../src/server'; // Adjust import path to your actual app instance
import { User } from '../../src/models/user';
import { UserService } from '../../src/services/user-service';

describe('Authentication E2E Tests', () => {
  let testUser: User;
  let authToken: string;

  beforeAll(async () => {
    // Setup test user
    const userService = new UserService();
    testUser = await userService.createUser({
      email: 'testuser@example.com',
      name: 'Test User',
      passwordHash: '$2b$10$examplehashedpassword', // In a real test, use bcrypt to hash a real password
      medicalLevel: 'medical_student'
    });
  });

  afterAll(async () => {
    // Cleanup test data
    if (testUser) {
      const userService = new UserService();
      await userService.deleteUser(testUser.id);
    }
  });

  describe('User Registration', () => {
    it('should register a new user successfully', async () => {
      const newUser = {
        email: 'newuser@example.com',
        name: 'New User',
        password: 'SecurePass123!',
        medicalLevel: 'resident'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(newUser)
        .expect(201);

      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.email).toBe(newUser.email);
      expect(response.body.user.name).toBe(newUser.name);
      expect(response.body.user.medicalLevel).toBe(newUser.medicalLevel);
    });

    it('should return 400 for invalid registration data', async () => {
      const invalidUser = {
        email: 'invalid-email', // Invalid email format
        name: '', // Empty name
        password: '123' // Weak password
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(invalidUser)
        .expect(400);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toContain('Validation failed');
    });

    it('should return 400 for duplicate email registration', async () => {
      const duplicateUser = {
        email: 'testuser@example.com', // Already exists
        name: 'Another User',
        password: 'SecurePass123!'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(duplicateUser)
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('User Login', () => {
    it('should login with valid credentials', async () => {
      const credentials = {
        email: 'testuser@example.com',
        password: 'ValidPassword123!' // Use the actual password for the test user
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(credentials)
        .expect(200);

      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.email).toBe(credentials.email);

      authToken = response.body.token;
    });

    it('should return 401 for invalid credentials', async () => {
      const invalidCredentials = {
        email: 'testuser@example.com',
        password: 'wrongpassword'
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(invalidCredentials)
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });

    it('should return 401 for non-existent user', async () => {
      const nonExistentUser = {
        email: 'nonexistent@example.com',
        password: 'anyPassword123!'
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(nonExistentUser)
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Protected Routes', () => {
    it('should access protected profile endpoint with valid token', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body.email).toBe('testuser@example.com');
    });

    it('should return 401 for protected route without token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });

    it('should return 401 for protected route with invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', 'Bearer invalid-token')
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('User Profile Management', () => {
    it('should update user profile with valid token', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const profileUpdate = {
        name: 'Updated Test User',
        medicalLevel: 'fellow',
        institution: 'Test Medical School'
      };

      const response = await request(app)
        .put('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .send(profileUpdate)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.user.name).toBe(profileUpdate.name);
      expect(response.body.user.medicalLevel).toBe(profileUpdate.medicalLevel);
      expect(response.body.user.institution).toBe(profileUpdate.institution);
    });

    it('should get updated user profile', async () => {
      if (!authToken) {
        throw new Error('Auth token not available');
      }

      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.name).toBe('Updated Test User');
      expect(response.body.medicalLevel).toBe('fellow');
    });
  });
});