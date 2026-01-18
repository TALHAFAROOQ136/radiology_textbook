import React from 'react';
import clsx from 'clsx';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className={clsx(styles.errorBoundary, this.props.className)}>
          <div className={styles.errorContent}>
            <h2 className={styles.errorTitle}>Something went wrong</h2>

            <div className={styles.errorMessage}>
              <p>We're sorry, but something went wrong. Please try refreshing the page or contact support if the issue persists.</p>

              {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                <details className={styles.errorDetails}>
                  <summary>Error Details</summary>
                  <pre className={styles.errorStack}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>

            <div className={styles.errorActions}>
              <button
                className={styles.refreshButton}
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>

              <button
                className={clsx(styles.contactButton, styles.secondaryButton)}
                onClick={() => {
                  // In a real app, this might open a support ticket
                  alert('Contacting support...');
                }}
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;