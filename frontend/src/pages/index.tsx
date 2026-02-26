import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    transform: `translateY(${scrollPosition * 0.4}px)`,
    opacity: Math.max(0.5, 1 - scrollPosition / 300)
  };

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={headerStyle}
    >
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/part-1-foundations/chapter-01-introduction">
                Start Learning - 5min ⏱️
              </Link>
              <Link
                className="button button--primary button--lg"
                to="/docs/part-3-chest/chapter-01-chest-anatomy">
                View Cases
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.medicalIcon}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#fff" opacity="0.1"/>
                <path d="M30,30 L70,30 L70,70 L30,70 Z" stroke="#fff" strokeWidth="3" fill="none"/>
                <path d="M50,30 L50,70 M30,50 L70,50" stroke="#fff" strokeWidth="3"/>
                <circle cx="50" cy="50" r="15" stroke="#fff" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  const stats = [
    { number: '50+', label: 'Medical Imaging Cases' },
    { number: '200+', label: 'Educational Modules' },
    { number: '10k+', label: 'Active Learners' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col col--3">
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This platform transformed how I learn radiology. The DICOM viewer is exceptional!",
      author: "Dr. Sarah Johnson",
      role: "Radiology Resident"
    },
    {
      quote: "The interactive cases helped me prepare for my board exams effectively.",
      author: "Dr. Michael Chen",
      role: "Medical Student"
    },
    {
      quote: "Best radiology education platform I've used. Highly recommended!",
      author: "Dr. Emily Rodriguez",
      role: "Practicing Radiologist"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What Our Users Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col col--4">
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>❝</div>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.author}</strong>
                  <span className={styles.testimonialRole}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <h2 className={styles.ctaTitle}>Ready to Transform Your Radiology Education?</h2>
            <p className={styles.ctaSubtitle}>Join thousands of medical professionals who trust our platform</p>
            <div className={styles.ctaButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/part-1-foundations/chapter-01-introduction">
                Get Started Free
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/part-1-foundations/chapter-01-introduction">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Advanced radiology education platform with interactive DICOM viewing and comprehensive learning modules">
      <HomepageHeader />
      <StatsSection />
      <main>
        <HomepageFeatures />
        <TestimonialsSection />
      </main>
      <CTASection />
    </Layout>
  );
}