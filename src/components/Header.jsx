import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logoBanner from "../assets/logo-banner-removebg.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center whitespace-nowrap px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <LinkScroll className="block w-[12rem] xl:mr-8 cursor-pointer" to="home" offset={-150}>
          <img
            src={logoBanner}
            width={190}
            className="object-cover h-11"
            alt="Brainwave"
          />
        </LinkScroll>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <LinkScroll
                to={item.title}
                key={item.id}
                offset={item.offset}
                href={item.url}
                spy
                activeClass="nav-active"
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mx-5 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </LinkScroll>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="button hidden mr-8 transition-colors text-[#FFD000] lg:block select-none">
          Clients Slots Left:
        </div>
        <Button className="hidden lg:flex">11</Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
