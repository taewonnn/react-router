import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Videos from "./components/Videos";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
