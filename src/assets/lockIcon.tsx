import * as React from "react";

export interface LockIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const LockIcon: React.FC<LockIconProps> = ({
  width = 32,
  height = 32,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.3}>
        <path
          d="M23.6673 10.6667H8.33398C6.67998 10.6667 5.33398 12.0127 5.33398 13.6667V26.3334C5.33398 27.9874 6.67998 29.3334 8.33398 29.3334H23.6673C25.3213 29.3334 26.6673 27.9874 26.6673 26.3334V13.6667C26.6673 12.0127 25.3213 10.6667 23.6673 10.6667ZM16.0007 22C14.896 22 14.0007 21.1047 14.0007 20C14.0007 18.8954 14.896 18 16.0007 18C17.1053 18 18.0007 18.8954 18.0007 20C18.0007 21.1047 17.1053 22 16.0007 22Z"
          fill="#6E6E6F"
        />
        <path
          d="M19.3327 8.00002C19.3327 6.15897 17.8404 4.66669 15.9993 4.66669C14.1583 4.66669 12.666 6.15897 12.666 8.00002V11.6667H10.666V8.00002C10.666 5.0544 13.0537 2.66669 15.9993 2.66669C18.945 2.66669 21.3327 5.0544 21.3327 8.00002V11.6667H19.3327V8.00002Z"
          fill="#6E6E6F"
        />
      </g>
    </svg>
  );
};
