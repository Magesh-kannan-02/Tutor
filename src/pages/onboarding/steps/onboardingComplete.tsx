import React from "react";
import TickImg from "@/assets/images/greenTick.png";
import CompletionGif from "@/assets/gif/completion.gif";
import { useFlowStore } from "@/store/flow";
import { Button } from "@/components";
import  DiamondImg from "@/assets/images/diamond.png";
interface OnboardingCompleteProps {
  time?: string;
  xp?:number
}

export const OnboardingComplete = ({
  time = "1 minute",
  xp = 120
}: OnboardingCompleteProps) => {
  const [showGif, setShowGif] = React.useState(true);
  const { next } = useFlowStore();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 2500); // GIF duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden ">
      {/* GIF background */}
      <img
        src={CompletionGif}
        alt="completion animation"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-700 ease-out
          ${showGif ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Content  */}
      <div className="relative z-10 h-full    flex flex-col items-center justify-between  gap-5 px-4">
        <div className="flex flex-col items-center h-full   my-auto justify-center">
          <div className="place-items-center ">

        <img src={TickImg} alt="tick" width={160} height={160}  />
        <p className="text-body4 text-center text-content1-foreground leading-snug pt-[1.25rem] ">
          👏 Nice! You just practiced for{" "}
          <span className="text-primary-200">{time}.</span>
        </p>
          </div>
         <div className="flex flex-col ">
            <p>progress bar</p>
             <div className="flex items-center gap-2">
                <img src={DiamondImg} alt="diamond" width={24} height={24} />
                <p className="text-content1-foreground text-body font-sans">+ {xp} XP</p>
                   
             </div>

         </div>
        </div>
         
        <Button
          buttonText="Continue"
          variant="secondary"
          textClassName="text-body5 !text-content1 font-medium"
          baseClassName="!py-7 w-full mb-4 transition-transform duration-75 ease-out active:scale-[0.97]"
          onClick={next}
        />
       
      </div>
    </div>
  );
};
