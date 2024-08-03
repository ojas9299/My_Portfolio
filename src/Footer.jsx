import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="nav-bg text-white pt-10 pb-10">
      <div className="container mx-auto text-center">
        <div className="mb-4 ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 text-3xl sm:text-2xl md:text-3xl hover:text-blue-400"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://x.com/Ojasbhaleraoo"
            className="text-white mx-4 text-3xl sm:text-2xl md:text-3xl hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/ojasbhalerao/"
            className="text-white mx-4 text-3xl sm:text-2xl md:text-3xl hover:text-blue-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ojas-bhalerao-9742282b3/"
            className="text-white mx-4 text-3xl sm:text-2xl md:text-3xl hover:text-blue-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/ojas9299"
            className="text-white mx-4 text-3xl sm:text-2xl md:text-3xl hover:text-blue-400"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="text-sm text-gray-400 mb-4">Connect 👇🏼</div>
        <div className="text-sm text-gray-400 ">
          {" "}
          @ojasbhalerao9299@gmail.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
