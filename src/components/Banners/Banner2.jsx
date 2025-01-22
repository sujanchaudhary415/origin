import React from "react";
import banner2 from "../../assets/fruit-plate2.png";
import { FadeRight, FadeUp } from './../../utility/animation';
import { motion } from 'framer-motion';

const Banner2 = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/**Brand info */}
        <motion.div
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1 className="uppercase font-bold text-3xl lg:text-6xl">
              Online Fruit Store
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>

            {/**Button section */}
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                Download The App
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/**Banner img */}
        <motion.div
        initial={{ opacity: 0, x: 200, rotate: 75 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }} 
         viewport={{once:"true"}}
          className="flex justify-center items-center order-1 md:order-2"
        >
          <img
            src={banner2}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner2;
