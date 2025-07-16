export default function CTA() {
    return (
      <section className="text-center py-20 bg-gray-800 rounded-xl text-gray-100">
        <h2 className="text-4xl font-bold mb-6">Ready to try the next generation of full stack web development?</h2>
        <div className="space-x-4">
          <a href="#get-started" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700">Get Started</a>
          <a href="#docs" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700">Documentation</a>
          <a href="#community" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700">Community</a>
        </div>
        <p className="mt-6 text-lg">Built with the same passion, polish, and philosophy as the frameworks that inspired us. Let’s build the future of Rust web together!</p>
      </section>
    );
  }
  