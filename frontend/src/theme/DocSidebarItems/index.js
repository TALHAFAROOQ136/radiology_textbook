import React, { useState } from 'react';
import DocSidebarItem from '@theme/DocSidebarItem';

export default function DocSidebarItems({ items, ...props }) {
  return (
    <>
      {items.map((item, idx) => (
        <DocSidebarItem
          key={idx}
          item={item}
          {...props}
          level={props.level}
        />
      ))}
    </>
  );
}