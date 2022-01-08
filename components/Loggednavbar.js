/** @format */

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { useState } from "react";
import { useRouter } from "next/router";
function Loggednavbar() {
    const router = useRouter();
    const [showOptions, setShowOptions] = useState(false);
    const clickHandle = () => {
        setShowOptions(!showOptions);
    };
    const log = (e) => {
        e.preventDefault();

        router.push("/Mainpage");
    };
    return (
        <>
            <div className="absolute z-10 p-5">
                <Link href="/">
                    <Image src="/logo_2.png" className="" height={70} width={70} />
                </Link>
            </div>
            <div className="flex justify-end -pb-4">
                <Link href="/Loggedin">
                    <a className="">
                        <NavItems title="Home" />
                    </a>
                </Link>
                {/*<div className="flex justify-center items-center p-6">
                    <button type="button" onClick={clickHandle} class="sm:block hidden hover:bg-white hover:text-teal-500 focus:outline-none rounded-md h-10 border border-gray-300 shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <div className="flex font-normal">
                            Electronics
                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </button>
    </div>*/}
                <Link href="/Sell">
                    <a>
                        <NavItems title="Sell" />
                    </a>
                </Link>
                <Link href="/Purchase">
                    <a>
                        <NavItems title="Purchase" />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <NavItems title="Logout" />
                    </a>
                </Link>
            </div>
            {/*{showOptions && (
                <>
                    <div className="bg-white border-2 border-teal-500 absolute right-0 z-10 rounded-lg shadow-lg text-gray-800 mr-[230px]">
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

export default Loggednavbar;
