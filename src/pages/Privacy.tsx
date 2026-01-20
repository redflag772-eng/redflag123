import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Ban, Heart, Globe } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy isn't just important to us — it's sacred. Here's our commitment to you.
            </p>
          </div>

          {/* Main Statement */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Promise to You</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At RedFlag, we believe that privacy is a fundamental human right. In a world where data 
                  has become currency, we refuse to participate in the exploitation of your personal information.
                </p>
              </div>
            </div>
          </div>

          {/* We Will Never Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Ban className="w-6 h-6 text-primary" />
              We Will Never Sell Your Data To:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "North Korea", flag: "🇰🇵" },
                { name: "The United States of America", flag: "🇺🇸" },
                { name: "Belarus", flag: "🇧🇾" },
                { name: "Any other dictatorship", flag: "🚫" },
                { name: "Data brokers", flag: "💰" },
                { name: "Advertisers", flag: "📢" },
                { name: "Social media companies", flag: "📱" },
                { name: "Anyone. Period.", flag: "✋" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
                >
                  <span className="text-2xl">{item.flag}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Principles */}
          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary" />
              Our Privacy Principles
            </h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Transparency
                </h3>
                <p className="text-muted-foreground">
                  We collect only what we need to provide our services. This includes your email address 
                  for account access and your course progress to personalize your learning experience. 
                  That's it. No hidden tracking, no behavioral profiling, no selling your browsing habits.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Security
                </h3>
                <p className="text-muted-foreground">
                  We use industry-standard encryption to protect your data both in transit and at rest. 
                  We regularly audit our security practices and never store sensitive information 
                  longer than necessary.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Your Rights
                </h3>
                <p className="text-muted-foreground">
                  You have the right to access, modify, or delete your data at any time. Just reach out 
                  to us, and we'll make it happen. No questions asked, no hoops to jump through. 
                  Your data belongs to you.
                </p>
              </div>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
            <p className="text-muted-foreground mb-4">
              We teach people how to protect themselves from digital threats. It would be hypocritical 
              of us to then turn around and exploit your data for profit. Our business model is simple: 
              you pay for courses, and we provide excellent education. That's the transaction. 
              Your data is not part of the deal.
            </p>
            <p className="text-muted-foreground">
              In an age of surveillance capitalism, we choose a different path. We believe that 
              respecting your privacy is not just good ethics — it's good business. Trust is our 
              foundation, and we won't compromise it for short-term gains.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center p-8 bg-primary/10 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Questions About Your Privacy?</h3>
            <p className="text-muted-foreground mb-4">
              We're always happy to discuss our privacy practices with you.
            </p>
            <a 
              href="/contact" 
              className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4"
            >
              Contact Us →
            </a>
          </div>

          {/* Last Updated */}
          <p className="text-center text-sm text-muted-foreground mt-12">
            Last updated: January 2026
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
