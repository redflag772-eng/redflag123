import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThreatSection from "@/components/ThreatSection";
import LevelSection from "@/components/LevelSection";
import Quiz from "@/components/Quiz";
import Footer from "@/components/Footer";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const scrollToQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ThreatSection />
        <LevelSection onTakeQuiz={scrollToQuiz} />
      </main>
      <Footer />
      
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
    </div>
  );
};

export default Index;
