import Button from "./ui/Button";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import logoCompany from "/logo.svg";
import { useState } from "react";
import SocialMedia from "./ui/SocialMedia";
import useIsMobile from "../hooks/useIsMobile";

const Footer = () => {
  const [subscribe, setSubscribe] = useState("");
  const [success, setSuccess] = useState(false);
  const { isMobile } = useIsMobile();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [errorState, setErrorState] = useState(false);
  const [scope, animate] = useAnimate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRegex.test(subscribe) || subscribe === "") {
      setErrorState(true);
      if(scope.current) {
        animate(scope.current, {
          x: [0, 10, -10, 10, -10, 10, -10, 0],
          transition: { duration: 0.1 },
        });
      }
    } else {
      setErrorState(false);
      setSuccess(true);
    }
  };
  
  return (
    <footer
      className={`bg-very-dark-blue ${
        isMobile ? "p-4" : "px-28 py-10 flex items-center justify-between"
      }`}
    >
      <form
        className={`flex flex-col  mt-6 ${
          isMobile
            ? "gap-2 justify-center"
            : "order-last h-32 justify-between"
        }`}
      >
        <div className="flex gap-2">
          <input
            value={subscribe}
            onChange={(e) => setSubscribe(e.target.value)}
            type="email"
            placeholder="Updates in your inbox…"
            className="rounded-3xl p-2 pl-4 text-dark-grayish-blue "
          />
          <Button
            className="bg-bright-red text-white"
            onClick={handleSubscribe}
          >
            Go
          </Button>
        </div>
        <AnimatePresence>
          {errorState && (
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              ref={scope}
              className="text-red-500 mt-2 ml-4 italic"
            >
              {subscribe ? "Please insert a valid email" : "email is required"}
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {success && (
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              ref={scope}
              className="text-green-600 mt-2 ml-4"
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </AnimatePresence>
        {!isMobile && (
          <p className="text-center text-dark-grayish-blue">
            Copyright 2020. ALl Rights Reserved
          </p>
        )}
      </form>
      <motion.div
        layout
        className={`flex gap-2 my-6 ${
          isMobile ? "justify-evenly" : "justify-between w-1/3"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-2 text-white">
            <li className="hover:text-bright-red">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-bright-red">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-bright-red">
              <a href="#">Products</a>
            </li>
            <li className="hover:text-bright-red">
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col gap-2 text-white">
            <li className="hover:text-bright-red">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-bright-red">
              <a href="#">Community</a>
            </li>
            <li className="hover:text-bright-red">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div
        className={`${
          isMobile
            ? undefined
            : "flex flex-col justify-between items-stretch order-first h-32"
        }`}
      >
        <SocialMedia />
        <img src={logoCompany} className="mx-auto" alt="manage company" />
      </div>
    </footer>
  );
};

export default Footer;
