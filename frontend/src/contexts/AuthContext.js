import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the Auth context
const AuthContext = createContext();

// Initial state
const initialState = {
  user: null,
  token: null,
  isLoading: true,
  isAuthenticated: false
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing token on app start
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');

    if (token && user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: JSON.parse(user),
          token
        }
      });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      // In a real implementation, this would make an API call to login the user
      // For demo purposes, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data
      const mockUser = {
        id: 'user_' + Date.now(),
        email,
        name: email.split('@')[0], // Just for demo
        medicalLevel: 'medical_student',
        isVerified: true
      };

      // Mock token
      const mockToken = 'mock_token_' + Date.now();

      // Store in localStorage
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: mockUser,
          token: mockToken
        }
      });

      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Login error:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
      return { success: false, error: error.message };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      // In a real implementation, this would make an API call to register the user
      // For demo purposes, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock user data
      const mockUser = {
        id: 'user_' + Date.now(),
        email: userData.email,
        name: userData.name,
        medicalLevel: userData.medicalLevel || 'medical_student',
        isVerified: false // Would be true after email verification in real app
      };

      // Mock token
      const mockToken = 'mock_token_' + Date.now();

      // Store in localStorage
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: mockUser,
          token: mockToken
        }
      });

      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Registration error:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    // Clear from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
  };

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      const updatedUser = {
        ...state.user,
        ...profileData
      };

      // Update in localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));

      dispatch({
        type: 'SET_USER',
        payload: updatedUser
      });

      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update profile error:', error);
      return { success: false, error: error.message };
    }
  };

  // Value to be provided to consumers
  const value = {
    ...state,
    login,
    register,
    logout,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};