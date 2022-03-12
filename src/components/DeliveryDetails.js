import { PencilAltIcon } from "@heroicons/react/outline";
import React from "react";

const DeliveryDetails = () => {
  return (
    <div className="flex items-center justify-between bg-white px-10 py-5 shadow-md rounded-lg mt-10">
      <div className="w-[50%] min-w-[250px]">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Delivery Address</h3>
          <button className="text-xs px-2 text-green-500 bg-white rounded-lg border border-green-500">
            Edit
          </button>
        </div>
        <p className="text-gray-500">8502 Preston Rd. Inglewood, Maine 98380</p>
        <div className="flex items-center justify-between mt-5">
          <h3 className="font-semibold text-lg">Method</h3>
          <button className="text-xs px-2 text-green-500 bg-white rounded-lg border border-green-500">
            Edit
          </button>
        </div>
        <p className="text-gray-500">Home delivery</p>
      </div>

      <div className="px-10">
        <PencilAltIcon className="h-10 w-10 text-green-600 bg-green-100 rounded-full p-3 cursor-pointer" />
      </div>
    </div>
  );
};

export default DeliveryDetails;
