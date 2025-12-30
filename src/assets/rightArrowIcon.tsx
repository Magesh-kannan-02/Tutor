import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export const RightArrowIcon = ({ height = 10,width= 6, color = "#000000", ...props }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.25 4.59259C5.25 4.69167 5.20853 4.78651 5.13477 4.85581L0.907395 8.82311C0.756233 8.96482 0.514298 8.96206 0.366767 8.81667C0.219427 8.67146 0.222485 8.43858 0.373455 8.29686L4.32048 4.59278L0.365238 0.880787C0.214076 0.738888 0.211401 0.506004 0.358549 0.36098C0.505889 0.215589 0.748016 0.212647 0.899177 0.354547L5.13477 4.32938C5.20853 4.39868 5.25 4.49352 5.25 4.59259Z"
      fill={color}
      stroke={color}
      strokeWidth={0.5}
    />
  </svg>
);
