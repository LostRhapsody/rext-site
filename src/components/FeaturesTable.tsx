import { Card, CardContent } from "@/components/ui/card";
import { 
  FolderTree, 
  Download, 
  Monitor, 
  CloudUpload, 
  Image, 
  Shield, 
  Settings, 
  Puzzle 
} from "lucide-react";

export default function FeaturesTable() {
  const features = [
    {
      icon: FolderTree,
      title: "File-based Routing",
      description: "Page structure matches your file structure"
    },
    {
      icon: Download,
      title: "Modular Data Fetching",
      description: "Universal fetching for backend/frontend"
    },
    {
      icon: Monitor,
      title: "Rendering Modes",
      description: "SSR, SSG, or client—your choice per page"
    },
    {
      icon: CloudUpload,
      title: "Seamless Deployment",
      description: "Deploy anywhere, from edge to serverless"
    },
    {
      icon: Image,
      title: "Asset Optimization",
      description: "Built-in image/font optimization"
    },
    {
      icon: Shield,
      title: "Auto Imports & Type Safety",
      description: "Minimal imports, instant type errors"
    },
    {
      icon: Settings,
      title: "Built-in Middleware",
      description: "Auth, logging, A/B—all first-class"
    },
    {
      icon: Puzzle,
      title: "Plugin Ecosystem",
      description: "Extend with ready-made modules"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Core Features</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to build modern web applications, built-in
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card key={index} className="border-0 bg-transparent hover:bg-card/50 transition-colors duration-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
  