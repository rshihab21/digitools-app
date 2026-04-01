
const Stats = () => {
    return (
        <div className="w-full py-16 bg-gradient-to-r from-violet-600 to-purple-600">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-white">

                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-bold">50K+</div>
                        <div className="text-lg md:text-xl text-white/80 mt-2 font-medium">Active Users</div>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/30"></div>

                  
                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-bold">200+</div>
                        <div className="text-lg md:text-xl text-white/80 mt-2 font-medium">Premium Tools</div>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/30"></div>

                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-bold">4.9</div>
                        <div className="text-lg md:text-xl text-white/80 mt-2 font-medium">Rating</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats