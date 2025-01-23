import React from "react";
import banner3png from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { IoBagHandleOutline } from "react-icons/io5";
const Banner3 = () => {
  const bgStyle = {
    backgroundImage: `url(${banner3png})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"scroll",
  };
  return (
    <section className="container">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6  md:space-y-0 py-14 rounded-3xl bg-red-800  "
      >
        {/** blank Banner img */}
       <div></div>

        {/**Brand info */}
        <motion.div
          variants={FadeLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center  "
        >
          <div className="text-center md:text-left  space-y-4 lg:max-w-[400px]">
            <h1 className="uppercase font-bold text-3xl lg:text-5xl">
              Get Fresh Fruits Today
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>

            {/**Buton section */}
            <motion.div
              variants={FadeLeft(0.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 ">
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner3;
