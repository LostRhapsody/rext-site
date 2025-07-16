export default function CTA() {
    return (
      <section className="text-center py-12 bg-blue-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to try the next generation of full stack web development?</h2>
        <div className="space-x-4">
          <a href="#get-started" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">Get Started</a>
          <a href="#docs" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">Documentation</a>
          <a href="#community" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">Community</a>
        </div>
        <p className="mt-4">Built with the same passion, polish, and philosophy as the frameworks that inspired us. Let’s build the future of Rust web together!</p>
      </section>
    );
  }
  