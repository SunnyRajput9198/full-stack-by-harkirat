export function SlidebarClass1(){
    return <div className="flex" >
        {/* w-64 means 64 width li hai h-screen means puri height of screen*/}
        {/* hidden md:block wheen goes above md, it will be block */}
        {/* delay-1000 means transition will be started after 1000ms */}
        {/* duration-1000 means transition will be for 1000ms */}
        <div className=" transition-all delay-1000  bg-red-200 md:w-96 w-24 h-screen">Sidebar</div>
{/* w-full meaans puri width lelo */}
        <div className="bg-green-800 h-screen w-full">content</div>
    </div>
}