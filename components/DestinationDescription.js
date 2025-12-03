"use client";

import { motion } from "framer-motion";

export default function DestinationDescription({ destination }) {
  return (
    <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-gray-900 leading-tight"
        >
          Discover{" "}
          <span className="bg-gradient-to-r from-[#c91f35] to-red-600 bg-clip-text text-transparent">
            {destination.name}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          {destination.description ||
            `${destination.name} is a mesmerizing destination filled with natural beauty, vibrant culture, and unforgettable experiences. It offers a perfect blend of adventure, relaxation, and breathtaking scenery.`}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-md text-gray-600 leading-relaxed"
        >
          Whether you're exploring hidden gems, enjoying local cuisines, or soaking in the landscapes, {destination.name} promises a journey you'll cherish forever.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-[#c91f35] rounded-full"
        />
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <motion.img
          src={destination.image}
          alt={destination.name}
          className="rounded-3xl shadow-xl w-full max-w-lg object-cover"
          whileHover={{
            scale: 1.03,
            rotate: 1,
            transition: { duration: 0.4 },
          }}
        />
      </motion.div>

    </section>
  );
}
