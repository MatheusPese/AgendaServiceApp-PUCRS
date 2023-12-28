import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '@/app/(public)/account/login/page';
import { getByPlaceholderText, getByText } from '@testing-library/dom';
import { NextRouterProviderMock } from '@/__tests__/mockers/useRouter.mocker';


test('should render login form', async () => {
  const push = jest.fn();
  const { container } = render(
      <NextRouterProviderMock router={{ push }}>
  <LoginPage />
  </NextRouterProviderMock>
  );
  
  const emailInput = getByPlaceholderText(container, 'Email ou Telefone');
  expect(emailInput).toBeVisible();

});