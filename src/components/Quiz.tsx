import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Flag, RotateCcw, XCircle } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "You receive an email from your bank asking you to verify your account by clicking a link. What's your first action?",
    options: [
      { text: "Click the link immediately to avoid account suspension", score: 0 },
      { text: "Check if the email looks professional before clicking", score: 1 },
      { text: "Hover over the link to check the actual URL destination", score: 2 },
      { text: "Contact your bank directly through their official website/phone", score: 3 },
    ],
  },
  {
    id: 2,
    question: "What is 'spear phishing'?",
    options: [
      { text: "A type of fishing sport", score: 0 },
      { text: "Mass email spam campaigns", score: 1 },
      { text: "Targeted attacks on specific individuals using personal information", score: 3 },
      { text: "Phishing that only happens on mobile devices", score: 0 },
    ],
  },
  {
    id: 3,
    question: "How can AI make phishing emails more dangerous?",
    options: [
      { text: "AI cannot be used for phishing", score: 0 },
      { text: "AI can generate perfect grammar and personalized content", score: 3 },
      { text: "AI makes emails load faster", score: 0 },
      { text: "AI only affects video content", score: 0 },
    ],
  },
  {
    id: 4,
    question: "You receive a voicemail from your CEO asking for an urgent wire transfer. The voice sounds exactly like them. What do you do?",
    options: [
      { text: "Process the transfer immediately - it's the CEO", score: 0 },
      { text: "Send an email to confirm", score: 1 },
      { text: "Call the CEO back using a known number to verify", score: 3 },
      { text: "Ask a colleague what to do", score: 1 },
    ],
  },
  {
    id: 5,
    question: "What's the best way to identify a deepfake video?",
    options: [
      { text: "Deepfakes are impossible to detect", score: 0 },
      { text: "Look for unnatural blinking, lighting inconsistencies, and audio sync issues", score: 3 },
      { text: "Check if the video is in HD", score: 0 },
      { text: "Videos on social media are always real", score: 0 },
    ],
  },
];

interface QuizProps {
  onClose: () => void;
}

const Quiz = ({ onClose }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, questions[currentQuestion].options[selectedOption].score];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedOption(null);
    }
  };

  const getLevel = () => {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage <= 40) {
      return {
        level: "Beginner",
        description: "You're just starting your cybersecurity journey. Our beginner content will help you build a strong foundation in identifying and avoiding phishing attempts.",
        color: "text-green-500",
        icon: "🌱",
      };
    } else if (percentage <= 70) {
      return {
        level: "Intermediate",
        description: "You have a good understanding of basic security concepts. Level up with our intermediate content to master advanced phishing detection techniques.",
        color: "text-yellow-500",
        icon: "📚",
      };
    } else {
      return {
        level: "Advanced",
        description: "Impressive! You're well-versed in cybersecurity. Our advanced content will help you stay ahead of cutting-edge AI threats and enterprise security challenges.",
        color: "text-primary",
        icon: "🚀",
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    const result = getLevel();
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4">
        <div className="w-full max-w-lg p-8 rounded-2xl bg-gradient-card border border-border shadow-card animate-in fade-in zoom-in duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">{result.icon}</div>
            <h3 className="text-2xl font-display font-bold mb-2">Your Level:</h3>
            <p className={`text-4xl font-display font-bold ${result.color} mb-6`}>{result.level}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">{result.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" className="flex-1" onClick={onClose}>
                <CheckCircle className="h-4 w-4" />
                Start {result.level} Training
              </Button>
              <Button variant="outline" onClick={resetQuiz}>
                <RotateCcw className="h-4 w-4" />
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-gradient-card border border-border shadow-card overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flag className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold">Find Your Level</span>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <XCircle className="h-5 w-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="p-6 md:p-8">
          <div className="text-sm text-muted-foreground mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          
          <h3 className="text-xl font-display font-semibold mb-6">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(index)}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
                  selectedOption === index
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border hover:border-primary/50 bg-secondary/30"
                }`}
              >
                <span className="text-sm">{option.text}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <Button
              variant="ghost"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="opacity-50 disabled:opacity-20"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="hero"
              onClick={handleNext}
              disabled={selectedOption === null}
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
