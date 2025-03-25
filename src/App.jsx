import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="container w-full flex flex-col justify-center items-center p-10">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
