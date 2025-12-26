import { Iconcard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";
import type { Gender } from "@/store/onboarding/types";

interface SelectGenderProps {
  onNext?: () => void;
}

export const SelectGender = ({ onNext }: SelectGenderProps) => {
  const { genders, gender, setGender } = useOnboardingStore();

  const handleSelect = (id: Gender) => {
    setGender(id);

    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-16 py-4 px-4">
      <RevealOnScroll>
        <p className="text-body3 font-semibold text-content1-foreground pb-2 text-center">
          What is your gender?
        </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1} y={16}>
        <p className="text-secondary-150 text-h6  text-center mb-10">
          This helps us personalize your experience.
        </p>
      </RevealOnScroll>

      {genders?.map((item, index) => (
        <RevealOnScroll  key={item.id} delay={0.15 + index * 0.06} y={20}>
          <Iconcard
            key={item.id}
            iconName={item.label}
            icontype={item.icon}
            handleCardClick={() => handleSelect(item.id)}
            className={cn(
              "cursor-pointer bg-content1-foreground/15 mb-3 ",
              gender === item.id && "bg-content1-foreground/30"
            )}
          />
        </RevealOnScroll>
      ))}
    </div>
  );
};
