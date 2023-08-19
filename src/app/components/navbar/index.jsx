"use client"
import Link from "next/link";
import {useState} from "react";
import Profile from "./Profile";
import Menu from "./Menu";

const Navbar = () => {
    const [dropMenu, setDropMenu] = useState(false);
    const menuClick = () => {
        setDropMenu(!dropMenu);
    };
    return(
        <div className="w-full h-26 bg-slate-800 sticky top-0">
            <div className="container px-6 h-full">
                <div className="flex justify-between items-center h-full">
                    <Profile />
                    <div>
                        <ul className="hidden md:flex gap-x-8 text-slate-300 font-semibold text-3xl lg:text-4xl">
                            <li>
                                <Link href={"/about"}>
                                    <p className=" hover:text-white mr-4">About</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/portfolio"}>
                                    <p className=" hover:text-white mr-4">Portfolio</p>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href={"/blog"}>
                                    <p className=" hover:text-white mr-4">Blog</p>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button 
                            class="px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white"
                            onClick={menuClick}
                        >
                            <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Menu toggleMenu={dropMenu}/>
        </div>
    )
}

export default Navbar;