import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-300 h-[100dvh]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
