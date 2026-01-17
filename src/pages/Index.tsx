import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import ThreatSection from "@/components/ThreatSection";
import LevelSection from "@/components/LevelSection";
import Quiz from "@/components/Quiz";
import PhishingSimulator from "@/components/PhishingSimulator";
import Footer from "@/components/Footer";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MissionSection />
        <ThreatSection />
        <LevelSection 
          onTakeQuiz={() => setShowQuiz(true)} 
          onOpenSimulator={() => setShowSimulator(true)} 
        />
      </main>
      <Footer />
      
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
      {showSimulator && <PhishingSimulator onClose={() => setShowSimulator(false)} />}
    </div>
  );
};

export default Index;
