import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
  path: '/',
  element: <p>Home</p>
  },
  {
    path: '/videos',
    element: <p>Videos</p>
  },

]);

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
