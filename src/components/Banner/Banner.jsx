import bannerImg from "../../assets/banner.png"
import play from "../../assets/Play.png"
const Banner = () => {
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-6xl font-extrabold leading-18">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity 
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary rounded-full">Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full"><img src={play} alt="" /> Watch Video</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner