export default function Resume() {
  return (
    <div className="flex flex-col bg-gray-300  text-w pt-14 ml-40 gap-3">
      <div className="font-bold text-2xl">Resume</div>
      <div>
        Download{" "}
        <a href="https://github.com/salidamaharjan/react-portfolio/blob/main/src/assets/ReactResume.pdf?raw=true" target="_blank" className="underline underline-offset-4 hover:text-blue-500">
          Resume
        </a>
      </div>
    </div>
  );
}
