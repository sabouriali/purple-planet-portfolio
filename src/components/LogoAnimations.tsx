"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import udemy from "@/assets/udemy.png";
import fiverr from "@/assets/fiverr.png";
import oracle from "@/assets/oracle.png";
import elementor from "@/assets/elementor.png";
import logitech from "@/assets/logitech.png";

const logos = [
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: oracle, alt: "oracle" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: oracle, alt: "oracle" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: oracle, alt: "oracle" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: oracle, alt: "oracle" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
];

function LogoAnimations() {
  return (
    <div className="py-8 my-24 bg-purple-300/10 opacity-80 glass">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} height={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoAnimations;
