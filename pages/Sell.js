/** @format */

import { useRouter } from "next/router";
import { useRef } from "react";
import Loggednavbar from "../components/Loggednavbar";

function Sell() {
    const proDes = useRef(null);
    const number = useRef(null);
    const pic = useRef(null);

    const router = useRouter();

    const submit = (e) => {
        const des = proDes.current.value;
        const Num = number.current.value;
        const pData = pic.current.value;

        e.preventDefault();

        if (des && Num && pData) {
            router.push("/Product");
        } else {
            alert("Please fill in the required details.");
        }
    };
    return (
        <div>
            <Loggednavbar />
            <div className="flex justify-center mt-20">
                <form className="w-full max-w-lg">
                    {/*<div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" ref={getFname} id="grid-first-name" type="text" placeholder="First Name" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" ref={getLname} id="grid-last-name" type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" ref={getEmail} id="grid-password" type="email" placeholder="Email Address" />
                        </div>
    </div>*/}
                    <div className="flex flex-row flex-wrap -mx-3 mb-2">
                        <label for="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-200">
                            PRODUCT DESCRIPTION
                        </label>
                        <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea1" rows="3" ref={proDes} placeholder="Your message"></textarea>
                        <label for="formFileMultiple" className="mt-6 form-label inline-block mb-2 text-gray-200">
                            Upload photos of your product
                        </label>
                        <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" ref={pic} id="formFileMultiple" multiple></input>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="mt-6 block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-state">
                                PRODUCT
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Mobiles</option>
                                    <option>Laptops</option>
                                    <option>TVs</option>
                                    <option>Others</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-900">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="mt-6 block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-zip">
                                CONTACT NUMBER
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" ref={number} placeholder="" />
                        </div>
                    </div>
                    <div className="flex mt-6 justify-center">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded" onClick={submit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Sell;
