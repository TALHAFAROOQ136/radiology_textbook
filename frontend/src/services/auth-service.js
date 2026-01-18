/**
 * Authentication API service for the Radiology Textbook Platform
 * Handles communication with the backend authentication endpoints
 */

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

/**
 * API utility function to handle requests
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = localStorage.getItem('authToken');
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

/**
 * Authentication service methods
 */
export const authService = {
  /**
   * Register a new user
   */
  async register(userData) {
    try {
      const response = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      // Store user data and token
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      return response;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  /**
   * Login user
   */
  async login(credentials) {
    try {
      const response = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      // Store user data and token
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  /**
   * Logout user
   */
  async logout() {
    try {
      // In a real implementation, this would notify the server
      // For now, just clear local storage
      await apiRequest('/auth/logout', {
        method: 'POST',
      });

      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local storage even if server request fails
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  },

  /**
   * Get current user profile
   */
  async getProfile() {
    try {
      const response = await apiRequest('/auth/profile');
      return response.user;
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
    }
  },

  /**
   * Update user profile
   */
  async updateProfile(profileData) {
    try {
      const response = await apiRequest('/auth/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData),
      });

      // Update user in local storage
      localStorage.setItem('user', JSON.stringify(response.user));

      return response.user;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  },

  /**
   * Get user progress
   */
  async getUserProgress() {
    try {
      const response = await apiRequest('/user/progress');
      return response.progress;
    } catch (error) {
      console.error('Get user progress error:', error);
      throw error;
    }
  },

  /**
   * Save user progress
   */
  async saveUserProgress(progressData) {
    try {
      const response = await apiRequest('/user/progress', {
        method: 'POST',
        body: JSON.stringify(progressData),
      });

      return response.progress;
    } catch (error) {
      console.error('Save user progress error:', error);
      throw error;
    }
  },

  /**
   * Get user preferences
   */
  async getUserPreferences() {
    try {
      const response = await apiRequest('/user/preferences');
      return response.preferences;
    } catch (error) {
      console.error('Get user preferences error:', error);
      throw error;
    }
  },

  /**
   * Update user preference
   */
  async updateUserPreference(key, value) {
    try {
      const response = await apiRequest(`/user/preferences/${key}`, {
        method: 'PUT',
        body: JSON.stringify({ value }),
      });

      return response.preference;
    } catch (error) {
      console.error('Update user preference error:', error);
      throw error;
    }
  },

  /**
   * Bulk update user preferences
   */
  async bulkUpdatePreferences(preferences) {
    try {
      const response = await apiRequest('/user/preferences/bulk-update', {
        method: 'POST',
        body: JSON.stringify({ preferences }),
      });

      return response.preferences;
    } catch (error) {
      console.error('Bulk update preferences error:', error);
      throw error;
    }
  },

  /**
   * Get content by ID
   */
  async getContentById(id) {
    try {
      const response = await apiRequest(`/content/${id}`);
      return response.content;
    } catch (error) {
      console.error('Get content by ID error:', error);
      throw error;
    }
  },

  /**
   * Get content by slug
   */
  async getContentBySlug(slug) {
    try {
      const response = await apiRequest(`/content/slug/${slug}`);
      return response.content;
    } catch (error) {
      console.error('Get content by slug error:', error);
      throw error;
    }
  },

  /**
   * Search content
   */
  async searchContent(query) {
    try {
      const response = await apiRequest(`/content/search?q=${encodeURIComponent(query)}`);
      return response.content;
    } catch (error) {
      console.error('Search content error:', error);
      throw error;
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return !!token;
  },

  /**
   * Get current user from local storage
   */
  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  /**
   * Get auth token
   */
  getToken() {
    return localStorage.getItem('authToken');
  },

  /**
   * Clear auth data
   */
  clearAuthData() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },
};

export default authService;