import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import { HomePage } from "../pages/HomePage.tsx";
import BaseLayout from "../layouts/BaseLayout.tsx";
import {CustomerDetailsPage} from "../pages/CustomerDetailsPage.tsx";
import {NotFoundPage} from "../pages/NotFoundPage.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<BaseLayout />}>
        <Route element={<Navigate to={'/'} />} />
        <Route element={<HomePage />} path={'/'} />
        <Route element={<CustomerDetailsPage />} path={'/customer/:id'} />
      </Route>
      <Route element={<NotFoundPage />} path="*" />
    </>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_skipActionErrorRevalidation: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    }
  }
);
