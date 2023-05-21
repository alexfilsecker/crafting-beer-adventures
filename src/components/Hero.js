import React from "react";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <div className="py-7">
      <div className="container">
        <div className="flex justify-center items-center gap-10 sm:flex-wrap lg:flex-nowrap">
          <div className="flex-auto">
            <h1 className="  text-4xl pb-4 leading-relaxed sm:text-center lg:text-left">
              Las Chelas mas ricas que la tula de tu vieja
            </h1>

            <p className="text-sm font-thin pb-4 text-p1 lg:text-left sm:text-center">
              Pide tu avance en efectivo, te cheleamos toda la tula
            </p>

            <div className="flex gap-2">
              <input
                className="rounded-md placeholder:text-gray-400 h-10 min-w-fit p-3 text-black flex-1"
                placeholder="Give Me your email faggot"
              />
              <button className=" bg-green-600 px-4 rounded-md">
                Subscribe
              </button>
            </div>
          </div>

          <img className="w-1/2" src={logo} alt="caca" />
        </div>
      </div>
    </div>
  );
}
