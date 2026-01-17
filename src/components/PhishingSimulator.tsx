import { useState } from "react";
import { X, Mail, AlertTriangle, CheckCircle, Shield, Clock, Award, ChevronRight, RotateCcw, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface EmailScenario {
  id: number;
  difficulty: "easy" | "medium" | "hard";
  sender: {
    name: string;
    email: string;
  };
  subject: string;
  body: string;
  timestamp: string;
  isPhishing: boolean;
  redFlags: string[];
  explanation: string;
}

const emailScenarios: EmailScenario[] = [
  // Easy scenarios
  {
    id: 1,
    difficulty: "easy",
    sender: {
      name: "PayPaI Security",
      email: "security@paypa1-alerts.com"
    },
    subject: "URGENT: Your account has been compromised!!!",
    body: `Dear Valued Customer,

We have detected unauthorized access to your account. Your account will be SUSPENDED within 24 hours unless you verify your identity immediately.

Click the link below to secure your account:
🔗 www.paypa1-secure-verify.com/login

WARNING: Failure to act will result in permanent account closure.

Best regards,
PayPaI Security Team`,
    timestamp: "Today, 3:45 AM",
    isPhishing: true,
    redFlags: [
      "Sender email uses '1' instead of 'l' in PayPal",
      "Generic greeting 'Dear Valued Customer'",
      "Urgency and threats to create panic",
      "Suspicious link domain doesn't match PayPal",
      "Sent at unusual time (3:45 AM)",
      "Excessive punctuation and capitalization"
    ],
    explanation: "This is a classic phishing attempt using urgency and fear tactics. The misspelled sender address and fake domain are major red flags."
  },
  {
    id: 2,
    difficulty: "easy",
    sender: {
      name: "Amazon Customer Service",
      email: "no-reply@amazon.com"
    },
    subject: "Your order #302-4521879-6543210 has shipped",
    body: `Hello Sarah,

Great news! Your order has shipped and is on its way.

Order Details:
• Wireless Bluetooth Headphones
• Estimated delivery: Friday, January 19

Track your package:
📦 Track on Amazon

You can view your complete order history in Your Orders.

Thank you for shopping with us!
Amazon Customer Service`,
    timestamp: "Today, 2:30 PM",
    isPhishing: false,
    redFlags: [],
    explanation: "This is a legitimate Amazon shipping notification. The email comes from a verified Amazon domain, uses personalized greeting, and doesn't ask for sensitive information."
  },
  // Medium scenarios
  {
    id: 3,
    difficulty: "medium",
    sender: {
      name: "IT Department",
      email: "it-support@company-helpdesk.net"
    },
    subject: "Password Expiry Notice - Action Required",
    body: `Hello,

Your corporate email password will expire in 3 days. To avoid losing access to your email and company resources, please update your password now.

Click here to update your password:
→ https://company-helpdesk.net/password-reset

If you have any questions, contact the IT Help Desk.

Best regards,
IT Support Team
Your Company Name`,
    timestamp: "Yesterday, 9:15 AM",
    isPhishing: true,
    redFlags: [
      "External domain posing as internal IT",
      "Generic 'Your Company Name' placeholder",
      "Link doesn't match official company domain",
      "No specific contact information provided",
      "Vague sender without specific name"
    ],
    explanation: "This is a spear phishing attack targeting corporate employees. Real IT departments use internal domains and typically include specific contact details."
  },
  {
    id: 4,
    difficulty: "medium",
    sender: {
      name: "Netflix",
      email: "info@mailer.netflix.com"
    },
    subject: "New sign-in to your Netflix account",
    body: `Hi Michael,

We noticed a new sign-in to your Netflix account.

Device: Chrome on Windows
Location: New York, United States
Time: January 17, 2025 at 8:42 PM EST

If this was you, you can ignore this email.

If this wasn't you, please secure your account by changing your password in your Account Settings.

Thanks,
The Netflix Team

This email was sent to michael.johnson@email.com`,
    timestamp: "Yesterday, 8:45 PM",
    isPhishing: false,
    redFlags: [],
    explanation: "This is a legitimate security notification from Netflix. It uses a verified Netflix subdomain, includes specific details, and doesn't demand immediate action or contain suspicious links."
  },
  {
    id: 5,
    difficulty: "medium",
    sender: {
      name: "Sarah Mitchell",
      email: "s.mitchell.ceo@gmail.com"
    },
    subject: "Quick favor needed - urgent",
    body: `Hi,

I'm in a meeting right now and can't make a call. I need you to purchase some gift cards for our client appreciation event.

Please buy 5x $200 Amazon gift cards and send me the codes via email. I'll reimburse you by end of day.

This is time-sensitive, please handle ASAP.

Thanks,
Sarah Mitchell
CEO`,
    timestamp: "Today, 11:30 AM",
    isPhishing: true,
    redFlags: [
      "CEO using personal Gmail instead of corporate email",
      "Unusual request for gift cards",
      "Creates urgency to prevent verification",
      "Asks to send codes via email (irreversible)",
      "Claims to be unavailable for verification call"
    ],
    explanation: "This is a CEO fraud/Business Email Compromise (BEC) attack. Attackers impersonate executives to trick employees into making unauthorized purchases or transfers."
  },
  // Hard scenarios
  {
    id: 6,
    difficulty: "hard",
    sender: {
      name: "DocuSign",
      email: "dse_na4@docusign.net"
    },
    subject: "Complete your signature: Contract_Amendment_2025.pdf",
    body: `Hello,

John Richardson has sent you a document to review and sign.

Document: Contract Amendment - Q1 2025 Terms
Sender: John Richardson (j.richardson@acmecorp.com)

REVIEW DOCUMENT

Please review and sign by January 20, 2025.

DocuSign - The fastest way to get a signature.

Questions? Contact the sender directly.
This message was sent by DocuSign.`,
    timestamp: "Today, 10:15 AM",
    isPhishing: true,
    redFlags: [
      "Generic greeting instead of recipient's name",
      "Sender's company (acmecorp) may not be a known contact",
      "No preview of document contents",
      "Pressure with specific deadline",
      "Should verify with sender through separate channel"
    ],
    explanation: "This sophisticated phishing mimics DocuSign's format. While the domain looks legitimate, always verify unexpected document requests directly with the sender through a separate communication channel."
  },
  {
    id: 7,
    difficulty: "hard",
    sender: {
      name: "LinkedIn",
      email: "messages-noreply@linkedin.com"
    },
    subject: "David Chen sent you a message",
    body: `Hi Jennifer,

David Chen sent you a new message:

"Hi Jennifer, I came across your profile and was impressed by your work at TechStart Inc. We're hiring for a Senior Product Manager role that seems like a perfect fit. Would love to chat about the opportunity. Let me know if you're interested!"

View David's full message and profile on LinkedIn

You received this email because you have messaging notifications enabled.
Unsubscribe | Help

LinkedIn Corporation, 1000 W Maude Ave, Sunnyvale, CA 94085`,
    timestamp: "Yesterday, 4:22 PM",
    isPhishing: false,
    redFlags: [],
    explanation: "This is a legitimate LinkedIn message notification. It uses the correct LinkedIn domain, includes the recipient's real name and employer, and has proper unsubscribe options and company address."
  },
  {
    id: 8,
    difficulty: "hard",
    sender: {
      name: "Microsoft 365",
      email: "no-reply@microsoft365.com"
    },
    subject: "Action required: Verify your account to avoid service interruption",
    body: `Dear Administrator,

We've detected that your Microsoft 365 subscription requires verification. To ensure uninterrupted access to your services, please complete the verification process.

What you need to do:
1. Click the verification link below
2. Sign in with your Microsoft account
3. Confirm your billing information

→ Verify Your Account

If you don't complete verification within 48 hours, some features may become unavailable.

Microsoft 365 Team
Microsoft Corporation

Privacy Statement | Microsoft 365 Admin Center`,
    timestamp: "Today, 7:30 AM",
    isPhishing: true,
    redFlags: [
      "Domain 'microsoft365.com' is not official (should be microsoft.com)",
      "Generic 'Dear Administrator' greeting",
      "Requests billing information via email link",
      "Threat of service interruption",
      "Legitimate Microsoft emails include account-specific details"
    ],
    explanation: "This is a convincing phishing email targeting IT administrators. Microsoft never asks users to verify billing information through email links. Always access account settings directly through office.com."
  }
];

interface PhishingSimulatorProps {
  onClose: () => void;
}

const PhishingSimulator = ({ onClose }: PhishingSimulatorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState<{ correct: boolean; scenario: EmailScenario }[]>([]);

  const currentEmail = emailScenarios[currentIndex];
  const progress = ((currentIndex + (showFeedback ? 1 : 0)) / emailScenarios.length) * 100;

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === currentEmail.isPhishing;
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    if (isCorrect) {
      const points = currentEmail.difficulty === "easy" ? 10 : currentEmail.difficulty === "medium" ? 20 : 30;
      setScore(prev => prev + points + (streak * 5));
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > maxStreak) setMaxStreak(newStreak);
        return newStreak;
      });
    } else {
      setStreak(0);
    }
    
    setAnswers(prev => [...prev, { correct: isCorrect, scenario: currentEmail }]);
  };

  const handleNext = () => {
    if (currentIndex < emailScenarios.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowFeedback(false);
      setSelectedAnswer(null);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsComplete(false);
    setAnswers([]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-400 bg-green-500/10 border-green-500/30";
      case "medium": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      case "hard": return "text-red-400 bg-red-500/10 border-red-500/30";
      default: return "";
    }
  };

  const getPerformanceLevel = () => {
    const percentage = (score / (emailScenarios.length * 25)) * 100;
    if (percentage >= 90) return { level: "Expert", color: "text-green-400", message: "Outstanding! You're a phishing detection expert." };
    if (percentage >= 70) return { level: "Advanced", color: "text-blue-400", message: "Great job! You can spot most phishing attempts." };
    if (percentage >= 50) return { level: "Intermediate", color: "text-yellow-400", message: "Good effort! Keep practicing to improve." };
    return { level: "Beginner", color: "text-red-400", message: "Keep learning! Practice makes perfect." };
  };

  if (isComplete) {
    const performance = getPerformanceLevel();
    const correctCount = answers.filter(a => a.correct).length;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md overflow-y-auto">
        <div className="w-full max-w-2xl my-8">
          <div className="glass-card rounded-2xl border border-border/50 p-8 animate-scale-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-2">Training Complete!</h2>
              <p className="text-muted-foreground">{performance.message}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-card/50 rounded-xl p-4 text-center border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">{score}</div>
                <div className="text-sm text-muted-foreground">Total Score</div>
              </div>
              <div className="bg-card/50 rounded-xl p-4 text-center border border-border/50">
                <div className="text-3xl font-bold text-foreground mb-1">{correctCount}/{emailScenarios.length}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="bg-card/50 rounded-xl p-4 text-center border border-border/50">
                <div className="text-3xl font-bold text-yellow-400 mb-1">{maxStreak}</div>
                <div className="text-sm text-muted-foreground">Best Streak</div>
              </div>
            </div>

            <div className="bg-card/30 rounded-xl p-6 border border-border/50 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-semibold">Your Level:</span>
                <span className={`font-bold ${performance.color}`}>{performance.level}</span>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-3">Results by difficulty:</p>
                {["easy", "medium", "hard"].map(diff => {
                  const diffAnswers = answers.filter(a => a.scenario.difficulty === diff);
                  const diffCorrect = diffAnswers.filter(a => a.correct).length;
                  return (
                    <div key={diff} className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border capitalize ${getDifficultyColor(diff)}`}>
                        {diff}
                      </span>
                      <Progress value={(diffCorrect / diffAnswers.length) * 100} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground w-12">{diffCorrect}/{diffAnswers.length}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleRestart} variant="outline" className="flex-1 gap-2">
                <RotateCcw className="w-4 h-4" />
                Try Again
              </Button>
              <Button onClick={onClose} className="flex-1 bg-primary hover:bg-primary/90">
                Done
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-4xl my-8">
        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="p-6 border-b border-border/50 bg-card/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg">Phishing Simulator</h2>
                  <p className="text-sm text-muted-foreground">Email {currentIndex + 1} of {emailScenarios.length}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-6">
              <Progress value={progress} className="flex-1 h-2" />
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium">{score}</span>
                </div>
                {streak > 0 && (
                  <div className="flex items-center gap-1 text-green-400">
                    <span className="text-xs">🔥</span>
                    <span className="font-medium">{streak}x streak</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Email Display */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border capitalize ${getDifficultyColor(currentEmail.difficulty)}`}>
                {currentEmail.difficulty}
              </span>
            </div>

            <div className="bg-card/80 rounded-xl border border-border/50 overflow-hidden mb-6">
              {/* Email Header */}
              <div className="p-4 border-b border-border/50 bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <span className="font-semibold truncate">{currentEmail.sender.name}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Clock className="w-3 h-3" />
                        {currentEmail.timestamp}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground truncate">{currentEmail.sender.email}</div>
                    <div className="text-sm font-medium mt-2">{currentEmail.subject}</div>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="p-6">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/90">
                  {currentEmail.body}
                </pre>
              </div>
            </div>

            {/* Answer Buttons or Feedback */}
            {!showFeedback ? (
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => handleAnswer(true)}
                  variant="outline"
                  className="h-16 text-lg border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400"
                >
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Phishing
                </Button>
                <Button
                  onClick={() => handleAnswer(false)}
                  variant="outline"
                  className="h-16 text-lg border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Legitimate
                </Button>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                {/* Result Banner */}
                <div className={`p-4 rounded-xl border ${
                  selectedAnswer === currentEmail.isPhishing 
                    ? "bg-green-500/10 border-green-500/30" 
                    : "bg-red-500/10 border-red-500/30"
                }`}>
                  <div className="flex items-center gap-3">
                    {selectedAnswer === currentEmail.isPhishing ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        <div>
                          <div className="font-semibold text-green-400">Correct!</div>
                          <div className="text-sm text-muted-foreground">
                            This email is {currentEmail.isPhishing ? "a phishing attempt" : "legitimate"}.
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <X className="w-6 h-6 text-red-400" />
                        <div>
                          <div className="font-semibold text-red-400">Incorrect</div>
                          <div className="text-sm text-muted-foreground">
                            This email is actually {currentEmail.isPhishing ? "a phishing attempt" : "legitimate"}.
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-card/50 rounded-xl border border-border/50 p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Explanation
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{currentEmail.explanation}</p>
                  
                  {currentEmail.redFlags.length > 0 && (
                    <>
                      <h5 className="font-medium text-sm mb-2 text-red-400">🚩 Red Flags:</h5>
                      <ul className="space-y-1">
                        {currentEmail.redFlags.map((flag, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-red-400 mt-1">•</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Next Button */}
                <Button 
                  onClick={handleNext} 
                  className="w-full h-12 bg-primary hover:bg-primary/90"
                >
                  {currentIndex < emailScenarios.length - 1 ? (
                    <>
                      Next Email
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    "See Results"
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhishingSimulator;
