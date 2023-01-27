import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import SocialProof from "./components/social proof/socialProof";
import Divider from "./components/divider/divder";
import Features1 from "./components/features 1/features-1";
import Features2 from "./components/features 2/features-2";
import Metrics from "./components/metrics/metrics";
import Features3 from "./components/features 3/features-3";
import FAQ from "./components/FAQ/faq";
import CTA from "./components/cta/cta";
import Footer from "./components/footer/footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SocialProof />
      <Divider />
      <Features1 />
      <Features2 />
      <Metrics />
      <Features3 />
      <Divider />
      <FAQ />
      <Divider />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
