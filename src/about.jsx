import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Animations from "./loader.jsx";
import { scrollToElement } from "./navbar.jsx";

export default function About() {
  function click() {
    scrollToElement("contact");
  }

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 p-5 mx-5 lg:mx-20 mt-36 lg:mt-32 ">
      <div
        className=" rounded-2xl text-white 
      lg:h-[700px]  h-[650px] about-bg"
      >
        <img
          className="h-[500px] lg:h-[500px] w-full mx-auto py-10 px-5 lg:px-0 object-contain rounded-full"
          src="https://i.ibb.co/VLMS4k0/business-3d-young-man-standing-with-laptop.png"
          alt="Profile"
        />
        <div className="text-center">
          <p className="text-4xl font-rock-salt mb-3 ">Ojas Bhalerao</p>
          <p className="mb-4 text-lg font-thin">ojasbhalerao9299@gmail.com</p>
          <button
            onClick={click}
            className="border-2 border-white rounded-full px-4 py-1 inline-block mx-auto"
            style={{ display: "inline-block", textAlign: "center" }}
          >
            Socials
          </button>
        </div>
      </div>
      <div className=" text-white   col-span-1">
        <div className=" px-10 py-10 rounded-xl about-bg">
          <h1 className="text-3xl font-bold my-3 font-Rubik_Mono_One hvr-underline-from-left ">
            About Me
          </h1>
          <p className="text-green-500 mb-5 font-bold hover:text-green-600">
            <CheckCircleOutlineIcon /> Open to Work
          </p>
          <div className="hover:text-yellow-400">
            <p className="text-md leading-relaxed mb-4 tracking-wider font-Rubik_Mono_One">
              I'm a Computer Science student completing my Bachelor of
              Engineering at SMT Kashibai Navle College of Engineering.
            </p>
            <p className="leading-relaxed mb-4 tracking-wider ">
              Develop highly interactive Front end / User Interfaces for your
              web and mobile applications
            </p>
            <p className="leading-relaxed mb-4 tracking-wider ">
              My expertise extends to developing robust back-end systems
              ensuring your applications run smoothly and efficiently.
            </p>
            <p className="leading-relaxed mb-4 tracking-wider ">
              Utilizing cloud platforms and modern databases to deliver
              high-performance, reliable applications with React and Express.
            </p>
          </div>
        </div>
        <div className=" my-4 px-8 rounded-xl about-bg ">
          <Animations />
        </div>
      </div>
    </div>
  );
}
