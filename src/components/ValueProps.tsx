export default function ValueProps() {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Value Propositions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Out-of-the-Box Productivity</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zero Configuration: Start your project instantly.</li>
              <li>CLI & Codegen: Focus on features, not boilerplate.</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Modern Stack, Rust Powered</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rust Backend: Type-safe, scalable APIs.</li>
              <li>JS Frontend: Leverage React or Vue.</li>
              <li>Full Stack, One Command: Unified DX.</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Best-in-Class Developer Experience</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Live Reload & HMR: Instant changes.</li>
              <li>Type-safe Endpoints: End-to-end safety.</li>
              <li>File-based Routing: Intuitive organization.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  