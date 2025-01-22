import React from "react";
import img1 from "../../assets/fruits/apple.png";
import img2 from "../../assets/fruits/orange.png";
import img3 from "../../assets/fruits/avocado.png";
import img4 from "../../assets/fruits/cherry.png";
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight } from './../../utility/animation';
const Menus = () => {
  const menuData = [
    {
      id: 1,
      title: "Fresh Red Fruits",
      link: "/",
      price: "$3.99",
      img: img1,
      delay:0.3
    },

    {
      id: 2,
      title: "Fresh Oranges",
      link: "/",
      price: "$4.99",
      img: img2,
      delay:0.6
    },

    {
      id: 3,
      title: "Fresh Avocado",
      link: "/",
      price: "$5.99.00",
      img: img3,
      delay:0.9
    },

    {
      id: 4,
      title: "Fresh Cherries",
      link: "/",
      price: "$2.99",
      img: img4,
      delay:1.2
    },
  ];
  return (
    <section>
      <div className="container pt-12 pb-20 w-full">
        <motion.h1 
        variants={FadeRight(0.5)}
        initial="hidden"
        animate="visible"
        className="text-2xl uppercase font-bold text-left pb-10">
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {menuData.map((menu) => (
            <motion.div
            key={menu.id}
            variants={FadeLeft(menu.delay)}
            initial="hidden"
            whileInView={"visible"}
            className="flex items-center gap-12 md:gap-0 lg:gap-6  shadow-lg rounded-3xl px-6 py-6">
              <img src={menu.img} className="w-[60px] scale-125 transform -translate-y-6 " alt="" />
              <div>
                <h1 className="font-semibold text-lg">{menu.title}</h1>
                <p className="text-secondary font-semibold">{menu.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
