import { Card, CardContent } from "@/components/ui/card";
import { 
  Download, 
  CloudUpload, 
  Image, 
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
      description: "Sane defaults to get rolling fast"
    },
    {
      icon: User,
      title: "Auth",
      description: "Simplify user management with secure authorization"
    },
    {
      icon: Code,
      title: "Type-safe",
      description: "End-to-End Type-Safety, zero surprises"
    },
    {
      icon: MemoryStick,
      title: "Memory-safe",
      description: "First-class memory-safety means no memory leaks and lean backends, getting you more performance for less"
    },
    {
      icon: Database,
      title: "Database",
      description: "Spin up MySQL, Postgresql, or Sqlite with your project and start building schema right away"
    },
    {
      icon: Download,
      title: "Intuitive data-fetching APIs",
      description: "Fetch data with APIs designed to be intuitive on the front and backend"
    },
    {
      icon: CloudUpload,
      title: "Seamless Deployment",
      description: "Easy deployment to the cloud and self-hosted servers"
    },
    {
      icon: Image,
      title: "Asset Optimization",
      description: "Optimize assets for lean packages when it's time to release"
    },
    {
      icon: Settings,
      title: "Middleware",
      description: "Powerful middleware thanks to Axum with pre-build, modular options available"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send emails with minimal set up, no more third-party email libraries"
    },
    {
      icon: Send,
      title: "Job Queue",
      description: "Queue up jobs to process in the background"
    },
    {
      icon: Clock,
      title: "Task Scheduling",
      description: "Schedule tasks fast, easy, and programmatically, no crons required"
    },
    {
      icon: Puzzle,
      title: "Modular",
      description: "Modular by default, with lots of first-class and community built modules planned"
    }
  ];

  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Features</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything built-in with first-class DX
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
  