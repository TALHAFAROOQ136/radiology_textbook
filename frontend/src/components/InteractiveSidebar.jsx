import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

const InteractiveSidebar = ({ children }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [recentlyVisited, setRecentlyVisited] = useState([]);
  const [currentTheme, setCurrentTheme] = useState('');

  // Handle section expansion
  const toggleSection = (sectionLabel) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionLabel]: !prev[sectionLabel]
    }));
  };

  // Track theme changes
  useEffect(() => {
    // Get initial theme
    const initialTheme = document.documentElement.getAttribute('data-theme') || '';
    setCurrentTheme(initialTheme);

    // Listen for theme changes
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute('data-theme') || '';
      setCurrentTheme(newTheme);
    };

    // Set up MutationObserver to watch for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Track recently visited pages
  useEffect(() => {
    if (location.pathname) {
      setRecentlyVisited(prev => {
        const newPath = location.pathname.replace(/\/$/, '');
        const filtered = prev.filter(path => path !== newPath);
        return [newPath, ...filtered].slice(0, 5); // Keep last 5 visited
      });
    }
  }, [location.pathname]);

  // Reset filters when location changes
  useEffect(() => {
    setSearchTerm('');
  }, [location.pathname]);

  // Enhanced search functionality to filter sidebar items
  const filterSidebarItems = (items, term) => {
    if (!term.trim()) return items;

    const lowerCaseTerm = term.toLowerCase();

    return items.map(item => {
      if (item.type === 'category') {
        // Check if category label matches
        const labelMatches = item.label.toLowerCase().includes(lowerCaseTerm);

        // Recursively filter child items
        const filteredItems = filterSidebarItems(item.items || [], term);

        // Include category if either its label matches or any of its children match
        if (labelMatches || filteredItems.length > 0) {
          return {
            ...item,
            items: filteredItems,
            collapsed: false // Expand if matches
          };
        }
      } else if (item.label && item.label.toLowerCase().includes(lowerCaseTerm)) {
        // Direct match for link items
        return item;
      }

      return null;
    }).filter(Boolean);
  };

  // Clone children and pass search functionality
  const enhancedChildren = React.cloneElement(children, {
    ...children.props,
    searchTerm, // Pass search term to sidebar
    recentlyVisited, // Pass recently visited items
  });

  // Enhance the sidebar with interactive features
  return (
    <div className="interactive-sidebar-wrapper" data-theme={currentTheme}>
      {/* Add search bar */}
      <div className="interactive-search-container">
        <input
          type="text"
          placeholder="Search chapters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="interactive-search-input"
          aria-label="Search sidebar items"
        />
        {searchTerm && (
          <button
            className="clear-search-button"
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Recently visited section */}
      {recentlyVisited.length > 0 && !searchTerm && (
        <div className="recently-visited-section">
          <div className="recently-visited-header">
            <span className="recently-visited-title">Recently Visited</span>
            <button
              className="clear-recent-button"
              onClick={() => setRecentlyVisited([])}
              aria-label="Clear recently visited"
            >
              Clear
            </button>
          </div>
          <ul className="recently-visited-list">
            {recentlyVisited.map((path, index) => (
              <li key={index} className="recent-item">
                <a
                  href={path}
                  className="recent-link"
                  onClick={(e) => {
                    // Handle client-side navigation if needed
                  }}
                >
                  {path.split('/').pop() || 'Home'}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render the original sidebar with enhanced interactivity */}
      <div className="enhanced-sidebar-content">
        {enhancedChildren}
      </div>

      <style>{`
        .interactive-sidebar-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .interactive-search-container {
          position: relative;
          padding: 1rem;
          border-bottom: 1px solid #e0e0e0;
          background-color: #f8f9fa;
          position: sticky;
          top: 0;
          z-index: 10;
          background: linear-gradient(to bottom, #ffffff, #f8f9fa);
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .interactive-search-input {
          width: 100%;
          padding: 0.6rem 2.5rem 0.6rem 0.8rem;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          background-color: white;
          box-sizing: border-box;
          color: #374151;
        }

        .interactive-search-input:focus {
          outline: none;
          border-color: #007cba;
          box-shadow: 0 0 0 3px rgba(0, 124, 186, 0.15);
          transform: translateY(-1px);
        }

        .clear-search-button {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: #e9ecef;
          border: none;
          font-size: 0.8rem;
          cursor: pointer;
          color: #6c757d;
          padding: 0.25rem;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          min-width: 20px;
        }

        .clear-search-button:hover {
          color: #495057;
          background-color: #dee2e6;
          transform: scale(1.1);
        }

        .progress-section {
          padding: 0.8rem 1rem;
          border-bottom: 1px solid #e9ecef;
          background-color: #f8fafc;
          background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
        }

        .progress-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .toggle-progress-button {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 1rem;
          cursor: pointer;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-weight: bold;
        }

        .toggle-progress-button:hover {
          background-color: #e2e8f0;
          border-color: #94a3b8;
        }

        .progress-details {
          margin-top: 0.6rem;
        }

        .progress-bar-container {
          display: flex;
          align-items: center;
          margin-bottom: 0.6rem;
        }

        .progress-bar {
          flex: 1;
          height: 10px;
          background-color: #e2e8f0;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #059669);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 4px rgba(16, 185, 129, 0.3);
        }

        .progress-text {
          margin-left: 0.75rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          min-width: 35px;
          text-align: center;
        }

        .progress-stats {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: #64748b;
          gap: 0.5rem;
        }

        .stat-item {
          padding: 0.2rem 0.4rem;
          background-color: #f1f5f9;
          border-radius: 4px;
          font-size: 0.65rem;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .recently-visited-section {
          padding: 0.8rem 1rem;
          border-bottom: 1px solid #e9ecef;
          background-color: #f8fafc;
          background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
        }

        .recently-visited-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
        }

        .recently-visited-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .clear-recent-button {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #64748b;
          font-size: 0.7rem;
          cursor: pointer;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .clear-recent-button:hover {
          background-color: #e2e8f0;
          border-color: #94a3b8;
          color: #475569;
        }

        .recently-visited-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recent-item {
          margin-bottom: 0.3rem;
        }

        .recent-item:last-child {
          margin-bottom: 0;
        }

        .recent-link {
          display: block;
          padding: 0.4rem 0.6rem;
          color: #475569;
          text-decoration: none;
          font-size: 0.8rem;
          border-radius: 4px;
          transition: all 0.2s ease;
          border-left: 2px solid transparent;
        }

        .recent-link:hover {
          background-color: #f1f5f9;
          color: #0f766e;
          padding-left: 0.8rem;
          border-left: 2px solid #0f766e;
          transform: translateX(2px);
        }

        .enhanced-sidebar-content {
          flex: 1;
          overflow-y: auto;
          padding: 0.5rem 0;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #e2e8f0;
        }

        .enhanced-sidebar-content::-webkit-scrollbar {
          width: 6px;
        }

        .enhanced-sidebar-content::-webkit-scrollbar-track {
          background: #e2e8f0;
          border-radius: 3px;
        }

        .enhanced-sidebar-content::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 3px;
          transition: background-color 0.2s ease;
        }

        .enhanced-sidebar-content::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }

        /* Dark mode styles */
        .interactive-sidebar-wrapper[data-theme='dark'],
        .interactive-sidebar-wrapper:where([data-theme='dark']),
        html[class~='dark'] .interactive-sidebar-wrapper,
        .dark .interactive-sidebar-wrapper {
          background-color: #1f2937;
        }

        html[class~='dark'] .interactive-search-container,
        .dark .interactive-search-container {
          background: linear-gradient(to bottom, #1f2937, #111827);
          border-bottom: 1px solid #374151;
          color: #f9fafb;
        }

        html[class~='dark'] .interactive-search-input,
        .dark .interactive-search-input {
          background-color: #374151;
          border: 1px solid #4b5563;
          color: #f9fafb;
        }

        html[class~='dark'] .interactive-search-input:focus,
        .dark .interactive-search-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        html[class~='dark'] .clear-search-button,
        .dark .clear-search-button {
          background: #4b5563;
          color: #d1d5db;
        }

        html[class~='dark'] .clear-search-button:hover,
        .dark .clear-search-button:hover {
          color: #f3f4f6;
          background-color: #6b7280;
        }

        html[class~='dark'] .recently-visited-section,
        .dark .recently-visited-section {
          background: linear-gradient(to bottom, #1f2937, #111827);
          border-bottom: 1px solid #374151;
        }

        html[class~='dark'] .recently-visited-title,
        .dark .recently-visited-title {
          color: #9ca3af;
        }

        html[class~='dark'] .clear-recent-button,
        .dark .clear-recent-button {
          background: #374151;
          border: 1px solid #4b5563;
          color: #93c5fd;
        }

        html[class~='dark'] .clear-recent-button:hover,
        .dark .clear-recent-button:hover {
          background-color: #4b5563;
          border-color: #6b7280;
          color: #bfdbfe;
        }

        html[class~='dark'] .recent-link,
        .dark .recent-link {
          color: #d1d5db;
        }

        html[class~='dark'] .recent-link:hover,
        .dark .recent-link:hover {
          background-color: #374151;
          color: #60a5fa;
          border-left: 2px solid #60a5fa;
        }

        html[class~='dark'] .enhanced-sidebar-content,
        .dark .enhanced-sidebar-content {
          scrollbar-color: #4b5563 #374151;
        }

        html[class~='dark'] .enhanced-sidebar-content::-webkit-scrollbar-track,
        .dark .enhanced-sidebar-content::-webkit-scrollbar-track {
          background: #374151;
        }

        html[class~='dark'] .enhanced-sidebar-content::-webkit-scrollbar-thumb,
        .dark .enhanced-sidebar-content::-webkit-scrollbar-thumb {
          background-color: #4b5563;
        }

        html[class~='dark'] .enhanced-sidebar-content::-webkit-scrollbar-thumb:hover,
        .dark .enhanced-sidebar-content::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSidebar;