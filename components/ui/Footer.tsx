import React from "react";
import { div } from "three/webgpu";

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 id="contact'>
      <div className="w-full absolute left-0 -bottom72">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1>Ready to take 
            <span className="text-purple">your</span> digital
            presence to the next level?
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
