import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { AppLayout } from 'layouts';

import type { FC } from 'react';

const Main = lazy(() => import('pages/Main'));
const Calculator = lazy(() => import('pages/Calculator'));
const NotFound = lazy(() => import('pages/NotFound'));

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <AppLayout>
          <ReactRoutes>
            <Route path="/" element={<Main />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="*" element={<NotFound />} />
          </ReactRoutes>
        </AppLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
