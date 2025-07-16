export default function ComparisonTable() {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Rext.js vs Nuxt vs Next.js</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left font-semibold"></th>
                <th className="py-3 px-4 text-left font-semibold">Rext.js</th>
                <th className="py-3 px-4 text-left font-semibold">Nuxt</th>
                <th className="py-3 px-4 text-left font-semibold">Next.js</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-t font-medium">Language</td>
                <td className="py-3 px-4 border-t">Rust + JS</td>
                <td className="py-3 px-4 border-t">JavaScript</td>
                <td className="py-3 px-4 border-t">JavaScript</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">Type Safety</td>
                <td className="py-3 px-4 border-t">End-to-end</td>
                <td className="py-3 px-4 border-t">With TS</td>
                <td className="py-3 px-4 border-t">With TS</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">Backend</td>
                <td className="py-3 px-4 border-t">Rust-native</td>
                <td className="py-3 px-4 border-t">Node/Vue</td>
                <td className="py-3 px-4 border-t">Node/React</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">CLI/CodeGen</td>
                <td className="py-3 px-4 border-t">Yes</td>
                <td className="py-3 px-4 border-t">Yes</td>
                <td className="py-3 px-4 border-t">Yes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">SSR/SSG</td>
                <td className="py-3 px-4 border-t">Yes</td>
                <td className="py-3 px-4 border-t">Yes</td>
                <td className="py-3 px-4 border-t">Yes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">Routing</td>
                <td className="py-3 px-4 border-t">File-based</td>
                <td className="py-3 px-4 border-t">File-based</td>
                <td className="py-3 px-4 border-t">File-based</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">Extensibility</td>
                <td className="py-3 px-4 border-t">Plugins/Modules</td>
                <td className="py-3 px-4 border-t">Modules</td>
                <td className="py-3 px-4 border-t">Plugins</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">Dev Experience</td>
                <td className="py-3 px-4 border-t">Instant reload</td>
                <td className="py-3 px-4 border-t">HMR</td>
                <td className="py-3 px-4 border-t">HMR</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-t font-medium">Edge Deploy</td>
                <td className="py-3 px-4 border-t">Yes</td>
                <td className="py-3 px-4 border-t">Yes</td>
                <td className="py-3 px-4 border-t">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  