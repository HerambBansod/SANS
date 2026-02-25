
import Landing from "./Components/Landing";
import WhyWe from "./Components/WhyWe";
import AboutUs from "./Components/AboutUs";
import Gallery from "./Components/Gallery";
import Testimonial from "./Components/Testimonial";
import TransitionEffect from "./Components/TransitionEffect"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main>
      <div>
        <Landing /> 
        <WhyWe/>
        <AboutUs/>
        <Gallery/>
        <Testimonial/>
        <TransitionEffect />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
