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
      <div className="md:flex mx-5 my-3 grid md:grid-cols-2 gap-4">
        <motion.div
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="overflow-hidden md:h-screen md:w-1/2 py-4 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-gray-800 text-3xl text-center my-5 mx-8 font-semibold">
            AirPods
          </h2>
          <img src="/img/airpods_07.png" className="" alt="Air Pods" />
          <p className="mt-2 text-gray-600 mx-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="#"
              className="text-xl no-underline text-blue-700 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="overflow-hidden md:h-screen md:w-1/2 py-4 px-8 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-gray-800 text-3xl my-5 text-right font-semibold">
            iPad Mini
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="#"
              className="text-xl no-underline text-blue-700 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
          <img src="/img/ipad_mini.png" alt="Air Pods" />
        </motion.div>
      </div>
      <div className="md:flex mx-5 my-3 grid md:grid-cols-2 gap-4">
        <motion.div
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="overflow-hidden md:h-screen md:w-1/2 py-4 px-8 bg-white shadow-lg rounded-lg"
        >
          <img src="/img/apple_watch.png" alt="Air Pods" />
          <h2 className="text-gray-800 text-3xl my-5 font-semibold">
            Apple Watch
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="#"
              className="text-xl no-underline text-blue-700 hover:underline"
            >
              Selengkapnya
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="overflow-hidden md:h-screen md:w-1/2 py-4 px-8 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-gray-800 text-3xl my-5 text-center my-2 font-semibold">
            iPhone 13 Pro Max
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
          <div className="flex justify-center my-6">
            <a
              href="#"
              className="text-xl no-underline text-blue-700 hover:underline"
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
