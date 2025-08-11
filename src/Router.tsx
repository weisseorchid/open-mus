import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/RootLayout';
import { lazy } from 'react';

const Index = lazy(() => import('@/pages/Index'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Onboarding = lazy(() => import('@/pages/Onboarding'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'onboarding', element: <Onboarding /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
