
import {Navbar} from "../component/navbar";

export default function AuthLayout({children}: Readonly<{
    children: React.ReactNode;
  }>){
    return <div>
        <Navbar/>
        {children}
    </div>
}