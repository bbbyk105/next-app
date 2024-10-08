import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10' id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vh]">
          Are you ready to elevate <span className="text-purple">your</span>{" "}
          digital presence to new heights?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center ">
          Contact me today, and let&apos;s talk about how I can assist you in
          reaching your goals.
        </p>
        <a href="mailto:bbbyk105@gmail.com">
          <MagicButton
            title="Contact me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Byakko
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
        <div className="flex items-center justify-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={`Profile image for ${profile.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;