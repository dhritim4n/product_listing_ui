import React from "react";

const Footer = () => {
  return (
    <footer className="flex mb-0 justify-center items-center w-full h-[100px] bg-gray-900 text-gray-400 text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
