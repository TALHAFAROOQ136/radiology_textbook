import React from 'react';
import ChatbotWidget from './common/ChatbotWidget';

interface Props {
  children: React.ReactNode;
}

const Root = ({ children }: Props): JSX.Element => {
  return (
    <>
      {children}
      <ChatbotWidget />
    </>
  );
};

export default Root;