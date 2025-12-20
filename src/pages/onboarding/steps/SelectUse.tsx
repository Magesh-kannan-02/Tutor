import { Button, Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectUseProps {
  onNext?: () => void;
}

export const SelectUse = ({ onNext }: SelectUseProps) => {
  const { useCaseOptions, englishUseCases, toggleUseCase } =
    useOnboardingStore();

  return (
    <div className="h-full flex flex-col">
      
      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center gap-6 px-4 pt-4">
          <p className="text-body3 font-semibold text-content1-foreground text-center max-w-[20rem] leading-9">
            When do you usually use English?
          </p>

          <p className="text-secondary-150 text-h6 max-w-[18.5rem] text-center">
            Pick everything that matches you
          </p>

          <div className="flex flex-col gap-4 w-full">
            {useCaseOptions.map((item) => {
              const isActive = englishUseCases.includes(item.label);

              return (
                <Featurecard
                  key={item.label}
                  textContent={item.label}
                  icontype={item.icon}
                  iconClassName={item.iconClass}
                  allowendendContent
                  isactive={isActive}
                  handleClick={() => toggleUseCase(item.label)}
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
      {englishUseCases.length > 0 && (
        <div className="sticky bottom-0 pt-2 pb-2 bg-background-200 backdrop-blur-md px-4">
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


