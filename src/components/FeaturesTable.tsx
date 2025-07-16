export default function FeaturesTable() {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Features</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 text-left font-semibold">What You Get</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-t">File-based Routing</td>
                <td className="py-3 px-4 border-t">Page structure matches your file structure</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t">Modular Data Fetching</td>
                <td className="py-3 px-4 border-t">Universal fetching for backend/frontend</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t">Rendering Modes</td>
                <td className="py-3 px-4 border-t">SSR, SSG, or client—your choice per page</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t">Seamless Deployment</td>
                <td className="py-3 px-4 border-t">Deploy anywhere, from edge to serverless</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t">Asset Optimization</td>
                <td className="py-3 px-4 border-t">Built-in image/font optimization</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t">Auto Imports & Type Safety</td>
                <td className="py-3 px-4 border-t">Minimal imports, instant type errors</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t">Built-in Middleware</td>
                <td className="py-3 px-4 border-t">Auth, logging, A/B—all first-class</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t">Plugin Ecosystem</td>
                <td className="py-3 px-4 border-t">Extend with ready-made modules</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  