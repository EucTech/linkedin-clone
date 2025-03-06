import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { ImHome3 } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import { TbBriefcaseFilled } from "react-icons/tb";
import { userImage } from "../../public/assests";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const extendSearch = search
    ? "w-[25em] transition-all border-black border-solid border-2"
    : "w-[16em] transition-all";

  // when click outside the search bar, it should close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      icon: <ImHome3 />,
      link: "/feed",
    },
    {
      name: "My Network",
      icon: <HiUsers />,
      link: "mynetwork",
    },
    {
      name: "Jobs",
      icon: <TbBriefcaseFilled />,
      link: "jobs",
    },
    {
      name: "Messaging",
      icon: <BiSolidMessageRoundedDots />,
      link: "messaging",
    },
    {
      name: "Notifications",
      icon: <IoNotifications />,
      link: "notifications",
    },
  ];

  return (
    <div className="w-full h-[4em] flex items-center justify-between gap-4 px-14 bg-white border border-solid border-zinc-200">
      <div className="flex items-center gap-2">
        <Link href="/feed">
          <BsLinkedin className="w-9 h-9 bg-[white] fill-brandColor cursor-pointer" />
        </Link>

        <div
          ref={searchRef}
          onClick={() => setSearch((prev) => !prev)}
          className={cn(
            " rounded-sm relative flex bg-[#f7f4ef] items-center overflow-hidden",
            extendSearch
          )}
        >
          <input
            placeholder="Search"
            className=" w-full pl-10 pr-2 font-light placeholder:text-[15px] placeholder:text-[#585858] py-[6px] outline-none border-none "
          />
          <FaSearch className=" absolute left-3 text-[#585858]" />
        </div>
      </div>

      <div className="h-full flex items-center gap-4 ">
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            {navLinks.map((link, index) => {

              return (
                <Link href={link.link} key={index} className="group " onClick={() => setActiveLink(link.link)}>
                  <div className={`flex flex-col items-center px-3 py-[6px] pt-[10px] cursor-pointer hover:text-black  ${activeLink === link.link ? "text-black" : "text-[#726f6f]"}   `}>
                    <span className="text-[25px]">{link.icon}</span>
                    <span className="text-[14px] font-light">{link.name}</span>
                  </div>
                  <div className={`h-[2px] w-full ${activeLink === link.link  ? 'bg-black' : 'bg-transparent'} group-hover:text-black  transition-all duration-300`}></div>

                </Link>
              );
            })}
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <Image src={userImage} alt="" width={500} height={500} className="w-[28px] h-[28px] rounded-full border border-solid border-[red] "   />
            <div className="flex items-center text-[#726f6f] hover:text-black">
              <span className="text-[14px]">Me</span>
              <IoMdArrowDropdown className="text-[20px]"/>
            </div>
          </div>
        </div>

        <div className="h-full w-px bg-zinc-200 " />

        <div>
          <h1>My Network</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
