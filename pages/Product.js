/** @format */

import { useRouter } from "next/router";

function Product() {
    const router = useRouter();
    const event = () => {
        router.push("/Loggedin");
    };
    return (
        <div>
            <div className="flex flex-col mt-[25%]">
                <h1 className="text-3xl font-bold italic text-center">Your Product has been uploaded successfully.</h1>
                <h5 className="text-center pt-4">
                    Click to{" "}
                    <a className="text-blue-900 cursor-pointer underline" onClick={event}>
                        here
                    </a>{" "}
                    to go to homepage.
                </h5>
            </div>
        </div>
    );
}

export default Product;
