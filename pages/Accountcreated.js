/** @format */
import Link from "next/link";

function Accountcreated() {
    return (
        <div>
            <div className="flex justify-center mt-24">
                <div className="flex flex-col text-center">
                    <h1 className="text-white text-xl font-bold">Account created !</h1>
                    <p className="text-white">Go back to login page and log into your account </p>

                    <div className="text-blue-900 underline">
                        <Link href="/Ls">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accountcreated;
