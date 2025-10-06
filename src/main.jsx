import { StrictMode, ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Menu } from "./components/menu/Menu.jsx";
import { About } from "./components/pages/About.jsx";
import { Skills } from "./components/pages/Skills.jsx";
import { Contact } from "./components/pages/Contact.jsx";
import { Publication } from "./components/pages/Publication.jsx";
import "./index.css";
import App from "./App.jsx";
import { MyWork } from "./components/pages/MyWork.jsx";

const router = createBrowserRouter([

  {
    path: "portfolio2.0/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: "about",
        element: <About />,
      },
      // {
      //   path: "skills",
      //   element: <Skills />,
      // },
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
