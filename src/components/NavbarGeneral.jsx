import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar bg-white shadow-md flex w-full p-[0.875rem_1rem_1.125rem_1rem] justify-between items-center fixed top-0 left-0 z-50">
        <a href="/" className="brand-logo">
          <img
            src="/mypertaminafair-logo.svg"
            alt="Brand Logo"
            className="h-9"
          />
        </a>
        <div className="hamburger cursor-pointer z-50" onClick={toggleMenu}>
          <img src="/hamburger-menu.svg" alt="Hamburger Menu" className="h-8" />
        </div>
      </div>

      <div
        className={`menu fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white flex flex-col justify-center items-center z-40 ${isOpen ? "flex" : "hidden"}`}
      >
        <div
          className="close cursor-pointer absolute top-5 right-5"
          onClick={toggleMenu}
        >
          &times; {/* Close icon */}
        </div>
        <nav>
          <ul className="space-y-4 text-lg font-cabin">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
