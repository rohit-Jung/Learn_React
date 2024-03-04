import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  Signup,
  Post,
  AllPosts,
  EditPost,
  AddPost,
  Login,
} from "./pages/index.js";
import { ProtectedLayout } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <ProtectedLayout authenticated={false}>
            <Login />
          </ProtectedLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedLayout authenticated={false}>
            <Signup />
          </ProtectedLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <ProtectedLayout authenticated>
            {" "}
            <AllPosts />
          </ProtectedLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <ProtectedLayout authenticated>
            {" "}
            <AddPost />
          </ProtectedLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <ProtectedLayout authenticated>
            {" "}
            <EditPost />
          </ProtectedLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
