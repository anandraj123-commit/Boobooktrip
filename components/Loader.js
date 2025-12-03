"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
      style={{ background: "transparent" }}
    >
      <motion.img
        src="/Boobook_trip_logo.jpg"  // replace with your logo file
        alt="Loading Logo"
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-20 h-20 object-contain"
      />
    </motion.div>
  );
}
