import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";

export function MobileNavPopover() {
  let listStyle =
    "cursor-pointer font-bold rubik text-alternate px-3 py-1 border-b-4 border-transparent hover:border-brand";
  return (
    <Popover>
      <PopoverTrigger className="bg-transparent">
        <MenuSharpIcon style={{ fontSize: 22 }} className="text-white" />
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={20}>
        <ul className="flex flex-col gap-2">
          <a href={"/"}>
            <li className={listStyle}>Home</li>
          </a>

          <a href={"/"}>
            <li className={listStyle}>Our Products</li>
          </a>

          <a href={"/"}>
            <li className={listStyle}>About us</li>
          </a>

          <a href={"/"}>
            <li className={listStyle}>Blog</li>
          </a>

          <a href={"/"}>
            <li className={listStyle}>Contact us</li>
          </a>

          <a href={"/"}>
            <button className="px-4 py-2 bg-bgPrimary text-white text-left w-full rounded">
              +800 275 8777
            </button>
          </a>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

export default function Navbar() {
  let listStyle = "hover:border-b cursor-pointer";

  return (
    <nav className="z-20 w-full absolute top-0 flex justify-between bg-transparent lg:px-24 px-4 lg:py-4 py-2">
      <div className="flex md:w-1/3 justify-center">
        <img
          src="/images/logo.png"
          alt="Company Logo"
          className="lg:w-[250px] w-48"
        />
      </div>

      <div className="flex-1">
        <ul className="hidden list-none lg:flex justify-end items-center gap-3 text-white">
          <li className={listStyle}>Home</li>
          <li className={listStyle}>Our Products</li>
          <li className={listStyle}>About us</li>
          <li className={listStyle}>Blog</li>
          <li className={listStyle}>Contact us</li>
          <li>
            <button className="px-2 py-2 bg-bgPrimary rounded">
              +800 275 8777
            </button>
          </li>
        </ul>
        <div className="lg:hidden flex justify-end items-center">
        <MobileNavPopover />
        </div>
      </div>
    </nav>
  );
}
