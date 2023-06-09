import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contactType } from "../interface/interface";
import Container from "./Container";
import { leftToRight } from "./Greeting";

const contacts: contactType[] = [
  {
    id: 1,
    logo: "/github.svg",
    link: "https://github.com/Manhldph21392",
  },
  {
    id: 2,
    logo: "/gmail.svg",
    link: "mailto: manhld21082003@gmail.com",
  },
  {
    id: 3,
    logo: "/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=100038477689833",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="dark:bg-dark-200 px-8" id="contact">
      <Container>
        <div className="dark:text-white py-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial="offscreen"
            whileInView="onscreen"
            variants={leftToRight}
            viewport={{ once: true }}
          >
            Contact
          </motion.h1>

          <motion.div
            className="text-lg md:text-2xl font-semibold my-6"
            initial="offscreen"
            whileInView="onscreen"
            variants={leftToRight}
            viewport={{ once: true }}
          >
            Currently active looking for Frontend Developer Internship
          </motion.div>

          <motion.div
            className="flex justify-center items-center gap-8 my-8"
            initial="offscreen"
            whileInView="onscreen"
            variants={leftToRight}
            viewport={{ once: true }}
          >
            {contacts.map((contact) => {
              return (
                <div key={contact.id} className="cursor-pointer">
                  <Link href={contact.link}>
                    <a target="_blank">
                      <Image width={35} height={35} src={contact.logo} alt="" />
                    </a>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
