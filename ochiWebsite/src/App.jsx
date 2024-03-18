import {
  Navbar,
  LandingPage,
  Marquee,
  AboutPage,
  Eyes,
  Featured,
  Cards,
  Footer,
} from "./components";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <div className="w-full  relative">
        <Navbar />
        <LandingPage />
        <Marquee />
        <AboutPage />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
