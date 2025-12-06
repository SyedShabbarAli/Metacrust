import React from "react";

export default function OwnerCard({ img, name, position, alias }) {
  return (
    <div className=" w-28 h-28 md:w-28 md:h-28 lg:w-56 lg:h-56  flex flex-col items-center justify-center relative rounded-full bg-gray-200/60">
      <div className="absolute z-10">
        <img src={img} className="opacity-5 size-full " />
      </div>
      <div className="text-center w-full text-black">
        <span className="font-bold text-xs md:text-lg lg:text-xl text-black/90 ">
          {name}
        </span>
        <br />
        <p className="md:my-1 text-xs md:text-sm  ">{position}</p>
        <span className="text-xs md:text-sm  text-black/70">{alias}</span>
      </div>
    </div>
  );
}
