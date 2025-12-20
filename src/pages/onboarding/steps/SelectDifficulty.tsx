import { Button, Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectDifficultyProps {
  onNext?: () => void;
}

export const SelectDifficulty = ({ onNext }: SelectDifficultyProps) => {
  const {
    difficultyOptions,
    difficultyFactors,
    toggleDifficultyFactor,
  } = useOnboardingStore();

  return (
    <div className="h-full flex flex-col px-4 pt-5">
      
      {/*  CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center gap-4 ">
          <p className="text-body3 font-semibold text-content1-foreground text-center max-w-[22rem] mb-6 leading-8">
            What makes learning English difficult for you?
          </p>

          <div className="flex flex-col gap-4 w-full">
            {difficultyOptions.map((item) => {
              const isActive = difficultyFactors.includes(item.label);

              return (
                <Featurecard
                  key={item.label}
                  textContent={item.label}
                  icontype={item.icon}
                  iconClassName={item.iconClass}
                  allowendendContent
                  isactive={isActive}
                  handleClick={() => toggleDifficultyFactor(item.label)}
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
      </div>

      {/* STICKY FOOTER */}
      {difficultyFactors.length > 0 && (
        <div className="sticky bottom-0 bg-background-200 pt-3 pb-2">
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full"
            onClick={onNext}
          />
        </div>
      )}
    </div>
  );
};


