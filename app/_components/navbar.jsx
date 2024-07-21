"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="w-screen flex justify-center">
      <div className="pt-10 md:pt-32 w-4/5 flex justify-between">
        <h1 className="normal-text font-semibold antialiased">RAVI NAIN</h1>
        <div className="normal-text font-medium flex gap-4">
          <Link
            href={"/"}
            className={` ${pathname === "/" ? "font-bold underline" : ""} `}
          >
            work
          </Link>
          <Link
            href={"/about"}
            className={` ${
              pathname === "/about" ? "font-bold underline" : ""
            } `}
          >
            about
          </Link>
        </div>
      </div>
    </div>
  );
}
