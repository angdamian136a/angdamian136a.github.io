"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Profile = () => {
    // const [width, setWidth] = useState(0);
    // const updateWidth = () => {
    //     const newWidth = window.innerWidth;
    //     setWidth(newWidth)
    // };
    // useEffect(() => {
    //     window.addEventListener("resize", updateWidth);
    //     updateWidth();
    // }, []);
    // const [showButton, setShowButton] = useState(false);
    // const changeNavButton = () => {
    //     if (window.scrollY >= 400 && window.innerWidth < 768) {
    //         setShowButton(true);
    //     } else {
    //         setShowButton(false);
    //     }
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", changeNavButton);
    // }, []);

    return (
        <div className="my-3">
            <Link 
                href={"/"} 
                // style={{ display: showButton ? "none" : "block" }}
                // className="m-5"
            >
                <Image 
                    className="rounded-full object-center border-4 border-slate-300 hover:border-white"
                    src={"/images/profile2.jpeg"} 
                    alt="Profile picture" 
                    width={"100"} 
                    height={"100"} 
                />
            </Link>
            {/* <div 
                style={{display: showButton ? "block" : "none"}}
            >
                <Button />
            </div> */}
        </div>
    );
};

export default Profile;



