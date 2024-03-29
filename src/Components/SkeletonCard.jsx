import React from "react";

export const SkeletonCard = () => {
  return (
    <div className="bg-[#1f213a] h-screen ">
      <div className="flex justify-around align-top animate-pulse">
        <div className="mt-40 w-1/5 h-1/3">
          <div className="bg-slate-700 h-10"></div>
          <div className="m-12 bg-slate-600 h-32 w-32 mx-auto"></div>
          <div className="m-12 bg-slate-500 h-28 w-28 mx-auto"></div>
          <div className="bg-slate-700 h-8"></div>
        </div>
        <div className="mt-40 w-1/3 h-1/3 grid grid-cols-2 gap-6 animate-pulse">
          <div className="  col-span-2 h-8 w-48 ml-9"></div>
          <div className="bg-slate-500 h-40 w-56"></div>
          <div className="bg-slate-600 h-40 w-56"></div>
          <div className="bg-slate-500 h-40 w-56"></div>
          <div className="bg-slate-600 h-40 w-56"></div>
        </div>
        <div className="mt-28 w-1/3 h-1/3 ml-2 animate-pulse">
          <div className="text-slate-200 gap-5 grid grid-cols-3">
            <div className="bg-slate-400 h-28 w-28"></div>
            <div className="bg-slate-500 h-28 w-28"></div>
            <div className="bg-slate-400 h-28 w-28"></div>
            <div className="bg-slate-200 h-28 w-28"></div>
            <div className="bg-slate-200 h-28 w-28"></div>
            <div className="bg-slate-500 h-28 w-28"></div>
            <div className="bg-slate-400 h-28 w-28"></div>
            <div className="bg-slate-500 h-28 w-28"></div>
            <div className="bg-slate-600 h-28 w-28"></div>
            <div className="bg-slate-400 h-28 w-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
