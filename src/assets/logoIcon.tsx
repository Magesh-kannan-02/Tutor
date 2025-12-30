import React from "react";

export interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  width = 41,
  height = 48,
  fill = "#73CD03",
  className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M19.9969 4.92641V23.5084L15.6613 21.0884C7.96338 16.767 3.18534 8.72923 3.18534 0H0V21.2613C0 28.1755 4.07017 34.5712 10.5294 37.5962L20.0854 42.0905V23.5084L24.421 25.9284C32.119 30.2498 36.897 38.2876 36.897 47.0168H40.0823V25.7555C40.0823 18.8413 36.0122 12.4456 29.553 9.42065L19.9969 4.92641Z"
        fill={fill}
      />
    </svg>
  );
};
