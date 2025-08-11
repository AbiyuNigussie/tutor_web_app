export default function CTA() {
  return (
    <section className="bg-blue-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
        <h3 className="text-3xl font-bold text-[#111]">
          Ready to Transform Your Organization?
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-[#555] text-lg">
          Partner with NEXUS to build high-performance teams, elevate
          leadership, and drive measurable business outcomes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#solutions"
            className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold"
          >
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
