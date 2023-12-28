// helper obtained from https://github.com/vercel/next.js/discussions/48937#discussioncomment-6395245

import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';

export type Props = {
  router: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

export const NextRouterProviderMock = ({ router, children }: Props) => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};