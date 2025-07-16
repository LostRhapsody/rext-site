import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, BookOpen, Users } from "lucide-react";

export default function CTA() {
  return (
    <section className="mt-40">
      <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              Ready to build the future?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join developers who are already building blazingly fast, type-safe applications with Rext.js. 
              Experience the perfect fusion of Rust's performance and modern web development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                <BookOpen className="mr-2 h-5 w-5" />
                Documentation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>Growing community</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Github className="h-5 w-5" />
                <span>MIT licensed</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <BookOpen className="h-5 w-5" />
                <span>Comprehensive docs</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          Built with the same passion, polish, and philosophy as the frameworks that inspired us. 
          <br />
          <span className="text-primary font-medium">Let's build the future of Rust web together!</span>
        </p>
      </div>
    </section>
  );
}
  