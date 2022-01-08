/** @format */

import Image from "next/image";
import Loggednavbar from "../components/Loggednavbar";
import Footer from "../components/Footer";

function Purchase() {
    return (
        <div>
            <Loggednavbar />
            <div class="min-h-screen mt-4">
                <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/SGFold.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Samsung Galaxy Fold</span>
                            <p class="font-semibold text-xl py-2">Display problem</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Jenil</p>
                                    <p class="font-light text-sm">Email : jenil@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/fd-samsung-s7-cracked-broken-6654-001.webp" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Samsung Galaxy S7</span>
                            <p class="font-semibold text-xl py-2">Broken screen</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Dharmik</p>
                                    <p class="font-light text-sm">Email : dharmik@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/SG_ZFlip.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Samsung Galaxy Z Flip</span>
                            <p class="font-semibold text-xl py-2">Broken back and screen</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Nirmal</p>
                                    <p class="font-light text-sm">Email : nirmal@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/mi.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Xiomi 5A</span>
                            <p class="font-semibold text-xl py-2">Broken screen</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Shubham</p>
                                    <p class="font-light text-sm">Email : shubham@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/mac1.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Macbook pro</span>
                            <p class="font-semibold text-xl py-2">Broken display</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Paras</p>
                                    <p class="font-light text-sm">Email : paras@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/mac2.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Macbook air</span>
                            <p class="font-semibold text-xl py-2">Completely broken</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Tushar</p>
                                    <p class="font-light text-sm">Email : tushar@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/pc1.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">ASUS monitor</span>
                            <p class="font-semibold text-xl py-2">Broken Display</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Heal</p>
                                    <p class="font-light text-sm">Email : heal@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/pc2.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">LG monitor</span>
                            <p class="font-semibold text-xl py-2">Broken display</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Rashesh</p>
                                    <p class="font-light text-sm">Email : rashesh@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/tv1.webp" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Panasonic TV</span>
                            <p class="font-semibold text-xl py-2">Broken screen</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Nirmal</p>
                                    <p class="font-light text-sm">Email : nirmal@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/tv2.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">UFZO TV</span>
                            <p class="font-semibold text-xl py-2">Broken completely</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Raj</p>
                                    <p class="font-light text-sm">Email : raj@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/wire1.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">5 KGs of wire cables</span>
                            <p class="font-semibold text-xl py-2">Don't knwo if it works or not</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Bhavya</p>
                                    <p class="font-light text-sm">Email : Bhavya@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                        <Image class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="/wire2.jpg" height={200} width={400} />
                        <div class="p-4">
                            <span class="text-blue-600 font-normal text-base">Bunch of wires</span>
                            <p class="font-semibold text-xl py-2">Works properly</p>
                            <p class="font-light text-gray-700 text-justify line-clamp-3">Description</p>
                            <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                                <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                                <div class="flex flex-col space-y-0">
                                    <p class="font-semibold text-base">Sarthak</p>
                                    <p class="font-light text-sm">Email : sarthak@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Purchase;
