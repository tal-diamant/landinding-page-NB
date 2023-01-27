import Header from "./components/header/header";
import DesktopHero from "./components/desktop-hero/desktopHero";
import DesktopMetrics from "./components/desktop-metrics/desktopMetrics";
import DesktopContent from "./components/desktop-content/desktopContent";
import DesktopContact from "./components/desktop-contact/desktopContact";

import Divider from "./components/divider/divder";
import CTA from "./components/cta/cta";
import Footer from "./components/footer/footer";
import "./App.css";

function Desktop() {
  return (
    <div className="Desktop">
      <DesktopHero />
      <DesktopMetrics />
      <DesktopContent />
      <Divider />
      <DesktopContact />
      <CTA /> {/* <-- */}
      <Footer />
    </div>
  );
}

export default Desktop;
