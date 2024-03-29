export default function NavBar() {
  return (
    <nav>
      <ul className="bg-gray-800 flex font-bold text-xl text-white flex-row justify-between px-4 py-4">
        <li>Salida M</li>
        <div className="flex flex-row gap-[50px]">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </div>
      </ul>
    </nav>
  );
}
