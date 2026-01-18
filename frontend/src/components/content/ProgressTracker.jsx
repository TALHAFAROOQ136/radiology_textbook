import React from 'react';
import clsx from 'clsx';
import styles from './ProgressTracker.module.css';

function ProgressTracker(props) {
  const {
    progressPercentage = 0,
    timeSpent = 0,
    completedSections = 0,
    totalSections = 10,
    onMarkComplete,
    onSaveProgress
  } = props;

  // Format time spent
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  // Calculate completion percentage
  const calculatedPercentage = totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;

  return (
    <div className={clsx(styles.progressTracker, props.className)}>
      <div className={styles.progressHeader}>
        <h3>Your Progress</h3>
      </div>

      <div className={styles.progressOverview}>
        <div className={styles.progressItem}>
          <div className={styles.progressLabel}>Overall Progress</div>
          <div className={styles.progressValue}>{calculatedPercentage}%</div>
        </div>

        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${calculatedPercentage}%` }}
          >
            <div className={styles.progressFill}></div>
          </div>
        </div>

        <div className={styles.progressDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Sections:</span>
            <span className={styles.detailValue}>{completedSections} / {totalSections}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Time:</span>
            <span className={styles.detailValue}>{formatTime(timeSpent)}</span>
          </div>
        </div>
      </div>

      <div className={styles.progressActions}>
        {onMarkComplete && (
          <button
            className={styles.actionButton}
            onClick={onMarkComplete}
          >
            Mark Complete
          </button>
        )}

        {onSaveProgress && (
          <button
            className={clsx(styles.actionButton, styles.secondaryButton)}
            onClick={onSaveProgress}
          >
            Save Progress
          </button>
        )}
      </div>
    </div>
  );
}

export default ProgressTracker;