import { ReportHeader } from "./components/header";
import { RootLayout } from "@/layouts";
import { cn } from "@/lib/utils";
import { BackgroundBlur } from "@/assets";
import { Fluency } from "./fluency";
import { Button } from "@/components";
import { Pronunciation } from "./pronunciation";
import { useReportStore } from "@/store/report";

const steps = [
  {
    title: "Fluency",
    bgColour: "bg-primary-250",
    value: 50,
    description:
      "You’re improving steadily — just a little faster pacing can make your speech shine.",
    gradientFrom: "#63FF7F",
    gradientTo: "#035C24",
    content: <Fluency />,
    trackColor: "#1f3b28",
  },
  {
    title: "Pronunciation",
    bgColour: "bg-content1-150",
    value: 48,
    description:
      "Improve your pronunciation by 46% to reach A1 proficiency. Below are the sounds that need your attention.",
    gradientFrom: "#63D3FF",
    gradientTo: "#031A5C",
    trackColor: "#233147",
    content: <Pronunciation />,
  },
  {
    title: "Grammar",
    bgColour: "bg-content1-150",
    value: 48,
    description:
      "Improve your pronunciation by 46% to reach A1 proficiency. Below are the sounds that need your attention.",
    gradientFrom: "#63D3FF",
    gradientTo: "#031A5C",
    trackColor: "#233147",
    content: <Pronunciation />,
  },
];

export const Report = () => {
  const currentReportIndex = useReportStore(
    (state) => state.currentReportIndex
  );

  const setCurrentReportIndex = useReportStore(
    (state) => state.setCurrentReportIndex
  );

  const isLastStep = currentReportIndex === steps.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentReportIndex(currentReportIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentReportIndex > 0) {
      setCurrentReportIndex(currentReportIndex - 1);
    }
  };

  return (
    <RootLayout
      containerClassName={cn(
        steps[currentReportIndex]?.bgColour,
        "relative h-screen overflow-hidden py-[0.8rem] px-[1rem] flex flex-col"
      )}
    >
      {/* Backgrounds */}
      <BackgroundBlur
        className="absolute -left-96 -top-28 pointer-events-none"
        size={700}
      />
      <BackgroundBlur
        className="absolute -bottom-48 -right-96 pointer-events-none"
        size={600}
      />

      {/* Header (fixed) */}
      <ReportHeader
        onBack={handleBack}
        title={steps[currentReportIndex].title}
        value={steps[currentReportIndex].value}
        gradientFrom={steps[currentReportIndex].gradientFrom}
        gradientTo={steps[currentReportIndex].gradientTo}
        description={steps[currentReportIndex].description}
        trackColor={steps[currentReportIndex].trackColor}
      />

      {/* Content */}
      <div className="flex-1 overflow-y-auto w-[100%]">
        {steps[currentReportIndex].content}
      </div>

      {/* Footer (fixed) */}
      <div className="pt-4 w-full">
        <Button
          buttonText={isLastStep ? "Finish" : "Next"}
          variant="secondary"
          onClick={handleNext}
          disabled={isLastStep}
          textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};
