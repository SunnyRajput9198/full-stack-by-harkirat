import { SidebarItem } from "./sidebaritem"
import { TwitterIcon } from "../icons/twittericon"
import { YoutubeIcon } from "../icons/youtubeicon"
import { Logo } from "../icons/logo"

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-4 text-purple-700">
                <Logo />
            </div>
            Brainly
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="twitter" icon={<TwitterIcon />} />
            <SidebarItem text="youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}