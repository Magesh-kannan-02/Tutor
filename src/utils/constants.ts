export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_AUTHORIZED: "/not-authorized",
  PLAYGROUND: "/playground",
  SELECT_TEST: "/select-test",
  ONBOARDING: "/onboarding",
  FEEDBACK: "/feedback",
  REPORT: "/report",

};
export const STEPS = {
  FLUENCY: "fluency",
  VOCABULARY: "vocabulary",
  GRAMMAR: "grammar",
};
export const KEYS={
  ONBOARDING:"onboarding",
  FEEDBACK:"feedback",
  REPORT:"report"
}

export const FLOW = [
  {
    key: KEYS.ONBOARDING,
    path: ROUTES.ONBOARDING,
    pages: [] as const,
  },
  {
    key: KEYS.FEEDBACK,
    path: ROUTES.FEEDBACK,
    pages: [] as const,
  },
  {
    key: KEYS.REPORT,
    path: ROUTES.REPORT,
    pages: [STEPS.FLUENCY, STEPS.VOCABULARY, STEPS.GRAMMAR] as const,
  },
] as const;

export type StepKey = (typeof FLOW)[number]["key"];
export type PageKey<T extends StepKey> = Extract<
  (typeof FLOW)[number],
  { key: T }
>["pages"][number];
