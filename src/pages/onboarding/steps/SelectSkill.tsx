import { Skillcard, Button } from "@/components";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectSkillProps {
  onNext?: () => void; //next page
}

export const SelectSkill = ({ onNext }: SelectSkillProps) => {
  const { skills, selectedSkills, toggleSkill } = useOnboardingStore();

  return (
    <div className="pt-4 min-h-full flex flex-col">
      <div className="flex-1 px-4">
        <div className="flex flex-col items-center gap-12">
          <p className="text-body3 font-semibold text-content1-foreground max-w-[17rem] text-center leading-8">
            What English skill do you want to boost?
          </p>

          <div className="grid grid-cols-2 gap-4 w-full auto-rows-fr pb-6">
            {skills.map((skill) => (
              <Skillcard
                key={skill.id}
                title={skill.title}
                icontype={skill.icon}
                imgIconClassName="w-12 h-12"
                isactive={selectedSkills.includes(skill.id)}
                handleClick={() => toggleSkill(skill.id)}
                className="h-full cursor-pointer transition-all bg-content1-foreground/15"
              />
            ))}
          </div>
        </div>
      </div>

      {/*FOOTER BUTTON */}
      {selectedSkills.length > 0 && (
        <div className="sticky bottom-0 bg-background-200 backdrop-blur-md pt-5 pb-2 px-4
            [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]">
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
            onClick={onNext}
          />
        </div>
      )}  
    </div>
  );
};

