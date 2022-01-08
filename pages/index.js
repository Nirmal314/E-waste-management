/** @format */

import Head from "next/head";
import Navbar from "../components/Navbar";
import Slideshow from "./Slideshow";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <>
            <Head>
                <title>E-waste-management</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Spline+Sans&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <Slideshow />
            <div data-aos-easing="ease-in-out" data-aos="fade-left" className="mx-28 z-10 mt-[-80px]">
                <p className="text-3xl pb-10 italic ml-20">What we do?</p>
                <p className="text-md ml-20">OUR PRODUCT DEALS WITH PEOPLE WHO ARE WILLING TO DUMP THEIR E WASTE. SO THE CONCERNED AUTHORITY WOULD COLLECT THE WASTE AND PUT IT IN THE PORTAL. LATER THE PEOPLE WHO WOULD WANT TO REUSE CAN PICK IT UP FROM THE PORTAL AND THEN THE AUTHORITY CAN DELIVER THE ITEM FOR UP CYCLING. THE PROGRAMME STRESSES THE NEED FOR ADOPTING ENVIRONMENT FRIENDLY E-WASTE RECYCLING PRACTICES. THE PROGRAMME HAS ADOPTED THE BEST PRACTICES FOR E-WASTE RECYCLING AVAILABLE.</p>
            </div>
            <div data-aos-easing="ease-in-out" data-aos="fade-left" className="flex justify-start items-center mt-20 ml-10">
                <Image src="/p1.jpeg" height={200} width={500} />
                <p className="ml-16 text-xl italic">E-waste Rises 8% by Weight in 2 Years as Incomes Rise, Prices Fall</p>
            </div>
            <div data-aos-easing="ease-in-out" data-aos="fade-right" className="flex justify-start items-center mt-20 mr-10">
                <p className="ml-16 text-xl italic">Valued to be 57.3 Million Metric Tons by 2026, E-waste Management Slated for Stable Growth Worldwide</p>
                <Image src="/p2.jpeg" height={200} width={500} />
            </div>
            <div className="flex justify-center items-center mt-20 mr-10">
                <div className="p-10">
                    <Image data-aos-easing="ease-in-out" data-aos="fade-right" src="/p3.jpeg" height={300} width={400} />
                </div>
                <div className="p-10">
                    <Image data-aos-easing="ease-in-out" data-aos="fade-up" src="/p4.jpeg" height={300} width={400} />
                </div>
                <div className="p-10">
                    <Image data-aos-easing="ease-in-out" data-aos="fade-left" src="/p5.jpeg" height={300} width={400} />
                </div>
            </div>
            <div data-aos-easing="ease-in-out" data-aos="fade-right" className="flex justify-start items-center mt-20 mr-10">
                <p className="ml-16 text-xl italic text-center">Global E-waste Management Market to Reach 57.3 Million Metric Tons by 2026 Amid the COVID-19 crisis, the global market for E-waste Management estimated at 45.4 Million Metric Tons in the year 2020, is projected to reach a revised size of 57.3 Million Metric Tons by 2026, growing at a CAGR of 3.9% over the analysis period. Metals, one of the segments analyzed in the report, is projected to record a 4.2% CAGR and reach 34.6 Million Metric Tons by the end of the analysis period. After a thorough analysis of the business implications of the pandemic and its induced economic crisis, growth in the Plastic segment is readjusted to a revised 3.8% CAGR for the next 7-year period. The U.S. Market is Estimated at 14 Million Metric Tons in 2021, While China is Forecast to Reach 10.2 Million Metric Tons by 2026 The E-waste Management market in the U.S. is estimated at 14 Million Metric Tons in the year 2021. China, the world`s second largest economy, is forecast to reach a projected market size of 10.2 Million Metric Tons by the year 2026 trailing a CAGR of 3.7% over the analysis period. Among the other noteworthy geographic markets are Japan and Canada, each forecast to grow at 3.6% and 3.3% respectively over the analysis period. Within Europe, Germany is forecast to grow at approximately 3.8% CAGR.</p>
            </div>
            <Footer />
        </>
    );
}
