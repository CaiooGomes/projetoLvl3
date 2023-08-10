import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [{
        path: "notes",
        element: <Notes/>
      }],
      errorElement: <ErrorPage/>
    },
  ]);

