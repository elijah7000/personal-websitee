import Link from "next/link";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex justify-between w-full p-8 text-lg uppercase font-notoSans fixed z-50 bg-black animate-revealTopBot">
      <div>
        <p>Lydia J Kim</p>
      </div>
      <div className="max-sm:hidden">
        <ul className="flex gap-9">
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="hidden max-sm:flex">
        <RiMenu3Fill />
      </div>
    </header>
  );
};

export default Header;
