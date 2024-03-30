import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./Pages/AboutMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutMe />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router}/>
);
