import React from "react";

export default function Menu({ color, size, ...props }) {
  return (
    <svg fill={color} viewBox="0 0 384.833 384.833" width={size} height={size}>
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="277.333"
        width="384"
        height="42.667"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="170.667"
        width="384"
        height="42.667"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="64"
        width="384"
        height="42.667"
      />
    </svg>
  );
}
