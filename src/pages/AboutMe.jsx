import salida from "../assets/images/salida.png";
export default function AboutMe() {
  return (
    <div className="flex justify-center min-h-[100dvh]">
      <div className="flex max-w-5xl flex-col pt-8 gap-6">
        <h2 className="font-bold text-3xl ">About Me</h2>
        <img
          className="w-[150px] h-[150px] rounded-full"
          src={salida}
          alt="ImageImage"
        />
        <div>
          <div className="text-2xl font-bold">Objective</div>
          <p className="text-xl">
            Motivated coding graduate with a passion for software development
            and a desire to contribute to innovative projects. Eager to leverage
            my newly acquired skills in web development to kickstart a rewarding
            career in the tech industry.
          </p>
        </div>
        <div>
          <div className="text-2xl font-bold"> Skills</div>
          <ul className="text-xl">
            <li>Proficient in HTML, JavaScript, CSS.</li>
            <li>
              Experience with frameworks/libraries such as React.js, Vue.js,
              BULMA, TailWind, Chart.js.
            </li>
            <li>
              Familiar with backend development using Node.js and Express.js.
            </li>
            <li>
              Knowledge of database management systems including MongoDB and
              MySQL.
            </li>
            <li>
              Knowledge of database management systems including MongoDB and
              MySQL.
            </li>
            <li>
              Knowledge of database management systems including MongoDB and
              MySQL.
            </li>
          </ul>
        </div>
        <div>
          <div className="text-2xl font-bold">Projects</div>
          <div className="text-xl">
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
              target="_blank"
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
