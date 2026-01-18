import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './RegisterForm.module.css';

function RegisterForm(props) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    medicalLevel: 'medical_student',
    institution: '',
    specialtyInterest: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSuccessMessage('');

    try {
      // In a real implementation, this would make an API call to register the user
      // For demo purposes, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Registration data:', formData);

      setSuccessMessage('Registration successful! Please check your email to verify your account.');
      setFormData({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        medicalLevel: 'medical_student',
        institution: '',
        specialtyInterest: ''
      });
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={clsx(styles.registerForm, props.className)}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ''}
            disabled={isLoading}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.errorInput : ''}
            disabled={isLoading}
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? styles.errorInput : ''}
            disabled={isLoading}
          />
          {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          <small className={styles.hint}>Must be at least 8 characters with uppercase, lowercase, and number</small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? styles.errorInput : ''}
            disabled={isLoading}
          />
          {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="medicalLevel">Medical Level</label>
          <select
            id="medicalLevel"
            name="medicalLevel"
            value={formData.medicalLevel}
            onChange={handleChange}
            disabled={isLoading}
          >
            <option value="medical_student">Medical Student</option>
            <option value="resident">Resident</option>
            <option value="fellow">Fellow</option>
            <option value="attending">Attending</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="specialtyInterest">Specialty Interest</label>
          <input
            type="text"
            id="specialtyInterest"
            name="specialtyInterest"
            value={formData.specialtyInterest}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>

        {successMessage && (
          <div className={styles.successMessage}>
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;