import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutMe />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router}/>
);
