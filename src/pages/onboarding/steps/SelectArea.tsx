import { Featurecard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectAreaProps {
  onNext?: () => void;
}

export const SelectArea = ({ onNext }: SelectAreaProps) => {
  const { workAreas, workArea, setWorkArea } = useOnboardingStore();

  const handleSelect = (value: string) => {
    setWorkArea(value);
    setTimeout(() => onNext?.(), 250);
  };

  return (
    <div className="flex flex-col items-center px-4 pt-4 pb-7 gap-7">
      <RevealOnScroll>

      <p className="text-body3 font-semibold text-content1-foreground text-center px-8 leading-8">
        What area do you work in?
      </p>
      </RevealOnScroll>
      <div className="flex flex-col gap-4 w-full">
        {workAreas?.map((item,index) => {
          const isActive = workArea === item.label;

          return (
             <RevealOnScroll
              key={item.label}
              delay={0.15 + index * 0.06}
              y={20}
            >

              <Featurecard
                 
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
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
};

