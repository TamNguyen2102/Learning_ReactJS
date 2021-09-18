import React from "react";

function Hero({ hernoName }) {
  if (hernoName === "Joker") {
    throw new Error("Not a hero");
  }
  return (
    <div>
      <h1>{hernoName}</h1>
    </div>
  );
}

export default Hero;
