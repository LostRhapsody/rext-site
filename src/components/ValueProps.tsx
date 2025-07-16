import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Layers, Sparkles, Terminal, Code, Rocket } from "lucide-react";

export default function ValueProps() {
  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Rext will come fully loaded</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're designing the perfect blend of Rust&apos;s performance and modern web development practices
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {/* Large card spanning 2 columns on larger screens */}
        <Card className="lg:col-span-2 h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Out-of-the-Box Productivity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Zero Configuration</h4>
                  <p className="text-muted-foreground">You'll be able to start projects instantly with sensible defaults and automatic setup.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">CLI & Codegen</h4>
                  <p className="text-muted-foreground">Focus on features, not boilerplate. We'll generate types, routes, and more automatically.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tall card */}
        <Card className="h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Modern Stack</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Rust Backend</h4>
                <p className="text-sm text-muted-foreground">Type-safe, Memory-safe, Blazing fast APIs.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">JS Frontend</h4>
                <p className="text-sm text-muted-foreground">Support React, Vue, and your favorite frameworks.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Unified DX</h4>
                <p className="text-sm text-muted-foreground">Full stack development with one utility.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medium card */}
        <Card className="h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Developer Experience</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Live Reload & HMR</h4>
                <p className="text-sm text-muted-foreground">Instant changes across your entire stack.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Type-safe Endpoints</h4>
                <p className="text-sm text-muted-foreground">End-to-end type safety from database to UI.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">File-based Routing</h4>
                <p className="text-sm text-muted-foreground">Intuitive organization that will scale with your project.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wide card spanning 2 columns */}
        <Card className="lg:col-span-2 h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Planned for Production</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="h-full">
            <div className="grid md:grid-cols-3 gap-4 h-3/4 items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-1">⚡</div>
                <div className="text-sm text-muted-foreground">Built for high performance with Rust and Axum</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-1">🛡️</div>
                <div className="text-sm text-muted-foreground">Type safety and reliability are core priorities</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-1">🌐</div>
                <div className="text-sm text-muted-foreground">Designed to scale with your project and team</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
  