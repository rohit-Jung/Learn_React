import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { About, Contact, Github, Home, Users } from "./components";
import { gitInfo } from "./components/Github/Github";

//creating router paths -> createBrowserRouter -> createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    //Route can be self closing or pair closing based on our needs to loop like here all the routes are defined inside the main route that contains layout information
    //Hence the layout would be loaded on every page
    <Route path="" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:params" element={<Users />} />
      <Route
        loader={gitInfo} // We used the gitInfo variable from the Component Github to load the information fetched in that variable
        path="/github"
        element={<Github />}
      />
    </Route>
  )
);

//Router Paths can be created in this way too
//createBrowserRouter([{}])
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: ":params",
//         element: <Users />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//         loader: gitInfo,
//       },
//     ],
//   },
// ]);

//providing the router and routes -> RouterProvider router ={router}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
