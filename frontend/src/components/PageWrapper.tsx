import React from 'react';
import Layout from '@theme/Layout';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';

type PageWrapperProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title = 'Radiology Textbook',
  description = 'Comprehensive radiology education for medical students'
}) => {
  return (
    <Layout title={title} description={description}>
      <ScrollProgressIndicator />
      <main>{children}</main>
    </Layout>
  );
};

export default PageWrapper;