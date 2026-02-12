import Image from "next/image";
import { useState } from "react";
import { menuData } from "./menuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();
  return (
    <header className="  fixed  z-50 max-w-7xl  w-full  top-0 bg-[#1e233d] py-7">
      <div className="relative mx-auto  max-w-7xl items-center justify-between px-4 md:px-9 flex ">
        <div>
          <a href="/">
            <Image
              src="images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className=" dark:block"
            />
          </a>
        </div>
        <div className=" hidden  w-full px-5 md:flex gap-10 ml-5 list-none text-white  ">
          {menuData.map((menuItem, key) => (
            <li key={key} className={menuItem.subMenu && "group relative "}>
              {menuItem.subMenu ? (
                <>
                  <button
                    onClick={() => setDropdownToggler(!dropdownToggler)}
                    className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                  >
                    {menuItem.title}
                    <span>
                      <svg
                        className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-white "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </span>
                  </button>

                  <ul
                    className={`${dropdownToggler ? "flex absolute flex-col " : "hidden "}`}
                  >
                    {menuItem.subMenu.map((item, key) => (
                      <li key={key} className="hover:text-primary text-white ">
                        <Link href={item.path || "#"}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={`${menuItem.path}`}
                  className={
                    pathUrl === menuItem.path
                      ? "text-primary hover:text-primary"
                      : "hover:text-primary "
                  }
                >
                  {menuItem.title}
                </Link>
              )}
            </li>
          ))}
        </div>
        {/* hamburger Toggle BTN */}
        <button
          onClick={() => setNavigationOpen(!navigationOpen)}
          className="md:hidden block cursor-pointer"
        >
          <div className=" top-0 right-2.5 w-5.5 h-5.5   relative">
            <span className=" absolute w-full h-full right-0 block">
              <span
                className={`relative left-0 top-0 my-1 block  h-0.5 rounded-sm bg-white delay-0 duration-200 ease-in-out dark:bg-white ${
                  !navigationOpen ? "w-full! delay-500 " : "w-0"
                }`}
              ></span>
              <span
                className={` h-0.5 my-1 bg-white block relative left-0 top-0 delay-0 duration-200 ease-in-out rounded-xl ${!navigationOpen ? "w-full delay-500" : "w-0"} `}
              ></span>
              <span
                className={` h-0.5 my-1 bg-white block relative left-0 top-0 delay-0 duration-200 ease-in-out rounded-xl ${!navigationOpen ? "w-full delay-500" : "w-0"} `}
              ></span>
              <span className=" absolute w-full h-full  top-0 right-0 rotate-45">
                <span
                  className={` ${!navigationOpen ? "h-0! " : "w-full"}  delay-300 ease-in-out duration-200 absolute w-full h-0.5 bg-white top-2.5 right-0`}
                ></span>
                <span
                  className={` ${!navigationOpen ? " h-0! " : " h-0.5"} delay-300 ease-in-out  duration-200 absolute w-0.5 h-full bg-white top-0 right-2.5`}
                ></span>
              </span>
            </span>
          </div>
        </button>
        {/*menu Mobile  */}
        <div
          className={` delay-300 ease-in-out absolute top-15 right-0 transition-all h-dvh bg-black ${navigationOpen ? "w-[50%]" : "w-0"}`}
        ></div>
      </div>
    </header>
  );
}
