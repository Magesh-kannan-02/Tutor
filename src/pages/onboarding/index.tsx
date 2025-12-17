import { useState } from "react";
import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { SelectAge } from "./steps/SelectAge";
import { SelectGender } from "./steps/SelectGender";
import { ProgressBar } from "@/components";
import { SelectSkill } from "./steps/SelectSkill";
import { SelectConfidence } from "./steps/SelectConfidence";
import { SelectFeel } from "./steps/SelectFeel";
import { SelectUse } from "./steps/SelectUse";
import { SelectArea } from "./steps/SelectArea";
import { Percentage } from "./steps/percentage";
import { SelectDifficulty } from "./steps/SelectDifficulty";
import { SelectTrips } from "./steps/SelectTrips";
import { DidYouKnow } from "./steps/DidYouKnow";
import { SelectLevel } from "./steps/SelectLevel";
import { SelectContext } from "./steps/SelectContext";

export const Onboarding = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-background-200 w-full h-screen overflow-y-auto flex flex-col gap-5">
    <BackgroundBlur
      size={400}
      className="fixed -top-5 -left-48 pointer-events-none"
    />
    <BackgroundBlur
      size={400}
      fillOpacity={0.2}
      className="fixed -bottom-20 -right-52 pointer-events-none"
    />

    <div className="relative z-10 flex gap-5 items-center pr-9 py-5 px-4">
      <span
        className="cursor-pointer"
        onClick={() => step > 1 && setStep(step - 1)}
      >
        <LeftArrowIcon />
      </span>
      <ProgressBar value={(step / 15) * 100} className="flex-1" />
    </div>

    {step === 1 && <SelectAge onNext={() => setStep(2)} />}
    {step === 2 && <SelectGender onNext={() => setStep(3)} />}
    {step === 3 && <SelectSkill onNext={() => setStep(4)} />}
    {step === 4 && <SelectConfidence onNext={() => setStep(5)} />}
    {step === 5 && <SelectFeel onNext={() => setStep(6)} />}
    {step === 6 && <SelectUse onNext={() => setStep(7)}/>}
    {step === 7 && <SelectArea onNext={() => setStep(8)}/>}
    {step === 8 && <Percentage onNext={() => setStep(9)}/>}
    {step === 9 && <SelectDifficulty onNext={() => setStep(10)}/>}
    {step === 10 && <SelectTrips onNext={() => setStep(11)}/>}
    {step === 11 && <DidYouKnow onNext={() => setStep(12)}/>}
    {step === 12 && <SelectLevel onNext={() => setStep(13)}/>}
    {step === 13 && <SelectContext onNext={() => setStep(14)}/>}
  </div>

  );
};
