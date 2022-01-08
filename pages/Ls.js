/** @format */

import Link from "next/link";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const loginData_buyer = {
    userList: ["usr1@gmail.com", "usr2@gmail.com", "usr3@gmail.com", "usr4@gmail.com", "usr5@gmail.com", "usr6@gmail.com", "jenil@gmail.com"],
    passwordList: ["pass1", "pass2", "pass3", "pass4", "pass5", "pass6", "jenilpass"],
};
const loginData_seller = {
    userList: ["seller1@gmail.com", "seller2@gmail.com", "seller3@gmail.com", "seller4@gmail.com", "seller5@gmail.com", "seller6@gmail.com"],
    passwordList: ["pass1", "pass2", "pass3", "pass4", "pass5", "pass6"],
};

function Ls() {
    const loginRef = useRef(null);
    const passRef = useRef(null);
    const router = useRouter();

    const login = (e) => {
        e.preventDefault();

        const loginValue = loginRef.current.value;
        const passValue = passRef.current.value;

        var logged = false;

        if (!(loginValue && passValue)) {
            alert("Please enter required details.");
        } else {
            for (var i = 0; i < loginData_buyer.userList.length; i++) {
                if (loginValue == loginData_buyer.userList[i] && passValue == loginData_buyer.passwordList[i]) {
                    logged = true;
                    break;
                }
            }
            if (logged) {
                router.push("/Loggedin");
            } else {
                alert("Invalid details, try creating a new account.");
                router.push("/Ls");
            }
        }
    };
    return (
        <>
            <Navbar />
            <p className="pt-16 text-center text-2xl ">Log into your account :D</p>
            <div className="flex justify-center mt-24">
                <form className="mx-auto">
                    <div className="mb-4">
                        <input ref={loginRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="uname" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input ref={passRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" type="password" placeholder="Password" />
                    </div>
                    <div className="flex justify-center flex-col pt-3">
                        <button onClick={login} className="bg-blue-400 border-2 border-gray-700 transition ease-in-out hover:-translate-1 font-extrabold hover:scale-105 text-white py-2 px-4 rounded">
                            <a>Log in</a>
                        </button>
                        <div className="py-5  text-center text-gray-200 text-medium">
                            <p> Don't have an account?</p>
                        </div>
                        <button className="bg-blue-400 transition ease-in-out border-2 border-gray-700 hover:-translate-1 font-extrabold hover:scale-105 text-white py-2 px-4 rounded">
                            <Link href="/Signup">
                                <a>Create account</a>
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Ls;
export { loginData_buyer };
