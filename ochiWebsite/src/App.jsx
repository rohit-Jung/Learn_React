import AboutPage from "./components/AboutPage";
import Eyes from "./components/Eyes";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="w-full bg-[#F1F1F1] relative">
        <Navbar />
        <LandingPage />
        <Marquee />
        <AboutPage />
        <Eyes />
      </div>
    </div>
  );
}

export default App;
