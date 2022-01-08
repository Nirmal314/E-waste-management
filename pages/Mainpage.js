/** @format */

import Link from "next/link";
import Loggednavbar from "../components/Loggednavbar";

const Mainpage = () => {
    const login = () => {};
    return (
        <>
            <Loggednavbar />
            <div className="flex justify-center items-center h-full">
                <div className="flex py-16 flex-col justify-center">
                    <p className="text-center pb-10 text-2xl">Do you want to sell E-waste or purchase E-waste?</p>
                    <button onClick={login} className="bg-blue-400 border-2 border-gray-700 transition ease-in-out hover:-translate-1 font-bold text-lg hover:scale-105 text-white py-2 px-4 rounded mb-14">
                        <Link href="/Sell">
                            <a>I want to sell a product</a>
                        </Link>
                    </button>
                    <button onClick={login} className="bg-blue-400 border-2 border-gray-700 transition ease-in-out hover:-translate-1 font-bold text-lg hover:scale-105 text-white py-2 px-4 rounded">
                        <Link href="/Purchase">
                            <a>I want to purchase a product</a>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Mainpage;
