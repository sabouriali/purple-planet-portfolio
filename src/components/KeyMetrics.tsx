"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    id: 1,
    value: "5+",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 2,
    value: "50+",
    label: "Project Completed",
    description: "From small applications to complex web platforms.",
  },
  {
    id: 3,
    value: "10+",
    label: "Technologies Mastered",
    description: "Proficient in various programming languages and frameworks.",
  },
  {
    id: 4,
    value: "99%",
    label: "Code Quality",
    description:
      "Committed to writing clean, efficient, and maintainable code.",
  },
  {
    id: 5,
    value: "1000+",
    label: "Commits on Github",
    description: "Active contributor to open-source and personal projects.",
  },
];

function KeyMetrics() {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-32 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl font-bold mb-12"
      >
        KEY METRICS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index / 10, duration: 0.6 }}
            className="flex flex-col"
          >
            <motion.h3
              initial={{ scale: 0.5 }}
              animate={isInView && { scale: 1 }}
              transition={{
                delay: 0.6 + index / 10,
                duration: 0.4,
                type: "spring",
              }}
              className="text-5xl font-bold text-purple-300 mb-2"
            >
              {metric.value}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView && { opacity: 1 }}
              transition={{ delay: 0.8 + index / 10, duration: 0.4 }}
              className="text-xl font-semibold mb-2"
            >
              {metric.label}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView && { opacity: 1 }}
              transition={{ delay: 1 + index / 10, duration: 0.4 }}
              className="text-gray-400"
            >
              {metric.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default KeyMetrics;
