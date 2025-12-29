import { RevealOnScroll } from "@/components";
import { RadarChart } from "@/components/ui/radarchart/radarchart";
import { Button } from "@/components/ui/button/button";
import { useOnboardingStore } from "@/store/onboarding";

interface LevelAnalysisProps {
  onNext?: () => void;
}


export const LevelAnalysis = ({onNext}: LevelAnalysisProps) => {
  const {
    levelName,
    levelGrade,
    levelImage,
    radarData,
    radarLabels,
    themeColor,
  } = useOnboardingStore((state) => state.levelAnalysisData);

  return (
    <div className="flex flex-col justify-between min-h-full">
    <div className="flex flex-col items-center px-4 w-full relative py-5 flex-1">
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <RevealOnScroll>
          <p className="text-body3 font-semibold text-content1-foreground pb-5 text-center leading-8">
            Here's your English <br /> level analysis
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1} y={16}>
          <p className="text-secondary-150 text-h6  text-center mb-6 ">
            This is your current level and what to improve next.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} y={24}>
          <div className="w-full rounded-[32px] border-content1-foreground/15 border bg-content1-foreground/5 backdrop-blur-md p-5 pb-0 flex flex-col items-center">
             
            {/* Badge */}
            <div className="relative flex items-center justify-center">
              <div 
                className="absolute w-[200%] h-[200%] blur-3xl opacity-50 rounded-full -z-10"
                style={{ background: `radial-gradient(circle, ${themeColor} 20%, transparent 80%)` }}
              />
              <img 
                src={levelImage} 
                alt={levelName}
                className="w-32 h-32 object-contain drop-shadow-2xl relative z-10" 
              />
            </div>

            {/* Level Title */}
            <div className="text-center mb-6">
              <p className="text-[20px] font-semibold text-content1-foreground">
                {levelName} <span className="text-primary-200">{levelGrade}</span>
              </p>
            </div>

            {/* Chart */}
            <div className="w-full h-[300px] relative">
               <RadarChart 
                 data={radarData}
                 labels={radarLabels}
                 height="100%"
                 width="100%"
               />
            </div>

          </div>
        </RevealOnScroll>

        {/* Footer Button - Pushed to bottom or just below */}
        </div>
    </div>
      <div className="sticky bottom-0 bg-background-200 px-4 pb-2 pt-5 w-full z-50
          [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]">
        <Button
          buttonText="Get Started"
          variant="secondary"
          textClassName="text-body5 !text-content1 font-medium"
          baseClassName="!py-7 w-full transition-transform duration-75  ease-out active:scale-[0.97]"
          onClick={onNext}
        />
      </div>
    </div>
  );
};
