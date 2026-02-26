import React, { useState } from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';

import styles from './styles.module.css';

function useShowAnnouncementBar() {
  const {isActive} = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

  useScrollPosition(
    ({scrollY}) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}

export default function DocSidebarDesktopContent({
  path,
  sidebar,
  className,
  searchTerm, // Receive search term from InteractiveSidebar
}) {
  const showAnnouncementBar = useShowAnnouncementBar();

  // Filter sidebar items based on search term from InteractiveSidebar
  const filteredSidebar = searchTerm
    ? sidebar.map(item => {
        if (item.type === 'category') {
          // Check if category label matches
          const labelMatches = item.label.toLowerCase().includes(searchTerm.toLowerCase());

          // Recursively filter child items
          const filteredItems = filterSidebarItems(item.items || [], searchTerm);

          // Include category if either its label matches or any of its children match
          if (labelMatches || filteredItems.length > 0) {
            return {
              ...item,
              items: filteredItems,
              collapsed: false // Expand if matches
            };
          }
        } else if (item.label && item.label.toLowerCase().includes(searchTerm.toLowerCase())) {
          // Direct match for link items
          return item;
        }

        return null;
      }).filter(Boolean)
    : sidebar;

  // Helper function to recursively filter sidebar items
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

  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx(
        'menu thin-scrollbar',
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}>

      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        <DocSidebarItems items={filteredSidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}