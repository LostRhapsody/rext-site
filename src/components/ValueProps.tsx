export default function ValueProps() {
    return (
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Value Propositions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-gray-800 rounded-xl shadow-xl text-gray-100">
            <h3 className="text-3xl font-semibold mb-6">Out-of-the-Box Productivity</h3>
            <ul className="list-disc pl-5 space-y-3 text-lg">
              <li>Zero Configuration: Start your project instantly.</li>
              <li>CLI & Codegen: Focus on features, not boilerplate.</li>
            </ul>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-xl text-gray-100">
            <h3 className="text-3xl font-semibold mb-6">Modern Stack, Rust Powered</h3>
            <ul className="list-disc pl-5 space-y-3 text-lg">
              <li>Rust Backend: Type-safe, scalable APIs.</li>
              <li>JS Frontend: Leverage React or Vue.</li>
              <li>Full Stack, One Command: Unified DX.</li>
            </ul>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-xl text-gray-100">
            <h3 className="text-3xl font-semibold mb-6">Best-in-Class Developer Experience</h3>
            <ul className="list-disc pl-5 space-y-3 text-lg">
              <li>Live Reload & HMR: Instant changes.</li>
              <li>Type-safe Endpoints: End-to-end safety.</li>
              <li>File-based Routing: Intuitive organization.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  