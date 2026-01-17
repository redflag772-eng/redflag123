import { BookOpen, GraduationCap, Rocket, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const levels = [
  {
    id: "beginner",
    icon: BookOpen,
    title: "Beginner",
    subtitle: "New to cybersecurity",
    description: "Perfect for those just starting their security journey. Learn the fundamentals of identifying phishing attempts and protecting your personal information.",
    topics: ["Recognizing suspicious emails", "Safe browsing habits", "Password security basics", "Two-factor authentication"],
    color: "from-green-500/20 to-green-600/5",
    borderColor: "hover:border-green-500/50",
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: "intermediate",
    icon: GraduationCap,
    title: "Intermediate",
    subtitle: "Building expertise",
    description: "For users with basic knowledge who want to deepen their understanding. Explore advanced phishing techniques and organizational security practices.",
    topics: ["Spear phishing analysis", "Social engineering tactics", "Email header analysis", "Incident reporting"],
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "hover:border-yellow-500/50",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: "advanced",
    icon: Rocket,
    title: "Advanced",
    subtitle: "Security professional",
    description: "Designed for IT professionals and security enthusiasts. Master AI-powered attack detection and learn enterprise-level defense strategies.",
    topics: ["AI threat detection", "Deepfake identification", "Enterprise security policies", "Threat intelligence"],
    color: "from-primary/20 to-primary/5",
    borderColor: "hover:border-primary",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
];

interface LevelSectionProps {
  onTakeQuiz: () => void;
}

const LevelSection = ({ onTakeQuiz }: LevelSectionProps) => {
  return (
    <section id="levels" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Choose Your <span className="text-primary">Learning Path</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-6">
            Whether you're just starting out or looking to master advanced techniques, 
            we have the right content for you.
          </p>
          <Button variant="heroOutline" onClick={onTakeQuiz}>
            Not sure? Take the quiz to find your level
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`group relative p-8 rounded-2xl border border-border bg-gradient-to-b ${level.color} ${level.borderColor} transition-all duration-500 hover:shadow-card`}
            >
              <div className={`w-14 h-14 rounded-xl ${level.bgColor} flex items-center justify-center mb-6`}>
                <level.icon className={`h-7 w-7 ${level.iconColor}`} />
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-display font-bold mb-1">{level.title}</h3>
                <p className="text-sm text-muted-foreground">{level.subtitle}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {level.description}
              </p>

              <div className="space-y-3 mb-8">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">What you'll learn</p>
                <ul className="space-y-2">
                  {level.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${level.iconColor.replace('text-', 'bg-')}`} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                Start Learning
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LevelSection;
