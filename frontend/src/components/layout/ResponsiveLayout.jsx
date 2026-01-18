import React from 'react';
import clsx from 'clsx';
import styles from './ResponsiveLayout.module.css';

function ResponsiveLayout(props) {
  const { children, className } = props;

  return (
    <div className={clsx(styles.responsiveLayout, className)}>
      <main className={styles.mainContent}>
        {children}
      </main>

      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <h3>Quick Links</h3>
          <ul className={styles.quickLinks}>
            <li><a href="/docs/part-1-foundations/chapter-01-introduction">Introduction to Radiology</a></li>
            <li><a href="/docs/part-2-positioning/chapter-02-patient-positioning">Patient Positioning</a></li>
            <li><a href="/docs/part-3-chest/chapter-03-chest-xray">Chest X-ray Interpretation</a></li>
            <li><a href="/docs/part-4-abdomen/chapter-04-abdomen">Abdominal Imaging</a></li>
          </ul>

          <div className={styles.progressSection}>
            <h3>Your Progress</h3>
            <div className={styles.progressBar}>
              <div className={styles.progressBarFill} style={{ width: '15%' }}></div>
            </div>
            <p>1 of 7 parts completed</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default ResponsiveLayout;