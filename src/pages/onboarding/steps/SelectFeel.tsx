import { Iconcard, Infocard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";
import type { FeelOption } from "@/store/onboarding/types";

interface SelectFeelProps {
  onNext?: () => void;
}

export const SelectFeel = ({ onNext }: SelectFeelProps) => {
  const { feelOptions, feelSameWay, setFeelSameWay } = useOnboardingStore();

  const handleSelect = (id: FeelOption) => {
    setFeelSameWay(id);
    setTimeout(() => onNext?.(), 200);
  };

  return (
    <div className="flex flex-col items-center gap-7 px-4 pt-4">
       <RevealOnScroll>

      <p className="text-body3 font-semibold text-content1-foreground px-4 text-center leading-8" >
        Do you feel the same way?
      </p>
       </RevealOnScroll>
      <RevealOnScroll delay={0.1} y={18}>

      <Infocard
        title="I understand in my mind, but struggle to say it out loud."
        className="px-[2.7rem]"
      />
      </RevealOnScroll>
      <div className="flex flex-col gap-4 pb-10 w-full">
        {feelOptions?.map((item,index) => (
           <RevealOnScroll
            key={item.id}
            delay={0.15 + index * 0.06}
            y={20}
          >

            <Iconcard
             
              iconName={item.label}
              icontype={item.icon}
              imgIconClassName="w-10"
              handleCardClick={() => handleSelect(item.id)}
              className={cn(
                "py-10 cursor-pointer transition-all bg-content1-foreground/15",
                feelSameWay === item.id && "bg-content1-foreground/20"
              )}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

