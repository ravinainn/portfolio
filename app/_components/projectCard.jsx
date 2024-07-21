import Image from "next/image";
import Link from "next/link";
import uifry from "../_assets/uifry.png";
import urlImg from "../_assets/urlShortner.png";

export default function ProjectCard() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="relative hover:bg-blend-darken rounded-lg md:w-[38vw] shadow-md z-0 group">
        <Image className="" src={uifry} alt="Uifry" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-70 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Uifry <br />
          <span className="text-base font-medium">single page website</span>
        </h4>
      </div>
      <div className="relative hover:bg-blend-darken rounded-lg md:w-[38vw] shadow-md z-0 group">
        <Image className="" src={urlImg} alt="Uifry" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-70 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Uifry <br />
          <span className="text-base font-medium ">single page website</span>
        </h4>
      </div>
      <div className="relative hover:bg-blend-darken rounded-lg md:w-[38vw] shadow-md z-0 group">
        <Image className="" src={uifry} alt="Uifry" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-70 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Uifry <br />
          <span className="text-base font-medium">single page website</span>
        </h4>
      </div>
      <div className="relative hover:bg-blend-darken rounded-lg md:w-[38vw] shadow-md z-0 group">
        <Image className="" src={uifry} alt="Uifry" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-70 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Uifry <br />
          <span className="text-base font-medium ">single page website</span>
        </h4>
      </div>
      <div className="relative hover:bg-blend-darken rounded-lg md:w-[38vw] shadow-md z-0 group">
        <Image className="" src={uifry} alt="Uifry" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-70 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Uifry <br />
          <span className="text-base font-medium">single page website</span>
        </h4>
      </div>
      <div className="relative hover:bg-blend-darken rounded-lg md:w-[38vw] shadow-md z-0 group">
        <Image className="" src={uifry} alt="Uifry" />
        <div className="absolute bg-black opacity-0 group-hover:opacity-70 rounded-lg top-0 w-full h-full p-10 z-20"></div>
        <h4 className="text-lg font-semibold text-white top-0 absolute p-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          Uifry <br />
          <span className="text-base font-medium ">single page website</span>
        </h4>
      </div>
    </div>
  );
}
