import React from "react";

import { motion } from "framer-motion";

const variantContent = {
  hidden: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const variantButton = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Jumbotron = () => {
  return (
    <div className="pb-20 pt-2 sm:pt-6 gradient-bg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variantContent}
        viewport={{ amount: 0.2 }}
        className="container mx-auto px-14 block md:flex justify-between items-center"
      >
        <div className="mr-5">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Smart Health Monitoring Wristwatch!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Monitor your health vitals smartly anywhere you go.
          </h3>

          <motion.button
            className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-gray-200 transition duration-300 ease-in-out"
            variants={variantButton}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}
          >
            Pre Order
          </motion.button>
        </div>
        <div className="mx-auto mt-4 h-80 w-80 md:h-1/2 md:w-1/2">
          <img src="/img/smart-watch.png" />
        </div>
      </motion.div>
    </div>
  );
};

export default Jumbotron;
