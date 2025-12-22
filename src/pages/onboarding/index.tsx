import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { ProgressBar } from "@/components";
import { RootLayout } from "@/layouts";

import { useFlowStore } from "@/store/flow";
import { FLOW } from "@/utils/constants";
import { ONBOARDING_COMPONENTS } from "./onboardingSteps";
import { useNavigate } from "react-router-dom";



export const Onboarding = () => {
  const navigate = useNavigate();
  const { stepIndex, pageIndex, next, back } = useFlowStore();

  const totalPages = FLOW.reduce(
    (sum, step) => sum + (step.pages.length || 1),
    0
  );

  const Back= () => {
  if (pageIndex > 0) {
    back();
  } else {
    navigate("/select-test");
  }
}


  const completedPages =
    FLOW.slice(0, stepIndex).reduce(
      (sum, s) => sum + (s.pages.length || 1),
      0
    ) + pageIndex;

  const progress = (completedPages / totalPages) * 100;

  const CurrentStep = ONBOARDING_COMPONENTS[pageIndex] ?? null;
  const isLastPage = pageIndex === ONBOARDING_COMPONENTS.length - 1;

  return (
    <RootLayout containerClassName="relative  min-h-[100dvh]  bg-content1 overflow-hidden">
      {/* Background */}
      <BackgroundBlur
        size={400}
        className="absolute -top-5 -left-48 z-0 pointer-events-none"
      />
      <BackgroundBlur
        size={400}
        fillOpacity={0.2}
        className="absolute -bottom-20 -right-52 pointer-events-none"
      />

      <div className="relative z-10 w-full  min-h-[100dvh]  flex flex-col">
        {/* Header */}
        {!isLastPage && (
          <div className="sticky top-0 z-20 flex items-center gap-5 px-4 pt-5 pb-3">
            <span className="cursor-pointer" onClick={Back}>
              <LeftArrowIcon />
            </span>
            <ProgressBar value={progress} className="flex-1" />
          </div>
        )}

        {/* CONTAINER */}
        <div className="flex-1 overflow-y-auto 
            [mask-image:linear-gradient(to_bottom,transparent,black_20px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_00px,black)]">
          {CurrentStep && <CurrentStep onNext={next} />}
        </div>
        
      </div>
    </RootLayout>
  );
};

