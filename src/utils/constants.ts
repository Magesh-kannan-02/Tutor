export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_AUTHORIZED: "/not-authorized",
  PROFILE_DETAILS:"/profile/:id",
};
export const FLOW = [
  {
    key: "onboarding",
    pages: ["basic", "profile", "preferences"],
  },
  {
    key: "feedback",
    pages: ["rating", "comment"],
  },
  {
    key: "report",
    pages: ["summary", "confirm"],
  },
] as const;
