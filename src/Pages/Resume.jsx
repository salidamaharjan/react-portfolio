export default function Resume() {
  return (
    <div className="flex flex-col bg-gray-300  text-w pt-14 ml-40 gap-3">
      <div className="font-bold text-2xl">Resume</div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-lg font-bold">Salida Maharjan</div>
          <div>
            <div>
              <a href="https://www.linkedin.com/in/salida-maharjan-6381b9173/">
                LinkedIn
              </a>
            </div>
            <div>
              <a href="mailto:email@email.com">
                Email
              </a>
            </div>
            <div>
              <a href="https://github.com/salidamaharjan">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="text-lg font-bold">Objective</div>
        <div className="text-lg font-bold"> Skills</div>
        <div className="text-lg font-bold">Projects</div>
      </div>
    </div>
  );
}
