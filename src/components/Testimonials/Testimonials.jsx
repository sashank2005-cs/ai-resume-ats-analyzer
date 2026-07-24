import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    review:
      "The ATS analysis was incredibly accurate. I improved my resume score from 62% to 91% and received interview calls within weeks.",
  },
  {
    name: "Priya Reddy",
    role: "Data Analyst",
    review:
      "The AI suggestions helped me identify missing skills and improve my resume structure. It feels like having a professional recruiter reviewing my CV.",
  },
  {
    name: "Arjun Mehta",
    role: "Mechanical Engineer",
    review:
      "Unlike other ATS tools, this one understood my engineering background and provided recommendations relevant to my field.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full font-semibold">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Loved By Students & Professionals
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Thousands of candidates have improved their resumes using AI-powered
            analysis and recruiter insights.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((person, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="bg-slate-50 rounded-3xl shadow-lg p-8 border border-slate-200"
            >

              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#facc15"
                    color="#facc15"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600 italic">
                "{person.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl text-slate-900">
                  {person.name}
                </h3>

                <p className="text-slate-500">
                  {person.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;