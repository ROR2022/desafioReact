import CreatePost from "../pages/CreatePost";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage";
import Search from "../pages/Search";



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
    path: "article/",
    element: <ArticlePage />
  },
  {
    path: "search/",
    element: <Search />,
  },
]);