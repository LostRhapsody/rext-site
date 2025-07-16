export default function Hero() {
    return (
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg mb-12">
        <h1 className="text-5xl font-bold mb-4">Build Modern Full Stack Apps. Rust Fast.</h1>
        <p className="text-xl mb-8">Create powerful, production-grade web apps using Rust and JavaScript with zero configuration.</p>
        <div className="space-x-4">
          <a href="#get-started" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">Get Started</a>
          <a href="#docs" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">Documentation</a>
          <a href="https://github.com/rextjs" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">Star on GitHub</a>
        </div>
      </section>
    );
  }
  