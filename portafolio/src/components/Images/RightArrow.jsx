import React from "react";

export default function Github({ color, size, ...props }) {
  return (
    <svg fill={color} viewBox="0 0 20.633 20.633" width={size} height={size}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M15.621,9.844l-9.65-9.649C5.842,0.064,5.674,0,5.5,0C5.329,0,5.157,0.064,5.027,0.195L5.014,0.207   C4.888,0.334,4.817,0.506,4.817,0.682v4.682c0,0.178,0.071,0.348,0.197,0.471l4.481,4.482l-4.481,4.479   c-0.126,0.126-0.197,0.294-0.197,0.475v4.68c0,0.18,0.071,0.354,0.197,0.475l0.013,0.01c0.124,0.127,0.294,0.197,0.473,0.197   s0.348-0.07,0.474-0.197l9.647-9.646C15.881,10.531,15.881,10.104,15.621,9.844z"
      />
    </svg>
  );
}
