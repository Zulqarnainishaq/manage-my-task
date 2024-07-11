import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/','/important','/incomplete','/completed', '/signin', '/signup', '/about', '/signin/sso-callback'], // Include the SSO callback route
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)"], // Modify as needed
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

