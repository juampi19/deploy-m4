import { Metadata } from "next";
import Image from "next/image";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { LuComputer } from "react-icons/lu";
import { MdHighQuality, MdOutlineHighQuality } from "react-icons/md";

export const metadata: Metadata = {
  title: "MyPoint - About",
  description: "MyPoint our History",
};

export default function AboutPage() {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 mt-8 p-8 justify-items-center">
      
      <div className="md:col-span-3 lg:col-span-2  lg:col-start-2 lg:col-end-4 py-5 lg:py-0">
        <h1 className="text-3xl font-bold text-pretty py-6">Welcome to MYPOINT - Your Destination for Cutting-Edge Technology!</h1>

        <p className="font-sm font-semibold text-gray-500">At MYPOINT, we are passionate about bringing you the latest and most innovative technology solutions to enhance your digital lifestyle. Whether you are a tech enthusiast, a casual user, or a professional, we have got you covered with a diverse range of products designed to elevate your experience.</p>

        <button className="mt-8 bg-slate-800 hover:bg-slate-900 px-6 py-2 text-white font-semibold text-lg rounded-sm transition w-full lg:w-auto">Learn More</button>
      </div>

        <div className="col-span-2 lg:col-start-5 lg:col-end-7">
          <Image 
            alt="about image"
            src={'/img/image-about.jpg'}
            height={800}
            width={800}
            loading="lazy"
            className="rounded-md w-full h-full object-cover object-top"
          />
        </div>
    </div>

    <section
      className="relative bg-[url(/img/hero-about.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 h-auto lg:px-8 text-center">

        <h2 className="text-white text-2xl font-bold my-3">Our Vision</h2>

        <p className="text-white/85 font-semibold text-lg text-pretty">At MYPOINT, we envision a world where technology seamlessly integrates into every aspect of daily life, making tasks easier, connections stronger, and experiences richer. We strive to be at the forefront of this digital revolution, offering products that not only meet but exceed your expectations.</p>
      </div>
    </section>

    <div className="py-16 px-2">
        <h2 className="text-lg sm:text-2xl text-center font-semibold mb-5">Why choose MYPOINT?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-10 md:max-w-5xl mx-auto">
            <div className="bg-slate-900 px-2 py-4 rounded-md flex flex-col items-center shadow-sm gap-2">
              <MdHighQuality size={50} className="text-white"/>
              <p className="text-sm text-gray-500 text-center text-pretty font-semibold">We source our products from trusted manufacturers known for their commitment to quality, ensuring that every purchase meets our rigorous standards of excellence.</p>
            </div>

            <div className="bg-gray-200 px-2 py-4 rounded-md flex flex-col items-center shadow-sm gap-2">
              <FaPersonCircleCheck size={50} className="text-slate-900"/>
              <p className="text-sm text-slate-900 text-center text-pretty font-semibold">Your satisfaction is our top priority. We strive to deliver a seamless shopping experience, from browsing our catalog to receiving your order, with prompt shipping, secure payment options, and responsive customer support.</p>
            </div>

            <div className="bg-slate-900 px-2 py-4 rounded-md flex flex-col items-center shadow-sm gap-2">
              <LuComputer size={50} className="text-white"/>
              <p className="text-sm text-gray-500 text-center text-pretty font-semibold">Stay ahead of the curve with MYPOINT dedication to innovation. We are constantly exploring the latest trends and emerging technologies to bring you cutting-edge products that push the boundaries of what is possible.</p>
            </div>
        </div>
    </div>
    </>
  );
}