import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders landing page when visiting /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const landingPageElement = screen.getByText(/open source/i);
  expect(landingPageElement).toBeInTheDocument();
});

test('renders terms of service page when visiting /terms-of-service', () => {
  render(
    <MemoryRouter initialEntries={['/terms-of-service']}>
      <App />
    </MemoryRouter>
  );
  const termsPageElement = screen.getByText(/terms of service/i);
  expect(termsPageElement).toBeInTheDocument();
});
