import { Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";
import type { AgeGroup } from "@/store/onboarding/types";

interface SelectAgeProps {
  onNext?: () => void;
}

export const SelectAge = ({ onNext }: SelectAgeProps) => {
  const { ageGroups, ageGroup, setAgeGroup } = useOnboardingStore();

  const handleSelect = (id: AgeGroup) => {
    setAgeGroup(id);

    // small delay feels natural
    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-2 px-4 w-full py-4 ">
      <p className="text-body3 font-semibold text-content1-foreground pb-2">
        Pick your age group👇
      </p>

      <p className="text-secondary-150 text-h6 max-w-[18.5rem] text-center mb-6">
        No judgments, just better recommendations for you.
      </p>

      <div className="flex flex-col gap-4 pb-4 w-full">
        {ageGroups.map((age) => (
          <Featurecard
            key={age.id}
            textContent={age.label}
            allowendendContent={false}
            isactive={ageGroup === age.id}
            handleClick={() => handleSelect(age.id)}
            className={cn(
              "cursor-pointer transition-all backdrop-blur-md bg-content1-foreground/15",
              ageGroup === age.id && "bg-content1-foreground/30"
            )}
          />
        ))}
    </div>
    </div>
  );
};
