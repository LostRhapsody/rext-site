export default function HowItWorks() {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <ol className="list-decimal pl-5 space-y-4 max-w-3xl mx-auto">
          <li className="text-lg"><code>npm create rext-app</code>: Scaffold a full-stack app with a single command (includes ready-to-go Rust backend & JS frontend).</li>
          <li className="text-lg"><code>pages/</code> directory: Drop in <code>.rs</code> or <code>.tsx</code> files—Rext.js handles routing, API glue, data sharing.</li>
          <li className="text-lg">Hot reload: Live updates for both Rust and JS code on save.</li>
          <li className="text-lg">Automatic builds: Assets optimized, routes generated, APIs bound and types propagated.</li>
        </ol>
      </section>
    );
  }
  