import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="bg-gray-300 h-[100dvh] flex flex-col">
      <NavBar />
      <Outlet />
      <Footer className="gap-2 flex justify-center">
        <a href="https://www.linkedin.com/in/salida-maharjan-6381b9173/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/?lang=en">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/salidamaharjan">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Footer>
    </div>
  );
}

export default App;
