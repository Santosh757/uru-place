import React from "react";

const CheckOut = () => {
  return (
    <div>
      <div className="bg-white px-5 pt-5 rounded-lg rounded-b-none">
        <div className="flex justify-between">
          <p>Item subtotal</p>
          <p>₹ 250</p>
        </div>
        <div className="flex justify-between">
          <p>Service fees</p>
          <p>₹ 20</p>
        </div>
        <div className="flex justify-between mb-5">
          <p>Estimated taxes and fees</p>
          <p>₹ 5</p>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-medium my-5">
          <p>Subtotal</p>
          <p>₹ 275</p>
        </div>
        <hr />
        <div className="py-5 text-center">
          <p className="text-gray-500">Apply coupon code</p>
        </div>
      </div>
      <div className="bg-gray-200 p-5">
        <p className="text-gray-500 mb-5">
          <span className="font-medium text-black">Service fees: </span> Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo
        </p>
        <p className="text-gray-500">
          <span className="font-medium text-black">Taxes: </span> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Magnam, nemo
        </p>
      </div>
      <button className="text-white font-semibold bg-green-500 py-3 rounded-lg w-full mt-10">
        Done
      </button>
    </div>
  );
};

export default CheckOut;
