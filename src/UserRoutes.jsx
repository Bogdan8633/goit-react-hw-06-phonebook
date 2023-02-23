import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MyContactsPage = lazy(() =>
  import('./pages/MyContactsPage/MyContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<MyContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
