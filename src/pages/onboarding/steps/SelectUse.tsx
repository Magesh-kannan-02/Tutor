import { Button, Featurecard } from "@/components";
import { useState } from "react";
import { cn } from "@/lib/utils";

const USE_OPTIONS = [
  { label: "Reading news/books", icon: "study", iconClass: "w-7" },
  { label: "Watching shows/movies", icon: "computer", iconClass: "w-7" },
  { label: "Listening to music", icon: "earbuds", iconClass: "w-7" },
  { label: "At work or study", icon: "working", iconClass: "w-7" },
  { label: "Talking with people", icon: "message", iconClass: "w-7" },
  { label: "Rarely", icon: "monkey", iconClass: "w-7" },
];

interface SelectUseProps {
  onNext?: () => void;
}

export const SelectUse = ({ onNext }: SelectUseProps) => {
  const [selectedUse, setSelectedUse] = useState<string[]>([]);

  const toggleUse = (value: string) => {
    setSelectedUse((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col items-center h-full justify-between py-5 px-4">
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[20rem]">
          When do you usually use English?
        </p>

        <p className="text-secondary-150 text-sm max-w-[18.5rem] text-center mb-4">
          Pick everything that matches you
        </p>

        <div className="flex flex-col gap-4 w-full pb-16" >
          {USE_OPTIONS.map((item) => {
            const isActive = selectedUse.includes(item.label);

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
        {selectedUse.length > 0 && (
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
