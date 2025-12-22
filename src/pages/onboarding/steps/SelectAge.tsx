import { Featurecard, RevealOnScroll } from "@/components";
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
      <RevealOnScroll>
        <p className="text-body3 font-semibold text-content1-foreground pb-2 text-center">
          Pick your age group👇
        </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1} y={16}>
        <p className="text-secondary-150 text-h6  text-center mb-6 ">
          No judgments, just better recommendations for you.
        </p>
      </RevealOnScroll>

      <div className="flex flex-col gap-4 pb-4 w-full">
        {ageGroups?.map((age, index) => (
          <RevealOnScroll key={age.id} delay={0.15 + index * 0.06} y={20}>
            <Featurecard
              textContent={age.label}
              allowendendContent={false}
              isactive={ageGroup === age.id}
              handleClick={() => handleSelect(age.id)}
              className={cn(
                "cursor-pointer transition-all backdrop-blur-md bg-content1-foreground/15",
                ageGroup === age.id && "bg-content1-foreground/30"
              )}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};
