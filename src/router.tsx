import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards pages

const Dashboard = Loader(lazy(() => import('src/content/dashboards/overview')));
const Projects = Loader(lazy(() => import('src/content/dashboards/projects')));
const Orders = Loader(lazy(() => import('src/content/dashboards/orders')));
const Payments = Loader(lazy(() => import('src/content/dashboards/payments')));
const Company = Loader(lazy(() => import('src/content/dashboards/company')));
const BlankPage = Loader(lazy(() => import('src/content/dashboards/blank')));

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/dashboard/"
            replace
          />
        )
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'payments',
        element: <Payments />
      },
      {
        path: 'company',
        element: <Company />
      },
      {
        path: 'blank',
        element: <BlankPage />
      }
    ]
  }
];

export default routes;
