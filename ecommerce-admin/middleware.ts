import {authMiddleware} from "@clerk/nextjs"
export default authMiddleware();

export const config = {
    // specific config for next authentication 
    // needed for clerk
    matcher:["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}