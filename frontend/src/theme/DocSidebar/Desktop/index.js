import React from 'react';
import OriginalDocSidebarDesktop from '@theme-original/DocSidebar/Desktop';
import InteractiveSidebar from '@site/src/components/InteractiveSidebar';

export default function DocSidebarDesktop(props) {
  return (
    <InteractiveSidebar>
      <OriginalDocSidebarDesktop {...props} />
    </InteractiveSidebar>
  );
}