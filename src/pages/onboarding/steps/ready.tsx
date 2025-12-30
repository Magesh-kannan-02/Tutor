import { LeftArrowIcon } from "@/assets"
import { Button, Roadmap, RevealOnScroll } from "@/components"
import { useFlowStore } from "@/store/flow";
import { useOnboardingStore } from "@/store/onboarding"

export const Ready = () => {
  const { roadmapData } = useOnboardingStore();
   const {back } = useFlowStore();

  return (
    <div className="flex flex-col h-screen overflow-hidden text-content1-foreground">

      {/* Header */}
      <div className="shrink-0 flex items-center gap-4 py-5 px-4 z-10">
        <span className="cursor-pointer" onClick={() => back()}>
          <LeftArrowIcon />
        </span>
        <RevealOnScroll>
        <p className="text-body3 font-semibold max-w-[300px] !text-center mx-auto leading-8">
          Rajinikanth, your growth roadmap is ready 🌟
        </p>
        </RevealOnScroll>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
        {/* Roadmap */}
        <RevealOnScroll delay={0.1}>
        <Roadmap className="pl-10" height={'400px'} />
        </RevealOnScroll>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-5 px-4 mt-6 pb-6">
          {roadmapData.map((card, index) => (
             <RevealOnScroll key={card.id} delay={0.2 + index * 0.1}>
            <div
              className="bg-content1-foreground/15 p-4 rounded-2xl flex flex-col justify-between gap-2 min-h-[150px]"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-h5">{card.title}</p>
                {card.icon.startsWith("/") ? (
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-6 h-6 object-contain"
                  />
                )}
              </div>

              <p className="text-content1-foreground">
                {card.description}
              </p>
            </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="shrink-0 pt-5 pb-2 px-4
            [mask-image:linear-gradient(to_bottom,transparent,black_10px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10px,black)]">
        <RevealOnScroll delay={0.6}>
          <Button
            buttonText="I'm Ready – Let's Go!"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
            // onClick={onNext}
          />
        </RevealOnScroll>
      </div>
    </div>
  )
}
