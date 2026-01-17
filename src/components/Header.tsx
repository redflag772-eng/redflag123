import { Flag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Flag className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 blur-lg bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Red<span className="text-primary">Flag</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#threats" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Threats
          </a>
          <a href="#levels" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Levels
          </a>
          <a href="#quiz" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Find Your Level
          </a>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <a href="#threats" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Threats
            </a>
            <a href="#levels" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Levels
            </a>
            <a href="#quiz" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Find Your Level
            </a>
            <Button variant="hero" className="w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
