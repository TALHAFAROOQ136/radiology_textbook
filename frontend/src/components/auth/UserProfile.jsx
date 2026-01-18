import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './UserProfile.module.css';

function UserProfile(props) {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    medicalLevel: 'medical_student',
    institution: 'University of Medicine',
    specialtyInterest: 'Radiology',
    preferences: {
      theme: 'light',
      contentDifficulty: 'intermediate',
      preferredLanguage: 'en',
      notificationsEnabled: true
    }
  });
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // In a real implementation, this would fetch the user's profile from the API
    // For demo purposes, we'll use the mock data
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('pref_')) {
      // Handle preference changes
      const prefKey = name.replace('pref_', '');
      setProfileData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefKey]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setProfileData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');

    try {
      // In a real implementation, this would make an API call to update the user's profile
      // For demo purposes, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Updated profile data:', profileData);

      setEditing(false);
      setSuccessMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Profile update error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditToggle = () => {
    if (editing) {
      // Cancel edit, revert to original data
      setEditing(false);
    } else {
      // Start editing
      setEditing(true);
    }
  };

  return (
    <div className={clsx(styles.userProfile, props.className)}>
      <div className={styles.profileHeader}>
        <h2>User Profile</h2>
        <button
          className={styles.editButton}
          onClick={handleEditToggle}
        >
          {editing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {successMessage && (
        <div className={styles.successMessage}>
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.profileSection}>
          <h3>Personal Information</h3>

          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            {editing ? (
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            ) : (
              <div className={styles.fieldValue}>{profileData.name}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={styles.fieldValue}>{profileData.email}</div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="medicalLevel">Medical Level</label>
            {editing ? (
              <select
                id="medicalLevel"
                name="medicalLevel"
                value={profileData.medicalLevel}
                onChange={handleInputChange}
                disabled={isLoading}
              >
                <option value="medical_student">Medical Student</option>
                <option value="resident">Resident</option>
                <option value="fellow">Fellow</option>
                <option value="attending">Attending</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <div className={styles.fieldValue}>
                {profileData.medicalLevel.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="institution">Institution</label>
            {editing ? (
              <input
                type="text"
                id="institution"
                name="institution"
                value={profileData.institution}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            ) : (
              <div className={styles.fieldValue}>{profileData.institution}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="specialtyInterest">Specialty Interest</label>
            {editing ? (
              <input
                type="text"
                id="specialtyInterest"
                name="specialtyInterest"
                value={profileData.specialtyInterest}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            ) : (
              <div className={styles.fieldValue}>{profileData.specialtyInterest}</div>
            )}
          </div>
        </div>

        <div className={styles.profileSection}>
          <h3>Preferences</h3>

          <div className={styles.formGroup}>
            <label htmlFor="pref_theme">Theme</label>
            {editing ? (
              <select
                id="pref_theme"
                name="pref_theme"
                value={profileData.preferences.theme}
                onChange={handleInputChange}
                disabled={isLoading}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            ) : (
              <div className={styles.fieldValue}>
                {profileData.preferences.theme.charAt(0).toUpperCase() + profileData.preferences.theme.slice(1)}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="pref_contentDifficulty">Content Difficulty</label>
            {editing ? (
              <select
                id="pref_contentDifficulty"
                name="pref_contentDifficulty"
                value={profileData.preferences.contentDifficulty}
                onChange={handleInputChange}
                disabled={isLoading}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            ) : (
              <div className={styles.fieldValue}>
                {profileData.preferences.contentDifficulty.charAt(0).toUpperCase() +
                 profileData.preferences.contentDifficulty.slice(1)}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="pref_preferredLanguage">Preferred Language</label>
            {editing ? (
              <select
                id="pref_preferredLanguage"
                name="pref_preferredLanguage"
                value={profileData.preferences.preferredLanguage}
                onChange={handleInputChange}
                disabled={isLoading}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            ) : (
              <div className={styles.fieldValue}>
                {profileData.preferences.preferredLanguage === 'en' ? 'English' :
                 profileData.preferences.preferredLanguage === 'es' ? 'Spanish' :
                 'French'}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>
              {editing ? (
                <>
                  <input
                    type="checkbox"
                    id="pref_notificationsEnabled"
                    name="pref_notificationsEnabled"
                    checked={profileData.preferences.notificationsEnabled}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                  {' '}Enable Notifications
                </>
              ) : (
                <>
                  Enable Notifications:{' '}
                  <span className={styles.fieldValue}>
                    {profileData.preferences.notificationsEnabled ? 'Yes' : 'No'}
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        {editing && (
          <div className={styles.formActions}>
            <button
              type="submit"
              className={styles.saveButton}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default UserProfile;