import React, { useState } from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';

export default function DocSidebarItem({
  item,
  activePath,
  level,
  index,
  ...props
}) {
  const { items, href, label, className } = item;
  const [collapsed, setCollapsed] = useState(item.collapsed);
  const { pathname: location } = useLocation();

  if (items) {
    // Category Item
    const isActive = items.some((subItem) =>
      activePath?.startsWith(subItem.href ?? subItem.path),
    );

    return (
      <li
        className={clsx(
          'menu__list-item',
          {
            'menu__list-item--collapsed': collapsed,
          },
          className,
        )}>
        <div
          className={clsx('menu__list-item-collapsible', {
            'menu__list-item-collapsible--active': isActive,
          })}
          onClick={() => setCollapsed(!collapsed)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setCollapsed(!collapsed);
            }
          }}
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div className={clsx('menu__link', { 'menu__link--sublist': true, 'menu__link--active': isActive })}>
            {label}
          </div>
          <span
            className={clsx('menu__caret', {
              'menu__caret--rotated': !collapsed,
            })}
            style={{
              transform: collapsed ? 'rotate(-90deg)' : 'rotate(0)',
              transition: 'transform 0.2s ease',
              display: 'inline-block',
              fontSize: '0.8rem',
              lineHeight: 1,
              marginLeft: '0.5rem'
            }}
          >
            ▼
          </span>
        </div>

        {!collapsed && (
          <ul className="menu__list">
            {items.map((childItem, childIndex) => (
              <DocSidebarItem
                key={childIndex}
                item={childItem}
                activePath={activePath}
                level={level + 1}
                index={childIndex}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Link item
  if (href) {
    const isCurrentPage = activePath === href;
    return (
      <li className="menu__list-item">
        <Link
          aria-current={isCurrentPage ? 'page' : undefined}
          className={clsx(
            'menu__link',
            {
              'menu__link--active': isCurrentPage,
            },
            className,
          )}
          to={href}
          {...(isInternalUrl(href) ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {label}
        </Link>
      </li>
    );
  }

  return null;
}