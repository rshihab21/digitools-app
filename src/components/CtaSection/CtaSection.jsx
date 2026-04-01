
const CtaSection = () => {
    return (
        <div className="w-full bg-purple-600 py-20 px-4 text-center text-white">

            {/* Content */}
            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready To Transform Your Workflow?
                </h1>

                {/* Subtext */}
                <p className="text-sm md:text-base text-purple-100 mb-8">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">

                    {/* Primary Button */}
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium shadow-md hover:scale-105 transition duration-300">
                        Explore Products
                    </button>

                    {/* Secondary Button */}
                    <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition duration-300">
                        View Pricing
                    </button>
                </div>

                {/* Footer Text */}
                <p className="text-xs text-purple-200">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
    )
}

export default CtaSection