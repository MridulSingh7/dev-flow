const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  ASK_QUESTION: "/ask-question",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
