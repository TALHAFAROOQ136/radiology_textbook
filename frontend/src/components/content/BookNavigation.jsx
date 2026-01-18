import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { useDoc } from '@docusaurus/useGlobalData';
import styles from './BookNavigation.module.css';

function BookNavigation(props) {
  const { className } = props;
  const location = useLocation();

  // Mock navigation data - in a real implementation, this would come from the sidebar data
  const navigationItems = [
    {
      title: 'Part 1: Foundations',
      items: [
        { title: 'Chapter 1: Introduction to Radiology', path: '/docs/part-1-foundations/chapter-01-introduction', current: location.pathname.includes('/docs/part-1-foundations/chapter-01-introduction') },
      ]
    },
    {
      title: 'Part 2: Positioning',
      items: [
        { title: 'Chapter 2: Patient Positioning', path: '/docs/part-2-positioning/chapter-02-patient-positioning', current: location.pathname.includes('/docs/part-2-positioning') },
      ]
    },
    {
      title: 'Part 3: Chest',
      items: [
        { title: 'Chapter 3: Chest X-ray Interpretation', path: '/docs/part-3-chest/chapter-03-chest-xray', current: location.pathname.includes('/docs/part-3-chest') },
      ]
    },
    {
      title: 'Part 4: Abdomen',
      items: [
        { title: 'Chapter 4: Abdominal Imaging', path: '/docs/part-4-abdomen/chapter-04-abdomen', current: location.pathname.includes('/docs/part-4-abdomen') },
      ]
    },
    {
      title: 'Part 5: MSK',
      items: [
        { title: 'Chapter 5: Musculoskeletal Imaging', path: '/docs/part-5-msk/chapter-05-msk', current: location.pathname.includes('/docs/part-5-msk') },
      ]
    },
    {
      title: 'Part 6: Neuro',
      items: [
        { title: 'Chapter 6: Neuroimaging', path: '/docs/part-6-neuro/chapter-06-neuro', current: location.pathname.includes('/docs/part-6-neuro') },
      ]
    },
    {
      title: 'Part 7: Specialized',
      items: [
        { title: 'Chapter 7: Specialized Techniques', path: '/docs/part-7-specialized/chapter-07-specialized', current: location.pathname.includes('/docs/part-7-specialized') },
      ]
    }
  ];

  return (
    <nav className={clsx(styles.bookNavigation, className)}>
      <div className={styles.navigationHeader}>
        <h3>Table of Contents</h3>
      </div>

      <ul className={styles.navigationList}>
        {navigationItems.map((part, partIndex) => (
          <li key={partIndex} className={styles.partItem}>
            <h4 className={styles.partTitle}>{part.title}</h4>
            <ul className={styles.chapterList}>
              {part.items.map((chapter, chapterIndex) => (
                <li key={chapterIndex} className={styles.chapterItem}>
                  <Link
                    to={chapter.path}
                    className={clsx(styles.chapterLink, {
                      [styles.current]: chapter.current
                    })}
                  >
                    {chapter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BookNavigation;