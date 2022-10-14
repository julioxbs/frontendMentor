import { list } from "./Navigation";
import Close from "../assets/icon-close.svg";

interface DialogProps {
  showMenu: boolean;
  handleClick: (showMenu: boolean) => void;
}

export function Dialog({ handleClick, showMenu }: DialogProps) {
  return (
    <div className="fixed -top-2 w-full min-h-screen bottom-0 bg-black/50 z-10">
      <div className="flex items-center gap-12 bg-white py-6 px-6 z-30">
        <button onClick={() => handleClick(!showMenu)}>
          <img src={Close} alt="close icon" />
        </button>
        <nav>
          <ul className="flex items-center gap-6">
            {list.map((item, index) => (
              <li className="cursor-pointer" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
