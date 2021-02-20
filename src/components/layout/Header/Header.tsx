import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <motion.div
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white p-2 flex justify-center items-center"
    >
      <h1 className="text-lg">MoviesDB</h1>
    </motion.div>
  );
};

export default Header;
