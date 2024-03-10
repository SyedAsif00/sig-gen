import "./App.css";
import {
  Navbar,
  IntroSection,
  Communicate,
  Features,
  Footer,
  AboutUs,
} from "../src/components/shared";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <Communicate />
      <Features />
      <Footer />
      <AboutUs />
    </div>
  );
}

export default App;
