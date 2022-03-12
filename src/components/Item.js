import React from "react";

const Item = ({ image, item, weight, quantity, price }) => {
  return (
    <tr className="text-left">
      <td className="w-[80%] py-3 flex items-center space-x-2">
        <img className="h-16 w-16 rounded-lg object-cover" src={image} alt="" />
        <div>
          <p>{item}</p>
          <p className="text-gray-500 text-sm mt-1">{weight}</p>
        </div>
      </td>
      <td className="w-[10%] py-3">{quantity}</td>
      <td className="w-[10%] py-3">₹ {price}</td>
    </tr>
  );
};

export default Item;
