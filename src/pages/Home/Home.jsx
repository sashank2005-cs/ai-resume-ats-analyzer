import { useState } from "react";
import CursorGlow from "../../components/CursorGlow/CursorGlow";
// Home.jsx TOP
import Hero from "../../components/Hero/Hero";

import Navbar from "../../components/Navbar/Navbar";

import Stats from "../../components/Stats/Stats";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import UploadBox from "../../components/UploadBox/UploadBox";
import DashboardPreview from "../../components/DashboardPreview/DashboardPreview";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";

import Background from "../../components/Background/Background";

function Home() {
  const [analysis, setAnalysis] = useState(null);

  const scrollToUpload = () => {
    document.getElementById("upload")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent">
  <Background />

  <CursorGlow />

  <div className="relative z-10"></div>
      {/* Main website content */}
      <div className="relative z-10">
        <Navbar />

      <Hero />
        <Stats />

        <FeatureSection />

        <UploadBox setAnalysis={setAnalysis} />

        {analysis && <DashboardPreview analysis={analysis} />}

        <Testimonials />

        <Footer />
      </div>
    </main>
  );
}

export default Home;