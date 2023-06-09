import CreatePost from "../pages/CreatePost";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage";
import Search from "../pages/Search";
import Notifications from "../components/NotifyComponent/notify/Notifications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EditPost from "../pages/EditPost";



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
  {
    path: "article/:id",
    element: <ArticlePage />
  },
  {
    path: "search/",
    element: <Search />,
  },
  {
    path: "/notifications",
    element: <Notifications />
  },
  {
    path: "/login",
    element: <Login />
  },  
  {
    path: "/register",
    element: <Register />
  },  
  {
    path: "/edit/:id",
    element: <EditPost />
  },  
]);