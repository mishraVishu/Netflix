import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom" ;
import Login from "./components/login";
import Browse from "./components/Browse";

const App = () => {

  const routes = createBrowserRouter([
                  {path:'/', element: <Body />},
                  {path:'/browse', element: <Browse /> }
                ]);

  return (
      <RouterProvider router={routes} />
  )
}

export default App;