import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { ProgressBar } from "@/components";
import { RootLayout } from "@/layouts";

import { useFlowStore } from "@/store/flow";
import { FLOW } from "@/utils/constants";
import { ONBOARDING_COMPONENTS } from "./onboardingSteps";


export const Onboarding = () => {
  const { stepIndex, pageIndex, next, back } = useFlowStore();

  const totalPages = FLOW.reduce(
    (sum, step) => sum + (step.pages.length || 1),
    0
  );

  const completedPages =
    FLOW.slice(0, stepIndex).reduce(
      (sum, s) => sum + (s.pages.length || 1),
      0
    ) + pageIndex;

  const progress = (completedPages / totalPages) * 100;

  const CurrentStep = ONBOARDING_COMPONENTS[pageIndex] ?? null;
  const isLastPage = pageIndex === ONBOARDING_COMPONENTS.length - 1;

  return (
    <RootLayout containerClassName="relative h-screen bg-content1 overflow-hidden">
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

      <div className="relative z-10 w-full h-screen flex flex-col">
        {/* Header */}
        {!isLastPage && (
          <div className="sticky top-0 z-20 flex items-center gap-5 px-4 py-5 bg-background-200">
            <span className="cursor-pointer" onClick={back}>
              <LeftArrowIcon />
            </span>
            <ProgressBar value={progress} className="flex-1" />
          </div>
        )}

        {/* CONTAINER */}
        <div className="flex-1 overflow-y-auto">
          {CurrentStep && <CurrentStep onNext={next} />}
        </div>
        
      </div>
    </RootLayout>
  );
};

