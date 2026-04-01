
const Steps = () => {
    const steps = [
        {
            id: "01",
            title: "Create Account",
            desc: "Sign up for free in seconds. No credit card required to get started.",
            icon: "https://i.ibb.co.com/3y9mcMgG/Group-6.png",
        },
        {
            id: "02",
            title: "Choose Products",
            desc: "Browse our catalog and select the tools that fit your needs.",
            icon: "https://i.ibb.co.com/DHWnGQtg/Group-6-1.png",
        },
        {
            id: "03",
            title: "Start Creating",
            desc: "Download and start using your premium tools immediately.",
            icon: "https://i.ibb.co.com/fYTHdStN/rocket-02.png",
        },
    ];
    return (
        <div className="container mx-auto py-16 px-6">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h2 className="text-5xl font-bold text-gray-900 mb-2">
                    Get Started In 3 Steps
                </h2>
                <p className="text-sm text-gray-500">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="relative bg-white border-gray-300 rounded-2xl border p-12 text-center shadow-sm hover:shadow-md transition"
                    >
                        <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                            {step.id}
                        </div>
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-2xl text-purple-600">
                           <img className="h-12" src={step.icon} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Steps