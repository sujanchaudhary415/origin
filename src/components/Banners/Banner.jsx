import React from "react";
import banner1 from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import {  FadeUp } from "./../../utility/animation";
const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6  md:space-y-0 py-14 ">

        {/**Banner img */}
        <motion.div 
       initial={{opacity:0,scale:0.5}}
       whileInView={{opacity:1,scale:1}}
       transition={{type:"spring",stiffness:100,delay:0.2}}
       viewport={{once:true}}
        className="flex justify-center items-center">
          <img
            src={banner1}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </motion.div>

        {/**Brand info */}
        <motion.div 
        variants={FadeUp(0.5)}
        initial="hidden"
       whileInView="visible"
       transition={{type:"spring",stiffness:100,delay:0.2}}
       viewport={{once:true}}
        className="flex flex-col justify-center  ">
          <div className="text-center md:text-left  space-y-4 lg:max-w-[400px]">
            <h1 className="uppercase font-bold text-3xl lg:text-6xl">Brand Info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Recusandae iusto minima ad ut id eos accusantium aut,
              aperiam quis incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>

            {/**Buton section */}
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 ">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
