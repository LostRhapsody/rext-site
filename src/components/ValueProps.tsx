import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Layers, Sparkles, Terminal, Code, Rocket } from "lucide-react";

export default function ValueProps() {
  return (
    <section className="my-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Rext offers instant productivity</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Modern web development with all the benefits of Rust.
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
                  <p className="text-muted-foreground">Start projects instantly with sane but opinionated defaults</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">CLI & Codegen</h4>
                  <p className="text-muted-foreground">Utilize developer tooling to automate away the noise and generate routes, types, etc</p>
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
              <CardTitle className="text-xl">A Modern, Type-Safe and Memory-Safe Stack</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Rust Backend</h4>
                <p className="text-sm text-muted-foreground">Type-safe and Memory-safe APIs with no sacrifices</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Flexible Frontend</h4>
                <p className="text-sm text-muted-foreground">Vue, React, HTML-over-the-wire, or bring your own</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Unified DX</h4>
                <p className="text-sm text-muted-foreground">Manage your enter stack, end-to-end, with a single tool</p>
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
              <CardTitle className="text-xl">Developer Experience is our #1 Priority</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Live Reload & HMR</h4>
                <p className="text-sm text-muted-foreground">Just save a file to see changes across your whole stack during development</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">End-to-End Type-Safety</h4>
                <p className="text-sm text-muted-foreground">Type safety from your database queries all the way to your frontend</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Intuitive Project Structure</h4>
                <p className="text-sm text-muted-foreground">A bespoke layered architecture that makes it easy to build fullstack</p>
              </div>
              <em className="text-sm text-muted-foreground">Note: These are planned features</em>
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
              <CardTitle className="text-2xl">Ready for Production</CardTitle>
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
                <div className="text-sm text-muted-foreground">Maximum uptime and security are top priorities</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-1">🌐</div>
                <div className="text-sm text-muted-foreground">A scalable, easy to deploy architecture</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
  