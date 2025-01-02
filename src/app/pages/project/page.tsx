"use client";

import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "../../component/ui/movingcards";
import Aero from "../../../../public/images/aerohtaviation1.png";



const Project=()=> {
  return (
    <div id="project">
      
      <section className="bg-black dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl dark:text-white">Portfolio
        </h1>

        {/* <p className="mt-4 text-center text-gray-400 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p> */}


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
             <a href="https://www.aerohtaviation.com/">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('/images/aerohtaviation1.png')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Aero HT Aviation (Dubai Aviation Company Website)</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Visit Site</p>
                </div>
            </div>
            </a>

<a href="http://ramair.in/">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('/images/ramair.png')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Ram Air (Aviation Company Website)</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Visit Site</p>
                </div>
            </div>
            </a>

<a href="http://www.victorsolution.in/">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('/images/victorSolution.png')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Victor Solution (IT Company)</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Visit Site</p>
                </div>
            </div>
            </a>

<a href="https://www.aerohtaviation.com/">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('/images/ashtak.png')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Ashtak Infocom (IT Company)</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Visit Site</p>
                </div>
            </div>
            </a>

<a href="https://manisharya-racing-car.netlify.app/">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('/images/race.png')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Racing Car Game</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Visit Game</p>
                </div>
            </div>
            </a>

<a href="https://manisharya-chess-game.netlify.app/">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage:"url('/images/chess.png')"}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Chess Game</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Visit Game</p>
                </div>
            </div>
            </a>
        </div>
    </div>
</section>

    </div>
  )
}

export default Project;