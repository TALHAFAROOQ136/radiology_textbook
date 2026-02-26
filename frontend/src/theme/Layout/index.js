import React from 'react';
import Layout from '@theme-original/Layout';
import ChatbotWidget from '@site/src/components/common/ChatbotWidget';
import TextSelectionHandler from '@site/src/components/common/TextSelectionHandler';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props}>
        {props.children}
        <ChatbotWidget />
        <TextSelectionHandler />
      </Layout>
    </>
  );
}