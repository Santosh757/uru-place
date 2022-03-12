import React from "react";

const ItemsCount = () => {
  return (
    <div className="flex justify-between items-center bg-white p-5 rounded-lg mb-10">
      <div className="flex">
        <img
          className="h-12 w-12 rounded-full object-cover border-2 border-green-500"
          src="https://images.unsplash.com/photo-1610099167931-33655a52194b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
        <img
          className="h-12 w-12 rounded-full object-cover border-2 border-green-500 -ml-6"
          src="https://images.unsplash.com/photo-1610099167931-33655a52194b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
        <img
          className="h-12 w-12 rounded-full object-cover border-2 border-green-500 -ml-6"
          src="https://images.unsplash.com/photo-1610099167931-33655a52194b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <p className="font-semibold">12 Items</p>
    </div>
  );
};

export default ItemsCount;
