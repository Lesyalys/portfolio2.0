import { motion } from "motion/react";
export const Contact = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="flex md:flex-row flex-col gap-5"
    >
      {/* <form className="border-l-2 border-[#6f2d66] w-full  h-auto p-6 rounded-2xl bg-linear-to-r from-[#03060C] to-[#6f2d66] space-y-4">
        <div>
          <h1 className="font-semibold mb-2 text-gray-100">Name</h1>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#6f2d66] transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <h1 className="font-semibold mb-2 text-gray-100">Email</h1>
          <input
            type="email"
            className="w-full border-2 border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#7a4c74] transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <h1 className="font-semibold mb-2 text-gray-100">Message</h1>
          <textarea
            className="w-full border-2 border-gray-300 rounded-xl p-3 h-32 resize-none focus:outline-none focus:border-[#6f2d66] transition-colors"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#6f2d66] text-white py-3 rounded-xl font-semibold hover:bg-[#462d6f] transition-colors"
        >
          Send Message
        </button>
      </form> */}
    </motion.div>
  );
};
