import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navigationpane from './components/nav.jsx';

import Home from './pages/home';
import Account from './pages/account';
import Mynotes from './pages/mynotes';
import Mytasks from './pages/mytasks';
import Signinup from './pages/signinup';
import Nopage from "./pages/nopage";
import Labels from "./pages/labels";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigationpane />}>
      <Route index element={<Home />} />
      <Route path="Account" element={<Account />} />
      <Route path="my-notes" element={<Mynotes />} />
      <Route path="my-tasks" element={<Mytasks />} />
      <Route path="my-labels" element={<Labels />} />
      <Route path="sign-in-up" element={<Signinup />} />
      <Route path="*" element={<Nopage />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
