"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Noriani",
      quote:
        "We had concerns initially, but everything was smooth. Our helper is amazing with our kids.",
    },
    {
      name: "Jason Lim",
      quote:
        "The process was fast and professional. I didn’t expect this level of support post-handover.",
    },
    {
      name: "Priya Rajan",
      quote:
        "Great service, clear pricing, and a very personal touch. Highly recommended.",
    },
  ];

  return (
    <section className="bg-teal-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-teal-800 text-center mb-10">
        What Our Families Say
      </h2>

      <div className="space-y-8 max-w-2xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Default user icon */}
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-teal-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
                  />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-base italic text-gray-700 leading-relaxed">
                “{t.quote}”
              </p>

              {/* Name */}
              <p className="font-semibold text-sm text-gray-800">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
