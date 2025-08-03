
export default function WhoWeAre() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6" id="who-we-are">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Who We Are
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          <span className="font-medium text-gray-800">Hope Rise Volunteer</span> is a community of compassionate individuals united by a shared vision — to uplift, empower, and transform lives through service. We come from diverse backgrounds, but together, we build a future filled with hope and opportunity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="bg-white shadow-xl p-8 rounded-2xl border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To inspire and mobilize volunteers to create lasting change in our communities by supporting education, health, and social initiatives.
            </p>
          </div>

          <div className="bg-white shadow-xl p-8 rounded-2xl border-t-4 border-green-500 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            </div>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Compassion & Empathy</li>
              <li>Inclusivity & Diversity</li>
              <li>Integrity & Accountability</li>
              <li>Collaboration & Growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
