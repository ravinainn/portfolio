"use client";
import Image from "next/image";
import Link from "next/link";
import uifry from "../_assets/uifry.png";
import urlImg from "../_assets/urlShortner.png";
import dontChat from "../_assets/dontchat.png";

export default function ProjectCard() {
  const handleProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div
        onClick={() => handleProject("https://uifry-ravi.vercel.app")}
        className="relative hover:bg-blend-darken hover:cursor-pointer rounded-lg md:w-[38vw] shadow-md z-0 group"
      >
        <Image className="" src={uifry} alt="Uifry" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-60 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Uifry <br />
          <span className="text-base font-medium">single page website</span>
        </h4>
      </div>
      <div
        onClick={() => handleProject("https://rshort.vercel.app")}
        className="relative hover:bg-blend-darken hover:cursor-pointer rounded-lg md:w-[38vw] shadow-md z-0 group"
      >
        <Image className="" src={urlImg} alt="URL Shortner" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-60 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          URL Shortener <br />
          <span className="text-base font-medium ">
            Generate short url for long urls
          </span>
        </h4>
      </div>
      <div
        onClick={() => handleProject("https://dontchat.vercel.app")}
        className="relative hover:bg-blend-darken hover:cursor-pointer rounded-lg md:w-[38vw] shadow-md z-0 group"
      >
        <Image className="" src={dontChat} alt="Dont Chat" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-60 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Dont Chat <br />
          <span className="text-base font-medium ">
            Simplest way to chat online
          </span>
        </h4>
      </div>
    </div>
  );
}
