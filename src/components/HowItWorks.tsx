import { Card, CardContent } from "@/components/ui/card";
import { Terminal, FolderOpen, Zap, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Terminal,
      title: "Create Your App",
      command: "rext new my-app",
      description: "Scaffold a Rext app with a single command. Includes a Rust backend & JS frontend, no config necessary"
    },
    {
      number: "02", 
      icon: FolderOpen,
      title: "Build Your App",
      command: "rext add page",
      description: "Let Rext handle the busy work and planning, fill in the content and go"
    },
    {
      number: "03",
      icon: Zap,
      title: "Develop Fast",
      command: "rext dev",
      description: "Start your frontend and backend dev servers and see everything with a single command with hot-module reloads across the entire stack"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Deploy your app",
      command: "rext build release",
      description: "Build your rext app as a single, easy to deploy binary or container, with first-class support for deploying on affordable cloud infrastructure"
    }
  ];

  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Getting Started is Easy</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Rext makes development and releasing a breeze
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="relative">
              {/* Connection line - hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-border z-0" />
              )}
              
              <Card className="relative z-10 h-full hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-primary">
                      {step.number}
                    </div>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  
                  {/* Command */}
                  <div className="bg-muted/50 rounded-md p-3 mb-4">
                    <code className="text-sm font-mono text-primary">
                      {step.command}
                    </code>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
  