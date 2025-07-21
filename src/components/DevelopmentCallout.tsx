import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function DevelopmentCallout() {
  return (
    <section className="my-16">
      <Card className="border-orange-200/60 bg-orange-50/10 dark:border-orange-400/30 dark:bg-orange-500/10">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 text-center justify-center">
            <AlertTriangle className="h-5 w-5 text-orange-500 dark:text-orange-400 flex-shrink-0" />
            <p className="text-orange-900 dark:text-orange-100 font-medium">
              <strong>Notice:</strong> Rext is under heavy initial development and planning and is not ready for use.
              The features showcased on this site represent our planned capabilities and roadmap, and are not guaranteed.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}