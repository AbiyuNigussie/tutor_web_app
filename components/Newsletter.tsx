export default function Newsletter() {
  return (
    <section id="resources" className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-12">
        <div className="rounded-2xl border shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-[#111]">
              Stay Ahead with Insights
            </h4>
            <p className="mt-2 text-[#555]">
              Subscribe to our newsletter for leadership tips, training guides,
              and upcoming events.
            </p>
          </div>
          <form className="w-full md:w-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-80 px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="button"
              className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
