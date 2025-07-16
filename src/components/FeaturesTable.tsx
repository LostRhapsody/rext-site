import { Card, CardContent } from "@/components/ui/card";
import { 
  FolderTree, 
  Download, 
  Monitor, 
  CloudUpload, 
  Image, 
  Shield, 
  Settings, 
  Puzzle,
  User,
  Database,
  Mail,
  Clock,
  Send,
  Code,
  MemoryStick
} from "lucide-react";

export default function FeaturesTable() {
  const features = [
    {
      icon: Settings,
      title:"Zero Configuration",
      description: "No need to configure anything, just start building"
    },
    {
      icon: User,
      title: "Auth",
      description: "Built-in authentication and authorization with JWT and OAuth"
    },
    {
      icon: Code,
      title: "Type-safe",
      description: "Type-safe from the ground up"
    },
    {
      icon: MemoryStick,
      title: "Memory-safe",
      description: "Memory-safe from the ground up"
    },
    {
      icon: Database,
      title: "Database Support",
      description: "First-class support for databases"
    },
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
      description: "Easy deployment to the cloud and self-hosted servers"
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
      title: "Middleware",
      description: "Auth, logging, A/B—all first-class"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Built-in support for sending emails"
    },
    {
      icon: Send,
      title: "Job Queue",
      description: "Built-in support for job queuing"
    },
    {
      icon: Clock,
      title: "Task Scheduling",
      description: "Built-in support for scheduling tasks"
    },
    {
      icon: Puzzle,
      title: "Modular",
      description: "Extend with ready-made modules"
    }
  ];

  return (
    <section className="my-40">
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
            <Card
              key={index}
              className="border-0 bg-transparent hover:bg-card/50 transition-colors duration-200"
            >
              <CardContent className="p-6">
                {/* Title on top, full width */}
                <h3 className="font-semibold mb-4 text-lg text-center">{feature.title}</h3>
                {/* Responsive icon/description layout */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center">
                  {/* Icon: centered below title on mobile, left of description on sm+ */}
                  <div className="flex-shrink-0 p-4 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 sm:mb-0">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center sm:text-left">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
  