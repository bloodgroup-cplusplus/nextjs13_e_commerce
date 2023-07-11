import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

const SetupPage=()=>{
    return (
        <div className="p-4">
            {/*<Button>Click Me</Button>*/}
            <UserButton afterSignOutUrl="/"/>
            This is a protected route
        </div>
    )
}
export default SetupPage;