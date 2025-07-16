import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Layers, Sparkles, Terminal, Code, Rocket } from "lucide-react";

export default function ValueProps() {
  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Rext comes fully loaded</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The perfect blend of Rust's performance and modern web development practices
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
                  <p className="text-muted-foreground">Start your project instantly with sensible defaults and automatic setup.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">CLI & Codegen</h4>
                  <p className="text-muted-foreground">Focus on features, not boilerplate. Generate types, routes, and more automatically.</p>
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
                <p className="text-sm text-muted-foreground">Type-safe, blazingly fast APIs with memory safety.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">JS Frontend</h4>
                <p className="text-sm text-muted-foreground">Leverage React, Vue, or your favorite framework.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Unified DX</h4>
                <p className="text-sm text-muted-foreground">Full stack development with one command.</p>
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
                <p className="text-sm text-muted-foreground">Intuitive organization that scales.</p>
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
              <CardTitle className="text-2xl">Production Ready</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="h-full">
            <div className="grid md:grid-cols-3 gap-4 h-3/4 items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-1">10x</div>
                <div className="text-sm text-muted-foreground">Faster than Node.js</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-1">0</div>
                <div className="text-sm text-muted-foreground">Runtime errors</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-1">∞</div>
                <div className="text-sm text-muted-foreground">Scalability</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
  