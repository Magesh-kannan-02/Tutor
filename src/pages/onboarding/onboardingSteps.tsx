import { SelectAge } from "./steps/SelectAge";
import { SelectGender } from "./steps/SelectGender";
import { SelectSkill } from "./steps/SelectSkill";
import { SelectConfidence } from "./steps/SelectConfidence";
import { SelectFeel } from "./steps/SelectFeel";
import { SelectUse } from "./steps/SelectUse";
import { SelectArea } from "./steps/SelectArea";
import { Percentage } from "./steps/percentage";
import { SelectDifficulty } from "./steps/SelectDifficulty";
import { SelectTrips } from "./steps/SelectTrips";
import { DidYouKnow } from "./steps/DidYouKnow";
import { SelectLevel } from "./steps/SelectLevel";
import { SelectContext } from "./steps/SelectContext";
import { Call } from "./steps/call";
import { LevelUp } from "./steps/LevelUp";
import { SelectGoal } from "./steps/SelectGoal";
import { SelectCorrection } from "./steps/SelectCorrection";
import { SelectFluently } from "./steps/SelectFluently";
import { LevelAnalysis } from "./steps/LevelAnalysis";
import { Ready } from "./steps/ready";
import { OnboardingComplete } from "./steps/onboardingComplete";
import { Streak } from "./steps/streak";
import { ONBOARDING_PAGES } from "@/utils/constants";

export const ONBOARDING_COMPONENTS = {
  [ONBOARDING_PAGES.AGE]: SelectAge,
  [ONBOARDING_PAGES.GENDER]: SelectGender,
  [ONBOARDING_PAGES.SKILL]: SelectSkill,
  [ONBOARDING_PAGES.CONFIDENCE]: SelectConfidence,
  [ONBOARDING_PAGES.FEEL]: SelectFeel,
  [ONBOARDING_PAGES.USE]: SelectUse,
  [ONBOARDING_PAGES.AREA]: SelectArea,
  [ONBOARDING_PAGES.PERCENT]: Percentage,
  [ONBOARDING_PAGES.DIFFICULTY]: SelectDifficulty,
  [ONBOARDING_PAGES.TRIPS]: SelectTrips,
  [ONBOARDING_PAGES.DIDYOUKNOW]: DidYouKnow,
  [ONBOARDING_PAGES.LEVEL]: SelectLevel,
  [ONBOARDING_PAGES.LEVEL_ANALYSIS]: LevelAnalysis,
  [ONBOARDING_PAGES.CONTEXT]: SelectContext,
  [ONBOARDING_PAGES.CALL]: Call,
  [ONBOARDING_PAGES.ONBOARDING_COMPLETION]: OnboardingComplete,
  [ONBOARDING_PAGES.STREAK]: Streak,
  [ONBOARDING_PAGES.LEVELUP]: LevelUp,
  [ONBOARDING_PAGES.GOAL]: SelectGoal,
  [ONBOARDING_PAGES.CORRECTION]: SelectCorrection,
  [ONBOARDING_PAGES.FLUENTLY]: SelectFluently,
  [ONBOARDING_PAGES.READY]: Ready,
};
