import React, { useEffect } from 'react';

/**
 * Accessibility helper component that provides keyboard navigation
 * and ARIA attributes for improved accessibility
 */
function AccessibilityHelper() {
  useEffect(() => {
    // Trap focus within modal dialogs
    const trapFocus = (event) => {
      if (event.key !== 'Tab') return;

      const activeElement = document.activeElement;
      const dialog = document.querySelector('[role="dialog"]');

      if (!dialog) return;

      const focusableElements = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      } else if (!event.shiftKey && activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    };

    // Add global event listeners
    document.addEventListener('keydown', trapFocus);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', trapFocus);
    };
  }, []);

  return null;
}

/**
 * Skip link for screen reader users
 */
export function SkipLink({ targetId }) {
  return (
    <a
      href={`#${targetId}`}
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#000',
        color: '#fff',
        padding: '8px',
        fontSize: '14px',
        textDecoration: 'none',
        zIndex: 10000,
        transition: 'top 0.3s',
      }}
      onFocus={(e) => {
        e.target.style.top = '6px';
      }}
      onBlur={(e) => {
        e.target.style.top = '-40px';
      }}
    >
      Skip to content
    </a>
  );
}

/**
 * ARIA live region for announcements
 */
export function LiveRegion({ children, politeness = "polite" }) {
  return (
    <div
      aria-live={politeness}
      aria-atomic="true"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
      }}
    >
      {children}
    </div>
  );
}

export default AccessibilityHelper;