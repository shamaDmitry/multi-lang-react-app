import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Page_404 from "./Pages/Page_404";
import BasicLayout from "./Layouts/BasicLayout";
import ProtectedRoute from './Components/ProtectedRoute';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<BasicLayout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />


    <Route element={<ProtectedRoute />}>
      {/* <Route
        path="users/create"
        element={<UserForm />}
        loader={userCreateLoader}
      /> */}
    </Route>

    <Route path="*" element={<Page_404 />} />
  </Route>
));

export default router;