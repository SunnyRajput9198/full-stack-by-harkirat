import { Input } from "../component/input";
import { Button } from "../component/button";
export function SignUp() {
    // this div  will horizantally and vertically center the content
    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input placeholder="Username" />
            <Input placeholder="password" />
            <div className="flex justify-center pt-4">
                <Button loading={false} variant="primary" text="Sign Up" fullWidth={true} />
            </div>
        </div>
    </div>
}