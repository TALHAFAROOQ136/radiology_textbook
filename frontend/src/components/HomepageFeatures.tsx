import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Curriculum',
    icon: '📚',
    description: (
      <>
        Complete radiology textbook covering all essential topics from basic physics to advanced imaging techniques.
        Structured learning paths designed by medical experts.
      </>
    ),
  },
  {
    title: 'Interactive DICOM Viewer',
    icon: '🖼️',
    description: (
      <>
        Advanced medical imaging viewer with measurement tools, annotations, and multi-planar reconstruction.
        Support for all major imaging modalities: CT, MRI, X-Ray, Ultrasound.
      </>
    ),
  },
  {
    title: 'Expert Content',
    icon: '👨‍⚕️',
    description: (
      <>
        Developed by radiology experts with real-world clinical scenarios and evidence-based practices.
        Regular updates with the latest medical knowledge and guidelines.
      </>
    ),
  },
  {
    title: 'Progress Tracking',
    icon: '📊',
    description: (
      <>
        Monitor your learning progress with detailed analytics and personalized recommendations.
        Identify knowledge gaps and focus on areas that need improvement.
      </>
    ),
  },
  {
    title: 'Case Studies',
    icon: '🏥',
    description: (
      <>
        Real clinical cases with detailed explanations and diagnostic insights.
        Learn from complex scenarios that mirror actual practice.
      </>
    ),
  },
  {
    title: 'Mobile Friendly',
    icon: '📱',
    description: (
      <>
        Access your learning materials anywhere, anytime with our responsive design.
        Perfect for studying during breaks or while on rotation.
      </>
    ),
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          {icon}
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionHeading}>Why Choose Our Platform</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}