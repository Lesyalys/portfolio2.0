import { StrictMode, ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Menu } from "./components/menu/Menu.jsx";
import { About } from "./components/pages/About.jsx";
import { Error } from "./components/pages/Error.jsx";
import { Contact } from "./components/pages/Contact.jsx";
import { Publication } from "./components/pages/Publication.jsx";
import "./index.css";
import App from "./App.jsx";
import { MyWork } from "./components/pages/MyWork.jsx";
import { path } from "motion/react-client";
import { Conf } from "./components/pages/Comf.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        // {
        //   index: true,
        //   element: <Menu />,
        // },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "publication",
          element: <Publication />,
        },
        {
          path: "myWork",
          element: <MyWork />,
        },
        {
          path: "conferences",
          element: <Conf />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    basename: "/portfolio2.0",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
