import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

const InteractiveSidebar = ({ children }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
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

      {/* Render the original sidebar with enhanced interactivity */}
      <div className="enhanced-sidebar-content">
        {enhancedChildren}
      </div>

      <style>{`
        /* ── Wrapper ── */
        .interactive-sidebar-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: var(--ifm-background-surface-color);
          font-family: var(--ifm-font-family-base);
        }

        /* ── Search bar ── */
        .interactive-search-container {
          position: sticky;
          top: 0;
          z-index: 10;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--ifm-toc-border-color);
          background-color: var(--ifm-background-surface-color);
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }

        .interactive-search-input {
          width: 100%;
          padding: 0.55rem 2.2rem 0.55rem 0.75rem;
          border: 1px solid var(--ifm-toc-border-color);
          border-radius: 6px;
          font-size: 0.875rem;
          background-color: var(--ifm-background-color);
          color: var(--ifm-font-color-base);
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .interactive-search-input::placeholder {
          color: var(--ifm-color-emphasis-500);
        }

        .interactive-search-input:focus {
          outline: none;
          border-color: var(--ifm-color-primary);
          box-shadow: 0 0 0 3px rgba(var(--ifm-color-primary-rgb), 0.15);
        }

        .clear-search-button {
          position: absolute;
          right: 1.4rem;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          min-width: 18px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          background: var(--ifm-color-emphasis-200);
          color: var(--ifm-color-emphasis-600);
          font-size: 0.7rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .clear-search-button:hover {
          background: var(--ifm-color-emphasis-300);
          color: var(--ifm-font-color-base);
        }

        /* ── Sidebar content ── */
        .enhanced-sidebar-content {
          flex: 1;
          overflow-y: auto;
          padding: 0.25rem 0;
          scrollbar-width: thin;
          scrollbar-color: var(--ifm-color-emphasis-300) transparent;
        }

        .enhanced-sidebar-content::-webkit-scrollbar {
          width: 4px;
        }

        .enhanced-sidebar-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .enhanced-sidebar-content::-webkit-scrollbar-thumb {
          background-color: var(--ifm-color-emphasis-300);
          border-radius: 4px;
        }

        .enhanced-sidebar-content::-webkit-scrollbar-thumb:hover {
          background-color: var(--ifm-color-emphasis-400);
        }
      `}</style>
    </div>
  );
};

export default InteractiveSidebar;