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
              Ready to build the future of Rust-based web development?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Get ready to be a part of a community of developers excited about building type-safe, memory-safe, and fast by default applications with Rext. 
              We're creating the ideal fusion of Rust&apos;s performance and modern web development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 h-auto" disabled>
                Coming Soon
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto" disabled>
                <BookOpen className="mr-2 h-5 w-5" />
                Documentation (Soon)
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto" disabled>
              <svg
                className="size-5"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"
                />
              </svg>
                GitHub (Soon)
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>Building community</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <svg
                className="size-5"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"
                />
              </svg>
                <span>Will be MIT licensed</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <BookOpen className="h-5 w-5" />
                <span>Docs in development</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          Being built with the same passion, polish, and philosophy as the frameworks that inspired us. 
          <br />
          <span className="text-primary font-medium">Let&apos;s build the future of Rust web together!</span>
        </p>
      </div>
    </section>
  );
}
  