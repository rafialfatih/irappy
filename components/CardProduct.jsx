import React from "react";
import { motion } from "framer-motion";

const variantLeft = {
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

const variantRight = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const CardProduct = () => {
  return (
    <>
      <div className="text-center md:flex mx-5 my-3 grid md:grid-cols-2 gap-4">
        <motion.div
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden md:relative md:h-screen md:w-1/2 pt-4 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-gray-800 text-2xl md:text-3xl text-center mt-5 mx-8 font-semibold">
            AirPods
          </h2>
          <p className="mt-1 mx-8">Sepenuhnya baru dengan audio spasial.</p>
          <div className="flex justify-center mt-1">
            <a
              href="#"
              className="text-md md:text-lg no-underline text-blue-700 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
          <img
            src="/img/airpods_07.png"
            className="absolute bottom-0 left-0"
            alt="Air Pods"
          />
        </motion.div>
        <motion.div
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden md:h-screen md:w-1/2 pt-4 px-8 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-gray-800 text-2xl md:text-3xl mt-5 mb-1 font-semibold">
            iPad Mini
          </h2>
          <p className="mt-1">Kekuatan mumpuni. Ukuran mini.</p>
          <div className="flex justify-center mt-1">
            <a
              href="#"
              className="text-md md:text-lg no-underline text-blue-700 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
          <img src="/img/ipad_mini.png" alt="Air Pods" />
        </motion.div>
      </div>
      <div className="text-center md:flex mx-5 my-3 grid md:grid-cols-2 gap-4">
        <motion.div
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden md:h-screen md:w-1/2 pt-4 px-8 bg-white shadow-lg rounded-lg"
        >
          <img src="/img/apple_watch.png" alt="Air Pods" />
          <h2 className="text-gray-800 text-2xl md:text-3xl mt-4 mb-1 font-semibold">
            Apple Watch
          </h2>
          <p className="mt-1">Memperkenalkan layar terluas kami.</p>
          <div className="flex justify-center mt-1">
            <a
              href="#"
              className="text-md md:text-lg no-underline mb-4 text-blue-700 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden md:h-screen md:w-1/2 pt-4 px-8 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-gray-800 text-2xl md:text-3xl mt-5 mb-1 text-center font-semibold">
            iPhone 13 Pro Max
          </h2>
          <p className="mt-1">Kekuatan super baru di tangan Anda.</p>
          <div className="flex justify-center mb-6 mt-1">
            <a
              href="#"
              className="text-md md:text-lg no-underline text-blue-700 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
          <img
            src="/img/iphone_13pro.png"
            className="object-bottom"
            alt="Air Pods"
          />
        </motion.div>
      </div>
    </>
  );
};

export default CardProduct;
