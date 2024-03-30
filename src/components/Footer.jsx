import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={`flex gap-5 text-2xl p-4 justify-center items-end`}>
      <a href="https://www.linkedin.com/in/salida-maharjan-6381b9173/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/?lang=en">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://github.com/salidamaharjan">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
}
