export default function Resume() {
  return (
    <div className="flex flex-col bg-gray-300  text-w pt-14 ml-40 gap-3">
      <div className="font-bold text-2xl">Resume</div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-lg font-bold">Salida Maharjan</div>
          <div>
            <div>
              <a
                className="underline underline-offset-2 hover:decoration-blue-600 hover:text-blue-600"
                href="https://www.linkedin.com/in/salida-maharjan-6381b9173/"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a
                className="underline underline-offset-2 hover:decoration-blue-600 hover:text-blue-600"
                href="mailto:email@email.com"
              >
                Email
              </a>
            </div>
            <div>
              <a
                className="underline underline-offset-2 hover:decoration-blue-600 hover:text-blue-600"
                href="https://github.com/salidamaharjan"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Objective</div>
          <p>
            Motivated coding BootCamp graduate with a passion for software
            development and a desire to contribute to innovative projects. Eager
            to leverage my newly acquired skills in web development to kickstart
            a rewarding career in the tech industry.
          </p>
        </div>
        <div>
          <div className="text-lg font-bold">Education</div>
          <li>Full Stack Web Development BootCamp</li>
          <li>University Of Minnesota partnership with edX</li>
          <li>Minneapolis, MN</li>
          <li>Current</li>
        </div>
        <div>
          <div className="text-lg font-bold"> Skills</div>
          <ul>
            <li>Proficient in HTML, JavaScript, CSS</li>
            <li>
              Experience with frameworks/libraries such as React.js, Vue.js,
              BULMA, TailWind, Chart.js
            </li>
            <li>
              Familiar with backend development using Node.js and Express.js
            </li>
            <li>
              Knowledge of database management systems including MongoDB and
              MySQL
            </li>
            <li>
              Knowledge of database management systems including MongoDB and
              MySQL
            </li>
            <li>
              Knowledge of database management systems including MongoDB and
              MySQL
            </li>
          </ul>
        </div>
        <div>
          <div className="text-lg font-bold">Projects</div>
          <div>
            Check out my{" "}
            <a
              className="underline underline-offset-2 hover:decoration-blue-600 hover:text-blue-600"
              href="http://localhost:5173/portfolio"
            >
              Portfolio{" "}
            </a>
            and{" "}
            <a
              className="underline underline-offset-2 hover:decoration-blue-600 hover:text-blue-600"
              href="https://github.com/salidamaharjan"
            >
              GitHub{" "}
            </a>
            for more details.
          </div>
        </div>
      </div>
    </div>
  );
}
