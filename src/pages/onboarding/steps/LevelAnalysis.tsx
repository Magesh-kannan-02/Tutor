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
    <div>
    <div className="flex flex-col items-center px-4 w-full h-full min-h-[80vh] relative">
      <div 
        style={{ 
          background: `radial-gradient(circle at 50% 20%, ${themeColor} 0%, transparent 70%)`,
          opacity: 0.15
        }} 
        className="absolute inset-0 z-0 pointer-events-none blur-3xl"
      />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <RevealOnScroll>
          <p className="text-body1 font-semibold text-content1-foreground pb-2 text-center">
            Here's your English <br /> level analysis
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.1} y={16}>
          <p className="text-secondary-150 text-xs text-center mb-6">
            This is your current level and what to improve next.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} y={24}>
          <div className="w-full rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center">
             
            {/* Badge */}
            <div className="mb-4 relative flex items-center justify-center">
              <div 
                className="absolute inset-0 w-full h-full blur-2xl opacity-40 rounded-full"
                style={{ background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)` }}
              />
              <img 
                src={levelImage} 
                alt={levelName}
                className="w-24 h-24 object-contain drop-shadow-lg relative z-10" 
              />
            </div>

            {/* Level Title */}
            <div className="text-center mb-6">
              <h3 className="text-h6 font-bold text-content1-foreground">
                {levelName} <span style={{ color: themeColor }}>{levelGrade}</span>
              </h3>
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
      <div className="sticky bottom-0 bg-background-200 px-4 pb-2 pt-5 w-full
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
