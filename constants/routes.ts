const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  ASK_QUESTION: "/ask-question",
  SIGN_UP: "/sign-up",
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
  QUESTION: (id: string) => `/question/${id}`,
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
