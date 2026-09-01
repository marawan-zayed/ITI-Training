import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Receive from "./Component/Receive/Receive";
import Home from "./Component/Home/Home";
import Send from "./Component/Send/Send";
import Gallary from "./Component/Gallary/Gallary";
import Animals from "./Component/Animals/Animals";
import Birds from "./Component/Birds/Birds";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: `/`,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: `/receive`, element: <Receive /> },
        { path: `/send`, element: <Send /> },
        {
          path: `/gallary`,
          element: <Gallary />,
          children: [
            {
              path: `animals`,
              element: <Animals />,
            },
            {
              path: `birds`,
              element: <Birds/>,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
