/** @format */

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter();
    const [showOptions, setShowOptions] = useState(false);
    const clickHandle = () => {
        setShowOptions(!showOptions);
    };
    const log = (e) => {
        alert("You have to log into your account first.");
        router.push("/Ls");
    };

    return (
        <>
            <div className="absolute flex z-10 p-5">
                <Link href="/">
                    <Image src="/logo_2.png" className="" height={70} width={70} />
                </Link>
                <div className="flex justify-center items-center pl-10">
                    <p className="m_text font-bold text-2xl cursor-pointer">Electronic waste management</p>
                </div>
            </div>
            <div className="flex justify-end pt-10">
                <Link href="/Ls">
                    <a class="relative inline-block text-lg group pr-2 pt-2">
                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
                            <span class="relative">Log in / Sign up</span>
                        </span>
                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                </Link>
            </div>
            {/* {showOptions && (
                <>
                    <div className="bg-white border-2 border-teal-500 absolute right-0 z-10 rounded-lg shadow-lg text-gray-800 mr-[290px]">
                        <Link href="/">
                            <a className="dropDownItems hover:border-blue-300 hover:rounded-lg" onClick={log}>
                                Mobiles
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="dropDownItems hover:border-blue-300 hover:rounded-lg" onClick={log}>
                                Laptops
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="dropDownItems hover:border-blue-300 hover:rounded-lg" onClick={log}>
                                TVs
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="dropDownItems hover:border-blue-300 hover:rounded-lg" onClick={log}>
                                Wires
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="dropDownItems hover:border-blue-300 hover:rounded-lg" onClick={log}>
                                CDs
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="dropDownItems hover:border-blue-300 hover:rounded-lg" onClick={log}>
                                Hard drives
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="dropDownItems hover:border-blue-300 hover:rounded-lg" onClick={log}>
                                Circuits
                            </a>
                        </Link>
                    </div>
                </>
           )}*/}
        </>
    );
}

export default Navbar;
