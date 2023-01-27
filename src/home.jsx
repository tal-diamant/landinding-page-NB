import { useState } from "react";

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
import Modal from "./components/modal/modal";

import { modalsData } from "./mock data/modal-data";

import "./App.css";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(0);

  const openModal = (modal) => {
    setSelectedModal(modal);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="App">
      <Hero />
      <SocialProof />
      <Divider />
      <Features1 />
      <Features2 />
      <Metrics />
      <Features3 openModal={openModal}/>
      <Divider />
      <FAQ />
      <Divider />
      <CTA />
      <Footer />
      {modalOpen && <Modal data={modalsData[selectedModal]} close={closeModal}/>}
    </div>
  );
}

export default Home;
