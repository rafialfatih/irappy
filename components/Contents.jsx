import React from "react";
import { motion } from "framer-motion";

const variantContent = {
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

const variantText = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Contents = () => {
  return (
    <div className="bg-gray-50 my-3 py-8">
      <motion.h2
        variants={variantContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        className="text-2xl md:text-5xl text-center font-bold text-gray-800"
      >
        MacBook Pro
      </motion.h2>
      <motion.div
        variants={variantContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <img
          className="mx-auto my-3"
          src="/img/macbook15.png"
          width={600}
          height={150}
        />
      </motion.div>
      <motion.div
        variants={variantText}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="text-center"
      >
        <h3 className="text-xl md:text-3xl">Bertenaga super untuk pro.</h3>
        <p className="text-base md:text-lg my-2 text-gray-500">
          Cek kembali untuk informasi ketersediaan.
        </p>
        <a
          className="text-lg md:text-xl no-underline text-blue-700 hover:underline"
          href="#"
        >
          Selengkapnya
        </a>
      </motion.div>
    </div>
  );
};

export default Contents;
