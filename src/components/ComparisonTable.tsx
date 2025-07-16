export default function ComparisonTable() {
    return (
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Rext.js vs Nuxt vs Next.js</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="py-4 px-6 text-left font-semibold text-gray-100"></th>
                <th className="py-4 px-6 text-left font-semibold text-gray-100">Rext.js</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-100">Nuxt</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-100">Next.js</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">Language</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Rust + JS</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">JavaScript</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">JavaScript</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">Type Safety</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">End-to-end</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">With TS</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">With TS</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">Backend</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Rust-native</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Node/Vue</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Node/React</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">CLI/CodeGen</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">SSR/SSG</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">Routing</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">File-based</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">File-based</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">File-based</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">Extensibility</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Plugins/Modules</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Modules</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Plugins</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">Dev Experience</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Instant reload</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">HMR</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">HMR</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100 font-medium">Edge Deploy</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
                <td className="py-4 px-6 border-t border-gray-700 text-gray-100">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  