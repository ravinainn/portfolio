"use client";
import Link from "next/link";
import { useState } from "react";
// import pdfFilePath from "../../_assets/Ravi_Resume.pdf";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "RaviResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="pt-20 flex justify-between">
      <div className="w-1/2">
        <h1 className="text-2xl font-medium tracking-wide pb-4">
          let&apos;s connect
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-sm ">
            Say hello at{" "}
            <Link
              href="mailto:example@example.com"
              className="underline cursor-pointer"
            >
              raviinainn@gmail.com
            </Link>
          </p>
          <p className="text-sm">
            For more info, here&apos;s my{" "}
            <span onClick={downloadPdf} className="underline cursor-pointer">
              resume
            </span>
            .
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-normal" htmlFor="name">
              NAME *
            </label>
            <input
              className="border text-sm font-medium p-2 border-gray-300 rounded-sm outline-none"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-normal" htmlFor="email">
              Email *
            </label>

            <input
              className="border text-sm font-medium p-2 border-gray-300 rounded-sm outline-none"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-normal " htmlFor="message">
              Message *
            </label>

            <textarea
              className="border text-sm font-medium p-2 h-32 border-gray-300 rounded-sm outline-none "
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="text-sm w-fit font-semibold hover:font-medium bg-neutral-700 hover:bg-black hover:black rounded-3xl text-white px-8 py-2 "
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
