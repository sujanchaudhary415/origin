import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import {motion} from "framer-motion"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navMenu = [
    { id: "1", link: "#", title: "Home" },

    { id: "2", link: "#", title: "Products" },
    { id: "3", link: "#", title: "About" },
    { id: "4", link: "#", title: "Shop" },
    { id: "5", link: "#", title: "Contact" },
  ];
  return (
    <>
      <nav>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        className="container flex items-start justify-between py-4 md:pt-4">
          {/**logo section */}
          <div className="text-2xl flex items-center gap-2 uppercase font-bold">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/** main menu */}
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-gray-600">
              {navMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:text-white rounded-full hover:bg-primary p-2 duration-300">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/**Hamburger menu */}
          <div className="block md:hidden">
            <MdMenu className="text-4xl" onClick={() => setOpen(!open)} />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
