import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import logo from "../assets/shared/logo.svg";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [link, setLink] = useState(links[0]);

  const active = (selectedLink) =>
    link.title === selectedLink
      ? "border-b-2 border-white"
      : "border-b-2 border-transparent ";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="lg:p-[50px] p-[30px] lg:pt-[29px] fixed text-pureWhite md:h-[74px] z-[1000] w-full">
      <nav className="flex md:justify-around justify-between items-center w-full">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-0 ">
          <div className="hidden lg:block w-[430px] bg-white h-[1px] mx-auto md:my-[30px] opacity-[0.7]"></div>
          <ul className="md:flex hidden gap-10 p-[20px] backdrop-blur-lg">
            {links.map((link) => (
              <li
                key={link.id}
                className={`flex ${active(
                  link.title
                )} hover:border-b-2 hover:border-white hover:border-solid `}
                onClick={() => setLink(link)}
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile nav */}
        <div className="backdrop-blur-xl">
          <button
            className="md:hidden block text-[24px] w-[24px] h-[21px] text-[#D0D6F9]"
            onClick={toggleMenu}
          >
            {menuOpen ? <MdClose /> : <IoMenu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col fixed top-0 -z-10 pt-[40px] right-0 w-[50%] h-[100vh]  backdrop-blur-3xl">
            <ul className="flex flex-col gap-10 p-10 backdrop-blur-xl">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`flex ${active(link.title)}`}
                  onClick={() => setLink(link)}
                >
                  <Link to={link.link} onClick={toggleMenu}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
