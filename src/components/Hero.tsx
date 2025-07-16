"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  
  const command = "npm create rext@latest";
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Title, Subtitle, Button and Command */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
              Build Modern Full Stack Apps at the speed of Rust.
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Create powerful, production-grade web apps using Rust and JavaScript with zero configuration.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button size="lg" className="text-lg px-8 py-4 h-auto w-full">
              Get Started
            </Button>
            
            <div className="bg-card border rounded-lg p-4 flex items-center justify-between">
              <code className="text-sm font-mono text-muted-foreground">
                {command}
              </code>
              <Button
                size="sm"
                variant="outline"
                onClick={copyToClipboard}
                className="ml-4"
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Code Card */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono text-muted-foreground">
                main.rs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm font-mono text-foreground">
{`use rext::prelude::*;
// example code, not actual code
#[rext::main]
async fn main() {
    let app = App::new()
        .route("/", get(hello))
        .route("/api/users", get(get_users));
    
    app.serve("127.0.0.1:3000").await
}

async fn hello() -> &'static str {
    "Hello, Rext!"
}

async fn get_users() -> Json<Vec<User>> {
    Json(vec![
        User { id: 1, name: "Alice".to_string() },
        User { id: 2, name: "Bob".to_string() },
    ])
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
  