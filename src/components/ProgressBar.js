import React from "react";

import { CheckIcon } from "@heroicons/react/solid";
import { LockClosedIcon, EyeIcon, GiftIcon } from "@heroicons/react/outline";

const ProgressBar = () => {
  return (
    <section className="flex items-center py-14 pl-8 pr-1 mb-10 min-w-[400px]">
      <div>
        <CheckIcon className="h-7 w-7 text-white p-1 bg-green-500 rounded-full" />
        <label className="absolute -ml-7 text-sm md:text-base text-green-500">
          Add to cart
        </label>
      </div>
      <div className="bg-green-500 w-[30%] h-1" />
      <div>
        <LockClosedIcon className="h-7 w-7 text-white p-1 bg-green-500 rounded-full" />
        <label className="absolute -ml-11 text-sm md:text-base">
          Place your order
        </label>
      </div>
      <div className="bg-green-500 w-[30%] h-1" />
      <div>
        <EyeIcon className="h-7 w-7 text-white p-1 bg-green-500 rounded-full" />
        <label className="absolute -ml-8 text-sm md:text-base">
          Review order
        </label>
      </div>
      <div className="bg-gray-300 w-[30%] h-1" />
      <div>
        <GiftIcon className="h-7 w-7 text-white p-1 bg-green-500 rounded-full" />
        <label className="absolute -ml-2 text-sm md:text-base">Done</label>
      </div>
    </section>
  );
};

export default ProgressBar;
