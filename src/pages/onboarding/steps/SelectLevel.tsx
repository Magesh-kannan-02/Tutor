import { Levelcard } from "@/components";
import { useState } from "react";
import { cn } from "@/lib/utils";
import diamondImg from '@/assets/images/diamond.png'

type LevelType =
  | "beginner"
  | "intermediate"
  | "upperIntermediate"
  | "advanced";

interface SelectLevelProps {
  onNext?: () => void;
}

const LEVELS: {
  id: LevelType;
  title: string;
  description: string;
}[] = [
  {
    id: "beginner",
    title: "Beginner (A1–A2)",
    description: "I can order food & handle basics.",
  },
  {
    id: "intermediate",
    title: "Intermediate (B1)",
    description: "I can chat about daily topics.",
  },
  {
    id: "upperIntermediate",
    title: "Upper-Intermediate (B2)",
    description: "I can discuss & explain my opinions.",
  },
  {
    id: "advanced",
    title: "Advanced (C1–C2)",
    description: "I can express myself in any situation.",
  },
];

export const SelectLevel = ({ onNext }: SelectLevelProps) => {
  const [selectedLevel, setSelectedLevel] = useState<LevelType | null>(null);

  const handleSelect = (id: LevelType) => {
    setSelectedLevel(id);
    setTimeout(() => onNext?.(), 250);
  };

  return (
    <div className="flex flex-col items-center gap-6 pb-10 py-5 px-4">
      <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[20rem] mb-5">
        What’s your English level right now?
      </p>

      <div className="flex flex-col gap-4 w-full">
        {LEVELS.map((level) => {
          const isActive = selectedLevel === level.id;

          return (
            <Levelcard
              key={level.id}
              title={level.title}
              level={level.id}
              description={level.description}
              handleClick={() => handleSelect(level.id)}
              imgIconClassName="w-16"
              className={cn(
                "cursor-pointer transition-all bg-content1-foreground/15",
                isActive && "bg-content1-foreground/30"
              )}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-1 w-full justify-end pr-10">
        <img src={diamondImg} alt="diamond" className="w-6"/>
        <p className="font-semibold text-content1-foreground">+ 120 XP</p>
      </div>
    </div>
  );
};
