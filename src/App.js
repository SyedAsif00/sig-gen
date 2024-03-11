import "./App.css";
import {
  Navbar,
  IntroSection,
  CreateEmail_Device,
  Features,
  Footer,
  AboutUs,
  CustomizeEmail_Signature,
  Faq,
  CreateEmail_Template,
  BenefitText,
  SalesAndMarketing,
  Influencers,
  Freelaner,
} from "../src/components/shared";

function App() {
  return (
    <div className="App AppContainer">
      <Navbar />
      <IntroSection />
      <Features />
      <CreateEmail_Device />
      <CustomizeEmail_Signature />
      <CreateEmail_Template />
      <BenefitText />
      <SalesAndMarketing />
      <Influencers />
      <Freelaner />
      <Faq />
      <AboutUs />
    </div>
  );
}

export default App;
