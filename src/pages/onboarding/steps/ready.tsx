import { LeftArrowIcon } from "@/assets"
import { Button, Roadmap } from "@/components"
import tickImg from "@/assets/images/tick.png"

export const Ready = () => {
  const infoCards = [
    {
      id: "duration",
      title: "Duration",
      description: "Fast, visible results in just 3 months",
      icon: tickImg,
    },
    {
      id: "focus",
      title: "Focus on",
      description: "Business English – for professional confidence",
      icon: "/icons/target.svg",
    },
    {
      id: "goal",
      title: "Goal",
      description: "Speak naturally and confidently at work",
      icon: "/icons/goal.svg",
    },
    {
      id: "tutor",
      title: "Tutor Style",
      description: "Cheerful - like having your favorite",
      icon: "/icons/robot.svg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen text-content1-foreground">

      {/* Header */}
      <div className="flex items-center gap-4 py-5 px-4 ">
        <LeftArrowIcon />
        <p className="text-[20px] font-semibold max-w-[250px] text-center">
          Rajinikanth, your growth roadmap is ready 🌟
        </p>
      </div>

      {/* Roadmap */}
      <Roadmap className="pl-10" height={'400px'} />

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-5 px-4 mt-6">
        {infoCards.map((card) => (
          <div
            key={card.id}
            className="bg-content1-foreground/15 p-4 rounded-2xl flex flex-col justify-between gap-2 min-h-[150px]"
          >
            <div className="flex items-center justify-between">
              <p className="font-bold text-h5">{card.title}</p>
              <img
                src={card.icon}
                alt={card.title}
                className="w-6 h-6"
              />
            </div>

            <p className="text-content1-foreground">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 bg-background-200 pt-5 pb-2 px-4
            [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]">
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
            // onClick={onNext}
          />
        </div>
    </div>
  )
}
