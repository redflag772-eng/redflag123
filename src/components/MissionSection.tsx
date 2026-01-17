import { Shield, BookOpen, Target, Users } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Users,
      title: "For Everyone",
      description: "We believe cybersecurity education should be accessible to all, regardless of technical background."
    },
    {
      icon: BookOpen,
      title: "Easy to Understand",
      description: "Complex threats explained simply. No jargon, no confusion—just clear, actionable knowledge."
    },
    {
      icon: Target,
      title: "Level-Based Learning",
      description: "Progress at your own pace. From basics to advanced techniques, we meet you where you are."
    },
    {
      icon: Shield,
      title: "Self Protection",
      description: "Empower yourself with the skills to identify and defend against AI-powered threats independently."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Protecting People from the{" "}
            <span className="text-gradient">AI Threat Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            As AI-powered attacks grow more sophisticated, traditional security awareness isn't enough. 
            We founded RedFlag with a simple mission: <span className="text-foreground font-semibold">make everyone capable of defending themselves</span> against 
            the next generation of cyber threats. No technical degree required.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-16 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Why We Started <span className="text-primary">RedFlag</span>
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2024, AI-generated phishing attacks increased by <span className="text-foreground font-semibold">1,265%</span>. 
                  These aren't your typical scam emails—they're personalized, convincing, and nearly undetectable.
                </p>
                <p>
                  We saw friends, family, and colleagues fall victim to attacks that traditional training never prepared them for. 
                  That's when we knew something had to change.
                </p>
                <p>
                  <span className="text-foreground font-semibold">Everyone deserves to feel safe online.</span> That's not just our slogan—it's our promise.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl" />
              <div className="relative bg-card/50 rounded-2xl p-8 border border-border/50">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">of people can't identify AI-generated phishing</p>
                </div>
                <div className="h-px bg-border/50 my-6" />
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-primary mb-2">15min</div>
                  <p className="text-muted-foreground">average time to complete a lesson</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card/30 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
