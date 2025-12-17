import { Button, Featurecard } from "@/components";
import { useState } from "react";
import { cn } from "@/lib/utils";

const USE_OPTIONS = [
  { label: "Hard to find time", icon: "time", iconClass: "w-7" },
  { label: "Struggle to stay motivated", icon: "sleep", iconClass: "w-7" },
  { label: "Not enough practice", icon: "overfear", iconClass: "w-7" },
  { label: "Forget what I learn quickly", icon: "brain", iconClass: "w-7" },
  { label: "Nervous when speaking", icon: "fear", iconClass: "w-7" },
  { label: "Feels too complicated", icon: "brick", iconClass: "w-7" },
  { label: "Honestly, no problem. I’m good!", icon: "cool", iconClass: "w-7" },
];

interface SelectDifficultyProps {
  onNext?: () => void;
}

export const SelectDifficulty = ({ onNext }: SelectDifficultyProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);

  const toggleUse = (value: string) => {
    setSelectedDifficulty((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col items-center h-full justify-between gap-2 py-5 px-4">
      <div className="flex flex-col items-center w-full">
        <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[22rem] mb-10">
        What makes learning English difficult for you?
        </p>

        <div className="flex flex-col gap-4 w-full pb-5" >
          {USE_OPTIONS.map((item) => {
            const isActive = selectedDifficulty.includes(item.label);

            return (
              <Featurecard
                key={item.label}
                textContent={item.label}
                icontype={item.icon}
                iconClassName={item.iconClass}
                allowendendContent
                isactive={isActive}
                handleClick={() => toggleUse(item.label)}
                changeIconColor={false}
                className={cn(
                  "py-[1rem] px-[1rem] cursor-pointer transition-all gap-0 bg-content1-foreground/15",
                  isActive && "bg-content1-foreground/30"
                )}
                innerclassName="!gap-5"
                textclassName="!text-content1-foreground !text-[1rem]"
                checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50"
                checkboxIndicatorClassName="text-content1-foreground"
              />
            );
          })}
        </div>
      </div>
        {selectedDifficulty.length > 0 && (
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-xl text-content1 font-medium"
            baseClassName="!py-7 w-full mt-4"
            onClick={onNext}
          />
        )}
    </div>
  );
};
