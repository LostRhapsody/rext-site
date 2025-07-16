import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function DevelopmentCallout() {
  return (
    <section className="my-16">
      <Card className="border-amber-200/60 bg-amber-50/50 dark:border-amber-800/60 dark:bg-amber-950/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 text-center justify-center">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <p className="text-amber-800 dark:text-amber-200 font-medium">
              <strong>Development Notice:</strong> Rext is under heavy initial development and planning and is not ready for use.
              The features showcased on this site represent our planned capabilities and roadmap.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
} 