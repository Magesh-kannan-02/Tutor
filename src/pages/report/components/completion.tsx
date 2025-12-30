import Lottie from "lottie-react";

import CompletionAnimation from "@/assets/lottie/Completion.json";

import { iconMapping } from "@/utils";
interface BadgeProps {
  id?: string;
  name: string;
  badgeType: string;
  description: string;
}
export const Badge = ({ id, name, badgeType, description }: BadgeProps) => {
  const Icon = iconMapping[badgeType || ""];
  return (
    <div id={id} className="fixed inset-0 overflow-hidden">
      {/* Content (below Lottie) */}
      <div className="relative z-10 h-full gap-[1.375rem] my-auto flex flex-col items-center justify-center ">
        <img
          src={Icon?.icon as string}
          alt=""
          width={244}
          height={244}
          className="py-4"
        />
        <p className="text-body3 font-semibold text-content1-foreground text-center px-6 leading-tight">
          {name}
        </p>
        <p className="!text-body5 text-secondary-150 text-center px-8 !leading-snug">
          {description}
        </p>
      </div>

      {/* Lottie Overlay (on top) */}
      <Lottie
        animationData={CompletionAnimation}
        loop={false}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        className="absolute inset-0 z-20 pointer-events-none"
      />
    </div>
  );
};
