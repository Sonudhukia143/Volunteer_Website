export default function WhoWeAre() {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-100 via-gray-50 to-white py-24 px-6"
      id="who-we-are"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Who We Are
        </h2>
        <h5 className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          <span className="font-semibold text-gray-900">Hope Rise Volunteer</span> is a collective of passionate individuals dedicated to sparking positive change. United by empathy, we rise beyond differences to nurture communities with purpose, compassion, and action.
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left px-4">
          {/* Mission Card */}
          <div className="bg-white border border-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:scale-[1.02]">
            <div className="mb-5">
              <h3 className="text-3xl font-bold text-blue-600 mb-3">
                Our Mission
              </h3>
              <div className="h-1 w-12 bg-blue-500 rounded-full mb-4"></div>
              <h5 className="text-black-900 text-lg leading-relaxed">
                To inspire and mobilize volunteers to create lasting impact by supporting education, healthcare, and social initiatives — one act of service at a time.
              </h5>
            </div>
          </div>

          {/* Values Card */}
          <div className="bg-white border border-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:scale-[1.02]">
            <div className="mb-5">
              <h3 className="text-3xl font-bold text-green-600 mb-3">
                Our Values
              </h3>
              <div className="h-1 w-12 bg-green-500 rounded-full mb-4"></div>
              <ul className="text-gray-600 text-lg list-disc list-inside space-y-2">
                <li>Compassion & Empathy</li>
                <li>Inclusivity & Diversity</li>
                <li>Integrity & Accountability</li>
                <li>Collaboration & Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
