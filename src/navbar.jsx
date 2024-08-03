import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import React, { useState } from "react";
import BasicModal from "./Modal";

export function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navElements = [
    <button onClick={() => scrollToElement("hero")}>Home</button>,
    <button onClick={() => scrollToElement("skills")}>Skills</button>,
    <button onClick={() => scrollToElement("projects")}>Projects</button>,
    <button onClick={() => scrollToElement("contact")}>Contact</button>,
    <button
      className="xs:hidden sm:block"
      key="resume"
      onClick={handleOpenModal}
    >
      Resume
    </button>,
    <button
      className="xs:hidden sm:block"
      onClick={() => scrollToElement("about")}
    >
      About
    </button>,
  ];

  return (
    <>
      <div className="flex items-center px-5 sm:px-8  nav-bg h-14">
        <MenuRoundedIcon className="text-white mr-5 sm:mr-10 transform transition-transform duration-300 hover:scale-125 " />
        <div className="flex text-white gap-[19px] sm:gap-8 text-md lg:ml-auto ">
          {navElements.map((e, index) => (
            <p className="hvr-underline-from-left" key={index}>
              {e}
            </p>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <BasicModal open={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
}
