import CreatePost from "../pages/CreatePost";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Notifications from "../components/NotifyComponent/notify/Notifications";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create/",
    element: <CreatePost />,
  },
  {path: "/notifications",
    element: <Notifications />
  },  
]);