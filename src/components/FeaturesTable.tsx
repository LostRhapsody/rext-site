export default function FeaturesTable() {
    return (
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Core Features</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="py-4 px-6 text-left font-semibold text-gray-100">Feature</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-100">What You Get</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">File-based Routing</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Page structure matches your file structure</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Modular Data Fetching</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Universal fetching for backend/frontend</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Rendering Modes</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">SSR, SSG, or client—your choice per page</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Seamless Deployment</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Deploy anywhere, from edge to serverless</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Asset Optimization</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Built-in image/font optimization</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Auto Imports & Type Safety</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Minimal imports, instant type errors</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Built-in Middleware</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Auth, logging, A/B—all first-class</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Plugin Ecosystem</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Extend with ready-made modules</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  