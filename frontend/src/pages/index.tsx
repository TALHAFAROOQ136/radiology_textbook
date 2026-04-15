import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ── SVG Icons ── */
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const IconScan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
    <rect x="7" y="7" width="10" height="10" rx="1"/><path d="M7 12h10"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconHospital = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
    <line x1="12" y1="7" x2="12" y2="11"/><line x1="10" y1="9" x2="14" y2="9"/>
  </svg>
);
const IconMobile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

/* ── Hero Section ── */
function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      {/* Floating blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      <div className={styles.heroInner}>
        {/* Left column */}
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            Trusted by 10,000+ Medical Professionals
          </div>

          <h1 className={styles.heroHeading}>
            Master Radiology<br />
            <span className={styles.heroGradient}>With Confidence</span>
          </h1>

          <p className={styles.heroSubtext}>
            The most comprehensive radiology education platform — interactive DICOM cases, expert-authored modules, and adaptive learning paths designed for every stage of your medical career.
          </p>

          <div className={styles.heroCtas}>
            <Link className={styles.btnPrimary} to="/docs/part-1-foundations/chapter-01-introduction">
              Start Learning Free
              <span className={styles.btnIcon}><IconArrow /></span>
            </Link>
            <Link className={styles.btnGhost} to="/docs/part-3-chest/chapter-01-chest-anatomy">
              Explore Cases
            </Link>
          </div>

          <div className={styles.heroTrust}>
            <div className={styles.avatarGroup}>
              {['JD','SR','MC','EP','AK'].map((i, idx) => (
                <div key={idx} className={styles.avatar} style={{ zIndex: 5 - idx }}>
                  {i}
                </div>
              ))}
            </div>
            <p className={styles.trustText}>
              <strong>4.9/5</strong> rated by residents & attendings
            </p>
          </div>
        </div>

        {/* Right column – visual */}
        <div className={styles.heroRight}>
          <div className={styles.scanCard}>
            <div className={styles.scanHeader}>
              <div className={styles.scanDots}>
                <span /><span /><span />
              </div>
              <span className={styles.scanTitle}>Chest CT — Case #247</span>
              <span className={styles.scanBadgeLive}>LIVE</span>
            </div>
            <div className={styles.scanBody}>
              {/* Simulated scan grid */}
              <div className={styles.scanGrid}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className={`${styles.scanSlice} ${i === 4 ? styles.scanSliceActive : ''}`}>
                    <div className={styles.scanSliceInner}>
                      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="30" cy="30" rx="28" ry="26" fill="#0d1b2a" stroke="#1e3a5f" strokeWidth="1"/>
                        <ellipse cx="22" cy="30" rx="10" ry="14" fill="none" stroke="#2196f3" strokeWidth="1.5" opacity={i===4?1:0.4}/>
                        <ellipse cx="38" cy="30" rx="10" ry="14" fill="none" stroke="#2196f3" strokeWidth="1.5" opacity={i===4?1:0.4}/>
                        <path d="M28 20 Q30 28 32 20" stroke="#90caf9" strokeWidth="1" fill="none"/>
                        {i === 4 && <circle cx="38" cy="24" r="3" fill="none" stroke="#f44336" strokeWidth="1.5"/>}
                        {i === 4 && <line x1="38" y1="18" x2="45" y2="12" stroke="#f44336" strokeWidth="1"/>}
                        {i === 4 && <text x="46" y="11" fill="#f44336" fontSize="4">Nodule</text>}
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info bar */}
              <div className={styles.scanInfo}>
                <div className={styles.scanInfoItem}>
                  <span className={styles.scanInfoLabel}>Modality</span>
                  <span className={styles.scanInfoVal}>CT</span>
                </div>
                <div className={styles.scanInfoDivider} />
                <div className={styles.scanInfoItem}>
                  <span className={styles.scanInfoLabel}>Slice</span>
                  <span className={styles.scanInfoVal}>5 / 9</span>
                </div>
                <div className={styles.scanInfoDivider} />
                <div className={styles.scanInfoItem}>
                  <span className={styles.scanInfoLabel}>Finding</span>
                  <span className={styles.scanInfoVal} style={{ color: '#f44336' }}>Nodule</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className={`${styles.chip} ${styles.chipTL}`}>
            <span className={styles.chipIcon} style={{ color: '#4caf50' }}>✓</span> AI-Powered Feedback
          </div>
          <div className={`${styles.chip} ${styles.chipBR}`}>
            <span className={styles.chipIcon} style={{ color: '#2196f3' }}>↗</span> +34% Board Pass Rate
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

/* ── Stats Section ── */
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cases = useCountUp(50, 1800, visible);
  const modules = useCountUp(200, 1800, visible);
  const learners = useCountUp(10000, 2200, visible);
  const rating = useCountUp(99, 1600, visible);

  const stats = [
    { value: `${cases}+`, label: 'DICOM Cases', sub: 'Across all modalities' },
    { value: `${modules}+`, label: 'Learning Modules', sub: 'Expert-authored content' },
    { value: `${learners.toLocaleString()}+`, label: 'Active Learners', sub: 'Worldwide community' },
    { value: `${rating}%`, label: 'Satisfaction Rate', sub: 'From verified reviews' },
  ];

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statSub}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Features Section ── */
const features = [
  {
    icon: <IconBook />,
    title: 'Comprehensive Curriculum',
    desc: 'Complete radiology textbook covering basic physics to advanced imaging techniques. Structured learning paths designed by medical experts.',
    color: '#2196f3',
  },
  {
    icon: <IconScan />,
    title: 'Interactive DICOM Viewer',
    desc: 'Advanced medical imaging viewer with measurement tools, annotations, and multi-planar reconstruction for all major modalities.',
    color: '#00bcd4',
  },
  {
    icon: <IconUsers />,
    title: 'Expert-Authored Content',
    desc: 'Developed by board-certified radiologists with real clinical scenarios, evidence-based practices, and regular knowledge updates.',
    color: '#4caf50',
  },
  {
    icon: <IconChart />,
    title: 'Adaptive Progress Tracking',
    desc: 'AI-powered analytics monitor your progress, identify knowledge gaps, and deliver personalized study recommendations.',
    color: '#ff9800',
  },
  {
    icon: <IconHospital />,
    title: 'Real Clinical Cases',
    desc: 'Hundreds of real patient cases with detailed expert explanations, differential diagnoses, and learning points.',
    color: '#e91e63',
  },
  {
    icon: <IconMobile />,
    title: 'Study Anywhere',
    desc: 'Fully responsive platform optimized for desktop, tablet, and mobile — perfect for studying between rotations.',
    color: '#9c27b0',
  },
];

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Platform Features</span>
          <h2 className={styles.sectionHeading}>Everything You Need to Excel</h2>
          <p className={styles.sectionSub}>
            Built specifically for medical learners — from first-year students to seasoned attendings.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIconWrap} style={{ '--card-color': f.color } as React.CSSProperties}>
                {f.icon}
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
              <div className={styles.featureAccent} style={{ background: f.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Create Your Account', desc: 'Sign up free and select your training level — student, resident, or attending.' },
    { num: '02', title: 'Choose Your Path', desc: 'Pick from curated learning paths or explore our full curriculum by system or modality.' },
    { num: '03', title: 'Learn Interactively', desc: 'Study with real DICOM cases, expert annotations, and embedded quizzes.' },
    { num: '04', title: 'Track & Improve', desc: 'Review performance analytics, revisit weak areas, and earn certification badges.' },
  ];

  return (
    <section className={styles.howSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>How It Works</span>
          <h2 className={styles.sectionHeading}>Start Learning in Minutes</h2>
        </div>
        <div className={styles.stepsRow}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              {i < steps.length - 1 && <div className={styles.stepLine} />}
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This platform completely transformed how I approach radiological interpretation. The DICOM viewer is unmatched in any educational tool I've used.",
      name: 'Dr. Sarah Johnson',
      role: 'Radiology Resident, Johns Hopkins',
      initials: 'SJ',
      stars: 5,
    },
    {
      quote: "The structured curriculum and real cases helped me pass my board exams on the first attempt. I recommend it to every medical student in my cohort.",
      name: 'Dr. Michael Chen',
      role: 'PGY-3 Radiology, Mayo Clinic',
      initials: 'MC',
      stars: 5,
    },
    {
      quote: "Exceptional depth of content. The adaptive learning engine focuses my study time exactly where I need it most. A must-have for every radiologist.",
      name: 'Dr. Emily Rodriguez',
      role: 'Attending Radiologist, UCSF',
      initials: 'ER',
      stars: 5,
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Testimonials</span>
          <h2 className={styles.sectionHeading}>Trusted by Medical Professionals</h2>
          <p className={styles.sectionSub}>
            Join thousands of learners who have advanced their careers with our platform.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className={styles.star}><IconStar /></span>
                ))}
              </div>
              <p className={styles.testimonialQuote}>"{t.quote}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaGlow} />
      <div className={styles.ctaContent}>
        <div className={styles.ctaIcon}><IconShield /></div>
        <h2 className={styles.ctaHeading}>Ready to Elevate Your Radiology Practice?</h2>
        <p className={styles.ctaSub}>
          Join 10,000+ medical professionals who trust our platform for expert radiology education.
        </p>
        <div className={styles.ctaBtns}>
          <Link className={styles.ctaBtnPrimary} to="/docs/part-1-foundations/chapter-01-introduction">
            Get Started — It's Free
          </Link>
          <Link className={styles.ctaBtnOutline} to="/docs/part-1-foundations/chapter-01-introduction">
            Browse Curriculum
          </Link>
        </div>
        <p className={styles.ctaNote}>No credit card required · Instant access · Cancel anytime</p>
      </div>
    </section>
  );
}

/* ── Page export ── */
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Radiology Education Platform`}
      description="Advanced radiology education platform with interactive DICOM viewing and comprehensive learning modules">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}
