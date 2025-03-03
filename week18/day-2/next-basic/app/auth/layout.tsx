
import {Navbar} from "../component/navbar";

export default function AuthLayout({childern}){
    return <div>
        <Navbar/>
        {childern}
    </div>
}