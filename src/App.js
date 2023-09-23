import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { Navbar, Main } from './features/component';

function App() {


  const router = createBrowserRouter([
    {path:"/" , element:<Navbar />, children:[
      { index:true , element: <Main />}
    ]}
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
