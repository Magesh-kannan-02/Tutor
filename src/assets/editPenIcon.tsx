import * as React from "react";

export interface EditIconProps extends React.SVGProps<SVGSVGElement> {}

export const EditPenIcon = React.forwardRef<SVGSVGElement, EditIconProps>(
  ({ width = 19, height = 19, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 19 19"
        fill="none"
        className={className}
        {...props}
      >
        <path
          d="M16.8287 6.7665L18.0487 5.5465C19.3157 4.2795 19.3157 2.2175 18.0487 0.95C17.4352 0.337 16.6197 0 15.7502 0C14.8807 0 14.0647 0.3375 13.4517 0.9505L12.2322 2.17L16.8287 6.7665ZM11.1717 3.2305L2.13723 12.265C1.94473 12.4575 1.79823 12.695 1.71323 12.9525L0.0382317 18.013C-0.0512683 18.282 0.0192316 18.5785 0.219732 18.779C0.363232 18.922 0.554232 18.9985 0.750232 18.9985C0.829232 18.9985 0.908732 18.986 0.986232 18.9605L6.04523 17.285C6.30373 17.2 6.54173 17.0535 6.73423 16.8605L15.7682 7.8265L11.1717 3.2305Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
