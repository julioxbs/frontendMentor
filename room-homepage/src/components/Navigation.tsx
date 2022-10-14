import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-hamburger.svg";
import { Dialog } from "./Dialog";
import { useState } from "react";

export const list = ["home", "shop", "about", "contact"];

export function Navigation() {
  const [showMenu, setMenu] = useState(false);

  return (
    <>
      <nav className="p-12 text-white flex items-center gap-20">
        <button className="lg:hidden block" onClick={() => setMenu(!showMenu)}>
          <img src={Menu} alt="Menu icon" />
        </button>
        <img src={Logo} alt="Logo icon" />
        <ul className="lg:flex hidden items-center gap-6 ml-6">
          {list.map((item, index) => (
            <li className="cursor-pointer" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {showMenu && <Dialog handleClick={setMenu} showMenu={showMenu} />}
    </>
  );
}
