/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import { loginData_buyer } from "./Ls";

const Signup = () => {
    const getFname = useRef(null);
    const getLname = useRef(null);
    const getEmail = useRef(null);
    const getPass = useRef(null);
    const getCpass = useRef(null);
    const router = useRouter();
    const signup = (e) => {
        e.preventDefault();

        const fname = getFname.current.value;
        const lname = getLname.current.value;
        const email = getEmail.current.value;
        const pass = getPass.current.value;
        const passC = getCpass.current.value;

        if (fname && lname && email && pass && passC) {
            if (pass != passC) {
                alert("Passwords didn't matched.");
                router.push("/Signup");
            } else {
                router.push({
                    pathname: "/Accountcreated",
                    query: {
                        userList: email,
                        passwordList: pass,
                    },
                });
            }
        } else {
            alert("Please fill required details.");
        }
    };
    return (
        <>
            <Navbar />
            <div className="flex justify-center text-gray-200 text-xl font-bold mt-24 mb-10">
                <p>Create your account</p>
            </div>
            <div className="flex justify-center mt-4">
                <form className="mx-auto">
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First name" ref={getFname} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last name" ref={getLname} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" ref={getEmail} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Create password" ref={getPass} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Confirm password" ref={getCpass} />
                    </div>
                    <div className="flex justify-center mt-10">
                        <button className="bg-blue-500 border-2 border-gray-700 transition ease-in-out hover:-translate-1 font-extrabold hover:scale-105 text-white py-2 px-4 rounded" onClick={signup}>
                            <a>Create account</a>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;
export { loginData_buyer };
