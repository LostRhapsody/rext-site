import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Heart, Shield, Users } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: Gauge,
      title: "Lightning Speed",
      description: "Rust's performance with modern JS ergonomics",
      highlight: "10x faster execution"
    },
    {
      icon: Heart,
      title: "Developer First",
      description: "All the batteries you expect, and more",
      highlight: "Zero configuration"
    },
    {
      icon: Shield,
      title: "End-to-End Power",
      description: "Best practices built in; scalability from day one",
      highlight: "Type-safe throughout"
    },
    {
      icon: Users,
      title: "Open Source",
      description: "Powered by a passionate community—yours to extend",
      highlight: "Community driven"
    }
  ];

  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Why Choose Rext.js?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The future of full-stack development is here
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {reason.description}
                </p>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {reason.highlight}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
  