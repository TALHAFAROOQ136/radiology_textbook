import React from 'react';
import clsx from 'clsx';
import styles from './UserDashboard.module.css';

function UserDashboard(props) {
  // Mock data for the dashboard
  const userProgress = {
    overallProgress: 15,
    completedChapters: 1,
    totalChapters: 35,
    timeSpent: 2 * 3600 + 30 * 60, // 2h 30m in seconds
    currentStreak: 3,
    achievements: [
      { id: 1, title: 'First Chapter', description: 'Complete your first chapter', earned: true },
      { id: 2, title: 'Week Warrior', description: 'Study for 7 consecutive days', earned: false },
      { id: 3, title: 'Quiz Master', description: 'Score 90% or higher on 5 quizzes', earned: false },
      { id: 4, title: 'Content Explorer', description: 'View 10 different content sections', earned: true },
    ],
    recentActivity: [
      { id: 1, type: 'chapter', title: 'Introduction to Radiology', date: '2026-01-17', progress: 100 },
      { id: 2, type: 'quiz', title: 'Basic Anatomy Quiz', date: '2026-01-16', score: 85 },
      { id: 3, type: 'chapter', title: 'Patient Positioning Basics', date: '2026-01-15', progress: 75 },
    ]
  };

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

  // Format date
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={clsx(styles.userDashboard, props.className)}>
      <div className={styles.dashboardHeader}>
        <h2>Learning Dashboard</h2>
        <p>Welcome back! Here's your progress summary.</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{userProgress.overallProgress}%</div>
          <div className={styles.statLabel}>Overall Progress</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue}>{userProgress.completedChapters}/{userProgress.totalChapters}</div>
          <div className={styles.statLabel}>Chapters Completed</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue}>{formatTime(userProgress.timeSpent)}</div>
          <div className={styles.statLabel}>Time Spent</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue}>{userProgress.currentStreak}</div>
          <div className={styles.statLabel}>Day Streak</div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.achievementsSection}>
          <h3>Achievements</h3>
          <div className={styles.achievementsList}>
            {userProgress.achievements.map(achievement => (
              <div
                key={achievement.id}
                className={clsx(styles.achievementItem, { [styles.earned]: achievement.earned })}
              >
                <div className={styles.achievementIcon}>
                  {achievement.earned ? '🏆' : '🔒'}
                </div>
                <div className={styles.achievementContent}>
                  <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                  <p className={styles.achievementDescription}>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.activitySection}>
          <h3>Recent Activity</h3>
          <div className={styles.activityList}>
            {userProgress.recentActivity.map(activity => (
              <div key={activity.id} className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  {activity.type === 'chapter' ? '📖' : '📝'}
                </div>
                <div className={styles.activityContent}>
                  <h4 className={styles.activityTitle}>{activity.title}</h4>
                  <div className={styles.activityMeta}>
                    <span className={styles.activityDate}>{formatDate(activity.date)}</span>
                    {activity.progress !== undefined && (
                      <span className={styles.activityProgress}>{activity.progress}% complete</span>
                    )}
                    {activity.score !== undefined && (
                      <span className={styles.activityScore}>Score: {activity.score}%</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;