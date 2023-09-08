
import React  from 'react'

import Log from "../project-img/img1.png";

export default function Navbar() {
  return (
    <main>
      <nav className="container mx-auto px-2 sm: text-3xl font bold ">
        <div className="  flex sm:justify-between sm:mt-[7px] ">
          <div className="sm:ml-[5px]">
            <img src={Log} alt="logo-imge" />
          </div>
          <ul className="flex px-4 mt-[7px]">
            <li>
              <a className="px-3" herf="#">
                MENU
              </a>
            </li>
            <li>
              <a className="px-3" herf="#">
                LOCATION
              </a>
            </li>
            <li>
              <a className="px-3" herf="#">
                ABOUT
              </a>
            </li>
            <li>
              <a className="px-3" herf="#">
                CONTACT
              </a>
            </li>
          </ul>
          <button className="text-[#D01C28] block">LOGIN</button>
        </div>
      </nav>
    </main>
  );
}
