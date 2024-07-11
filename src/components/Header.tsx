import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import logo from "/logo.svg";
import menuIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import MobileNav from "./MobileNav";
import useIsMobile from "../hooks/useIsMobile";
import Button from "./ui/Button";
import DesktopNavs from "./ui/DesktopNavs";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useIsMobile();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [isMenuOpen]);
  

  return (
    <div className="relative z-20">
      <header className="flex justify-between items-center ">
        <img src={logo} alt="Manage Company" />
        {isMobile ? (
          <button onClick={handleMenuToggle} className="relative z-30">
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu Button" />
          </button>
        ) : (
          <>
            <DesktopNavs />
            <Button className="bg-bright-red text-white">Get Started</Button>
          </>
        )}
      </header>
      <AnimatePresence>
        {isMenuOpen && <MobileNav handleMenuOpen={handleMenuToggle} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
