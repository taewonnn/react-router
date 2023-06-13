import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Videos from "./components/Videos";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      {path: '/videos', element: <Videos />},
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/videos',
    element: <Videos />
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
