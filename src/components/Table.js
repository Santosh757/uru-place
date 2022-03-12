import React from "react";
import Item from "./Item";

const Table = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-lg">
          <th className="w-[60%] py-3 border-b">Item Name</th>
          <th className="w-[20%] py-3 border-b">Qt</th>
          <th className="w-[20%] py-3 border-b">Price</th>
        </tr>
      </thead>
      <tbody>
        <Item
          image="https://images.unsplash.com/photo-1610099167931-33655a52194b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          item="Tomato"
          weight="250gm"
          quantity="1"
          price="10"
        />
        <Item
          image="https://images.unsplash.com/photo-1610099167931-33655a52194b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          item="Tomato"
          weight="250gm"
          quantity="1"
          price="10"
        />
        <Item
          image="https://images.unsplash.com/photo-1610099167931-33655a52194b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          item="Tomato"
          weight="250gm"
          quantity="1"
          price="10"
        />
      </tbody>
    </table>
  );
};

export default Table;
