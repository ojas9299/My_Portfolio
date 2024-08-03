import React, { useState } from "react";
import BasicModal from "./Modal";
import { scrollToElement } from "./navbar.jsx";

export default function MyHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scroll = () => {
    scrollToElement("projects");
  };

  return (
    <>
      <div className=" h-[80vh] sm:h-[100vh] realtive">
        <picture>
          <source
            srcSet="https://images.unsplash.com/photo-1640032176542-b3c8434d8f22?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            media="(max-width: 639px)"
          />
          <img
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>

        <div>
          <p className="hero-text absolute text-[50px] lg:text-[70px] lg:top-36 top-44 left-5 sm:left-12 lg:left-48  text-white tracking-widest">
            Ojas
          </p>
          <p className="hero-text absolute top-60 text-[45px] sm:text-[50px] lg:text-[70px] left-5 sm:left-12 lg:left-48  text-white">
            Bhalerao
          </p>
          <p className="hero-text absolute top-[310px] lg:top-[330px] left-5 sm:left-12 lg:left-48 text-white tracking-wide hvr-underline-from-left">
            FullStack Developer
          </p>
        </div>
        <div className="absolute top-96 left-5 sm:left-12 text-white lg:left-48">
          <button
            onClick={handleOpenModal}
            className="mr-5 border-2 border-white-100 px-10 py-1 rounded-2xl
          hover:bg-slate-50 hover:text-black hover:font-bold"
          >
            Resume
          </button>
          <button
            onClick={scroll}
            className="border-2 border-white-100 px-10 py-1 rounded-2xl
          hover:bg-slate-50 hover:text-black hover:font-bold"
          >
            Projects
          </button>
          {isModalOpen && (
            <BasicModal open={isModalOpen} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </>
  );
}
