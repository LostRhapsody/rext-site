import { Card, CardContent } from "@/components/ui/card";
import { Terminal, FolderOpen, Zap, Cog } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Terminal,
      title: "Create Your App",
      command: "npm create rext@latest",
      description: "Scaffold a full-stack app with a single command. Includes ready-to-go Rust backend & JS frontend with zero configuration."
    },
    {
      number: "02", 
      icon: FolderOpen,
      title: "Build Your Pages",
      command: "pages/",
      description: "Drop in .rs or .tsx files—Rext handles routing, API glue, data sharing. Your file structure becomes your route structure."
    },
    {
      number: "03",
      icon: Zap,
      title: "Develop Fast",
      command: "npm run dev",
      description: "Hot reload with live updates for both Rust and JS code on save. See changes instantly across your entire stack."
    },
    {
      number: "04",
      icon: Cog,
      title: "Deploy Anywhere",
      command: "npm run build",
      description: "Automatic builds with assets optimized, routes generated, APIs bound and types propagated. Ready for production."
    }
  ];

  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">How It Works</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From zero to production in four simple steps
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
                    <div className="text-3xl font-bold text-primary/20">
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
  