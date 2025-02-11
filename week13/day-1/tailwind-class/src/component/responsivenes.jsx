// Function component to demonstrate responsiveness using Tailwind CSS
function ResponsivenessExample() {
    return (
        <div>
            {/* Header section */}
            <h2 className="mt-4 text-[30px] font-bold">
                Responsiveness Example using Tailwind
            </h2>

            {/* Responsive background color changes based on screen size */}
            {/* Here, the screen size specifies that if the screen is larger than 'xl', this color will be applied; if it's larger than 'md', this color will be applied. Unlike the usual behavior where 'xl' applies only at that size, Tailwind handles it slightly differently. */}
            <div className="xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300">
                Hi
            </div>

            {/* Grid layout with responsiveness for children */}
          
                {/*dekho if sm se chota hua to blue hoga if sm se bda to red if md se bda to pink */}   
                <div className="md:bg-pink-400 sm:bg-red-400 bg-blue-300 ">
                    Child 1
                </div>
                {/* Second child: occupies 12 columns by default, 5 columns on small screens */}
                {/* sm: is a shorthand for small screen devices (e.g., phones) */}
                {/* md: is a shorthand for medium-sized devices (e.g., tablets) */}
                {/* lg: is a shorthand for large devices (e.g., laptops) */}
                {/* xl: is a shorthand for extra large devices (e.g., desktops) */}
                {/* 2xl: is a shorthand for extra extra large devices (e.g., TVs) */}
                <div className="md:bg-blue-400 sm:bg-pink-500 bg-red-300 ">
                    Child 2
                </div>
                {/* dekho if sm se chota hua to green hoga if sm se bda to yellow if md se bda to blue*/}
                <div className="md:bg-blue-400 sm:bg-yellow-400 bg-green-300 ">
                    Child 3
                </div>
            
        </div>
    );
}

// Exporting the component to use it in other parts of the application
export default ResponsivenessExample;