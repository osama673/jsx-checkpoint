import React from "react";
import product from "./product";

function Image() {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{ maxWidth: "300px" }}
    />
  );
}

export default Image;
