import { ContextContainer } from '@contexts';

import React from 'react';
import App from './App';
import { CatchException } from '@components';

// This screen for handling JS Crash
class Index extends React.Component<any> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = { hasError: false };

  componentDidCatch(error: any, errorInfo: any) {
    if (__DEV__) {
      console.log('componentDidCatch ', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return <CatchException onRetry={() => {}} />;
    }

    return (
      <ContextContainer>
        <App />
      </ContextContainer>
    );
  }
}

export default Index;
