import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, BookOpen, TestTube, Code, Heart, ArrowRight } from "lucide-react";

export default function Contribute() {
  const contributionAreas = [
    {
      icon: Palette,
      title: "Design",
      description: "Help shape Rext's visual identity and reach",
      tasks: ["Website design", "Brand development", "UI/UX feedback"],
      highlight: "Iconography, Identity, Branding"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Help make Rext easy and fun to learn",
      tasks: ["Writing guides", "API documentation", "Tutorial creation"],
      highlight: "Guides, Documentation, Tutorials"
    },
    {
      icon: TestTube,
      title: "Alpha Testing",
      description: "Test early Rext features before release",
      tasks: ["Feature testing", "Bug reporting", "Performance feedback", "Real-world usage"],
      highlight: "Early Access, Feedback"
    },
    {
      icon: Code,
      title: "Framework Development",
      description: "Build the Rext you want",
      tasks: ["Core framework", "Tooling", "Integrations"],
      highlight: "Core Library, TUI, CLI, Modules"
    }
  ];

  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
          <Heart className="h-4 w-4" />
          Rext needs community
        </div>
        <h2 className="text-5xl font-bold mb-6">Help Build Rext</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Rext is brand new and needs strong support to grow. Check out how you can contribute if Rext sounds like the missing piece of the Rust ecosystem you&apos;ve been waiting for.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {contributionAreas.map((area, index) => {
          const IconComponent = area.icon;
          return (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mt-1">
                      {area.highlight}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Ways to contribute:</h4>
                  <ul className="space-y-1">
                    {area.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Card className="inline-block bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to get involved?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Think Rust should power the web? Join a team enthusiastic about Rust and the modern web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 h-auto" disabled>
                <Heart className="mr-2 h-5 w-5" />
                Join Community (Coming Soon)
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto" disabled>
                View Roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}