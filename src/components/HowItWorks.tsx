export default function HowItWorks() {
    return (
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
        <ol className="list-decimal pl-5 space-y-6 max-w-4xl mx-auto text-gray-100">
          <li className="text-xl"><code>npm create rext-app</code>: Scaffold a full-stack app with a single command (includes ready-to-go Rust backend & JS frontend).</li>
          <li className="text-xl"><code>pages/</code> directory: Drop in <code>.rs</code> or <code>.tsx</code> files—Rext.js handles routing, API glue, data sharing.</li>
          <li className="text-xl">Hot reload: Live updates for both Rust and JS code on save.</li>
          <li className="text-xl">Automatic builds: Assets optimized, routes generated, APIs bound and types propagated.</li>
        </ol>
      </section>
    );
  }
  