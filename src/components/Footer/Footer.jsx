import React from "react";
import { FaLeaf, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { motion } from 'framer-motion';
const Footer = () => {
  const socialHandles = [
    { id: "1", img: <FaInstagram /> },
    { id: "2", img: <FaFacebook /> },
    { id: "3", img: <FaYoutube /> },
    { id: "4", img: <FaTwitter /> },
  ];
  return (
    <footer className="bg-primary/10 mt-10">
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      className="container flex items-center justify-between py-10 ">
        <div>
          <h1 className="text-primary flex items-center gap-2 text-2xl font-bold">
            FRUIT <span className="text-secondary">STORE </span>
            <span className="text-green-500">
              <FaLeaf />
            </span>
          </h1>
        </div>
        <div className="text-3xl">
          <ul className="flex items-center gap-3">
            {socialHandles.map((socialHandle) => (
              <li key={socialHandle.id}>{socialHandle.img}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
