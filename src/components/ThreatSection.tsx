import { Bot, Brain, Mail, MessageSquare, Target, Users } from "lucide-react";

const threats = [
  {
    icon: Bot,
    title: "AI-Generated Emails",
    description: "Attackers use AI to craft perfectly written, contextual emails that bypass traditional spam filters.",
  },
  {
    icon: Target,
    title: "Spear Phishing",
    description: "Highly personalized attacks targeting specific individuals using scraped personal data and AI analysis.",
  },
  {
    icon: MessageSquare,
    title: "Deepfake Voice Calls",
    description: "AI clones voices of executives and colleagues to authorize fraudulent transactions.",
  },
  {
    icon: Brain,
    title: "Social Engineering",
    description: "AI analyzes social media to create convincing personas and manipulation strategies.",
  },
  {
    icon: Users,
    title: "Business Email Compromise",
    description: "AI mimics communication styles to impersonate CEOs and authorize wire transfers.",
  },
  {
    icon: Mail,
    title: "Credential Harvesting",
    description: "Sophisticated fake login pages that perfectly replicate legitimate services.",
  },
];

const ThreatSection = () => {
  return (
    <section id="threats" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-primary">New Threat</span> Landscape
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI has revolutionized cyberattacks. Understanding these threats is your first line of defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {threats.map((threat, index) => (
            <div
              key={threat.title}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <threat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{threat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{threat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatSection;
