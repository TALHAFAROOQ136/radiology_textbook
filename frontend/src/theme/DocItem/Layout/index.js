import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

/* Part label map */
const partMeta = {
  'part-1-foundations':   { label: 'Part 1',  name: 'Foundations',            color: '#1565c0' },
  'part-2-positioning':   { label: 'Part 2',  name: 'Patient Positioning',    color: '#6a1b9a' },
  'part-3-chest':         { label: 'Part 3',  name: 'Chest Radiology',        color: '#00695c' },
  'part-4-abdomen':       { label: 'Part 4',  name: 'Abdomen & Pelvis',       color: '#e65100' },
  'part-5-msk':           { label: 'Part 5',  name: 'Musculoskeletal',        color: '#4527a0' },
  'part-6-neuro':         { label: 'Part 6',  name: 'Neuroradiology',         color: '#b71c1c' },
  'part-7-specialized':   { label: 'Part 7',  name: 'Specialized Imaging',    color: '#01579b' },
};

function ChapterHeader({ metadata }) {
  const permalink = metadata?.permalink ?? '';
  const partKey   = Object.keys(partMeta).find(k => permalink.includes(k));
  const part      = partKey ? partMeta[partKey] : null;

  /* Estimate reading time from description length as proxy */
  const readMin = Math.max(5, Math.ceil((metadata?.description?.length ?? 600) / 600));

  return (
    <div className={styles.chapterHeader}>
      {/* Top meta row */}
      <div className={styles.metaRow}>
        {part && (
          <span className={styles.partBadge} style={{ '--part-color': part.color }}>
            {part.label} · {part.name}
          </span>
        )}
        <span className={styles.readTime}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.clockIcon}>
            <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
          </svg>
          {readMin} min read
        </span>
      </div>

      {/* Decorative line */}
      <div className={styles.headerLine} style={{ '--part-color': part?.color ?? '#1565c0' }} />
    </div>
  );
}

export default function DocItemLayoutWrapper(props) {
  const { metadata } = useDoc();
  return (
    <>
      <ChapterHeader metadata={metadata} />
      <Layout {...props} />
    </>
  );
}
