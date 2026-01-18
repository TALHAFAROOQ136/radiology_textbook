import React from 'react';
import clsx from 'clsx';
import styles from './LoadingSpinner.module.css';

function LoadingSpinner({
  loading = true,
  error = null,
  children,
  errorMessage = 'An error occurred while loading.',
  className
}) {
  if (error) {
    return (
      <div className={clsx(styles.loadingContainer, styles.error, className)}>
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>⚠️</div>
          <h3 className={styles.errorTitle}>Error</h3>
          <p className={styles.errorMessage}>{errorMessage}</p>
          <button
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={clsx(styles.loadingContainer, className)}>
        <div className={styles.spinner}>
          <div className={styles.spinnerCircle}></div>
        </div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  return children;
}

export default LoadingSpinner;