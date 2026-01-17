import { AlertTriangle, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alert badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-pulse-glow">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">New AI Threats Emerging Daily</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            <span className="text-gradient">Don't Get Caught</span>
            <br />
            <span className="text-primary">By AI Phishing</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-powered phishing attacks are 10x more convincing than traditional scams. 
            Learn to identify and protect yourself from the next generation of cyber threats.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Shield className="h-5 w-5" />
              Start Learning
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <Zap className="h-5 w-5" />
              Take the Quiz
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-card border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-1">300%</div>
              <div className="text-sm text-muted-foreground">Increase in AI Phishing</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-card border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-1">$4.5M</div>
              <div className="text-sm text-muted-foreground">Avg. Enterprise Loss</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-card border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-1">91%</div>
              <div className="text-sm text-muted-foreground">Start with Phishing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll to learn</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
