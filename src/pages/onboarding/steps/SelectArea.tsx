import { Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useState } from "react";

const USE_OPTIONS = [
  { label: "Technology & Engineering", icon: "working", iconClass: "w-7" },
  { label: "Finance & Business", icon: "graph", iconClass: "w-7" },
  { label: "Students & Education", icon: "graduate", iconClass: "w-7" },
  { label: "Services & Skilled Work", icon: "tools", iconClass: "w-7" },
  { label: "Marketing & Sales", icon: "aim", iconClass: "w-7" },
  { label: "Science & Healthcare", icon: "firstaid", iconClass: "w-7" },
  { label: "Media & Creativity", icon: "brush", iconClass: "w-7" },
  { label: "Currently Unemployed", icon: "search", iconClass: "w-7" },
];

interface SelectAreaProps {
  onNext?: () => void;
}

export const SelectArea = ({ onNext }: SelectAreaProps) => {
  const [selectedUse, setSelectedUse] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedUse(value);
    setTimeout(() => onNext?.(), 250); 
  };

  return (
    <div className="flex flex-col items-center gap-7 py-5 px-4">
      <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[12rem]">
        What area do you work in?
      </p>

      <div className="flex flex-col gap-4 w-full pb-16">
        {USE_OPTIONS.map((item) => {
          const isActive = selectedUse === item.label;

          return (
            <Featurecard
              key={item.label}
              textContent={item.label}
              icontype={item.icon}
              iconClassName={item.iconClass}
              allowendendContent={false}
              isactive={isActive}
              handleClick={() => handleSelect(item.label)}
              changeIconColor={false}
              className={cn(
                "py-[1rem] px-[1rem] cursor-pointer transition-all bg-content1-foreground/15",
                isActive && "bg-content1-foreground/30"
              )}
              innerclassName="!gap-5"
              textclassName="!text-content1-foreground !text-[1rem]"
            />
          );
        })}
      </div>
    </div>
  );
};
