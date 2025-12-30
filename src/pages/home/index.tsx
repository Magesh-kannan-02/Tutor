import { LayoutWithNavBar } from "@/layouts/withNavBar";
import { useState } from "react";
import { useHomeStore } from "@/store/home";
import {
  CircularProgress,
  QuickTip,
  SemiCircleProgress,
  SessionCard,
  SkillOverviewDrawer,
  RevealOnScroll,
  RewardAndProgress,
} from "@/components";
import { BackgroundBlur, Logo, RightArrowIcon } from "@/assets";

import { cn } from "@/lib/utils";

export const Home = () => {
  const { streak, xp, dailyGoal, courseProgress, user, quickTip, skills } = useHomeStore();
  const [isSkillDrawerOpen, setIsSkillDrawerOpen] = useState(false);
  const [isRewardsDrawerOpen, setIsRewardsDrawerOpen] = useState(false);
  const [rewardsTab, setRewardsTab] = useState<"streak" | "xp">("streak");

  return (
    <LayoutWithNavBar containerClassName="bg-content1 h-full relative overflow-hidden">
      <BackgroundBlur
        size={400}
        className="absolute -top-5 -left-48 z-0 pointer-events-none"
      />
      <BackgroundBlur
        size={400}
        fillOpacity={0.2}
        className="absolute -bottom-20 -right-52 pointer-events-none"
      />
      <div className="w-full h-full flex flex-col overflow-hidden ">
        {/* Header */}
        <div className="px-4 pt-6 shrink-0 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo />
              <p className="!text-content1-foreground font-bold text-body4">Logo</p>
            </div>
            <div 
              className="flex items-center gap-2 border !border-content1-100 rounded-xl px-3 py-2 cursor-pointer active:scale-95 transition-transform"
              onClick={() => {
                setRewardsTab("streak");
                setIsRewardsDrawerOpen(true);
              }}
            >
              <div className="flex items-center gap-1">
                <img src={streak.icon} alt="fire" className="w-6"/>
                <p className="text-[14px] !text-secondary-150">{streak.count} Day</p>
              </div>
              <div className="w-[1px] h-5 bg-content1-100 mx-1"></div>
              <div 
                className="flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setRewardsTab("xp");
                  setIsRewardsDrawerOpen(true);
                }}
              >
                <img src={xp.icon} alt="diamond" className="w-6"/>
                <p className="text-[14px] !text-secondary-150">{xp.count} XP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full overflow-y-auto flex flex-col gap-6 px-4 pt-6 pb-4 mb-[5.5rem]">

        <RevealOnScroll>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between">
            <p className="text-[20px] text-content1-foreground font-semibold">Welcome back, {user.name} 👋</p>
            <p className="text-[14px] text-secondary-150 font-medium">{user.level}</p>
          </div>
          <img src={user.levelBadge} alt="upper intermediate" className="w-16"/>
        </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
        <div className="flex items-center justify-between p-4 bg-content1-foreground/15 rounded-2xl">
          <div className="gap-1 flex flex-col">
            <p className="text-[20px] text-content1-foreground font-bold">Daily Goal</p>
            <p className="text-[14px] text-secondary-150 font-medium mb-3">Practice for 10 minutes</p>
            <button
              className={cn("flex-1 bg-primary-200 !text-content1 py-3 px-3 rounded-xl text-[14px] transition-transform duration-150 ease-out active:scale-95 flex items-center gap-3 w-fit")}
            >
              Start Practice Now <RightArrowIcon/>
            </button>
          </div>
          <CircularProgress
            value={dailyGoal.percentage}
            size={120}
            strokeWidth={15}
            trackColor="#3b3b3b"
            gradientTo="#63FF7F"
            gradientFrom="#035C24"
            content={
              <div className="flex flex-col items-center">
                <span className="text-[24px] font-bold text-content1-foreground">
                  {dailyGoal.current.toString().padStart(2, '0')}/{dailyGoal.target.toString().padStart(2, '0')}
                </span>
                <span className="text-[14px] text-content1-foreground/70 font-medium -mt-1">mins</span>
              </div>
            }
            counterClockwise={true}
          />
        </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
        <div className="p-4 rounded-2xl bg-content1-foreground/15 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-[20px] font-semibold text-content1-foreground">
              {courseProgress.level.replace(/ \w+\d*$/, "")} <span className="text-primary-200">{courseProgress.level.split(" ").slice(-1)[0]}</span>
            </p>
            <button className="w-10 h-10 rounded-full bg-content1-foreground/20 flex items-center justify-center pl-0.5"
            onClick={() => setIsSkillDrawerOpen(true)}>
               <RightArrowIcon fill="#000000"/>
            </button>
          </div>
          <div className="flex justify-center ">
            <SemiCircleProgress 
              value={courseProgress.percentage} 
              contentWrapperClassName="top-14"
              size={290}
              strokeWidth={40}
              trackColor="#3b3b3b"
              gradientEndColor="#63FF7F"
              gradientStartColor="#035C24"
              content={
                <div className="flex flex-col items-center">
                  <p className="text-[20px] font-semibold !text-primary-200">{courseProgress.percentage}%</p>
                  <p className=" text-secondary-150 font-medium">{courseProgress.label}</p>
                </div>
              }
            />
          </div>
        </div>
        </RevealOnScroll>

        {/* Quick Tip */}
        <RevealOnScroll delay={0.2}>
        <QuickTip
          icontype="snail"
          iconName="snail tip"
          description={
            <>
              {quickTip.description.split("'").map((part, index) =>
                index % 2 === 1 ? (
                  <span key={index} className="text-primary-200">
                    &lsquo;{part}&rsquo;
                  </span>
                ) : (
                  part
                )
              )}
            </>
          }
        />
        </RevealOnScroll>


        {/* Last Session */}
        <RevealOnScroll delay={0.2}>
        <SessionCard
          subtitle="Career Chat — Tour Guide"
          feedback="Great clarity, work on pacing."
          icontype="microphone"
          handleleftclick={() => console.log("Try Again")}
          handlerightclick={() => console.log("View Report")}
          leftButtonValue="Try Again"
          leftButtonClassname="!text-content1"
          rightButtonValue="View Report"
          rightButtonClassname="!text-content1"
        />
        </RevealOnScroll>

        <SkillOverviewDrawer
          open={isSkillDrawerOpen}
          onClose={setIsSkillDrawerOpen}
          skills={skills}
          progress={courseProgress.percentage}
          buttonText="View Results"
          
        />

        <RewardAndProgress
          open={isRewardsDrawerOpen}
          onClose={setIsRewardsDrawerOpen}
          defaultTab={rewardsTab}
        />

      </div>
      </div>
    </LayoutWithNavBar>
  );
};
