import bannerImg from "../../assets/banner.png"
import play from "../../assets/Play.png"
const Banner = () => {
    return (
        <div className=" min-h-screen">
            <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-6">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        New: AI-Powered Tools Available
                    </div>
                    <h1 className="text-[52px] font-bold text-gray-800 leading-[60px] mb-6">
                        Supercharge Your <br /> Digital Workflow
                    </h1>
                    <p className="text-gray-500 mb-8  text-lg leading-relaxed">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. Explore Products
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">

                        <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-full shadow-md">
                            Explore Products
                        </button>

                        <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition">
                            <span className="text-sm"><img src={play} alt="playicon" /></span>
                            Watch Demo
                        </button>

                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="rounded-2xl shadow-lg">
                        <img
                            src={bannerImg}
                            alt="hero"
                            className="rounded-xl object-cover max-w-full"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner