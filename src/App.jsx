import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <main className="relative container flex flex-col justify-center items-center p-10">
      <div
        onClick={() => handleTheme()}
        className="absolute top-0 left-0 p-2 cursor-pointer text-xl"
      >
        {theme ? <FaMoon /> : <FaSun />}
      </div>

      <Navbar />
      <Hero />
      <Card />
    </main>
  );
}

export default App;
