
const PrisingTable = () => {
    return (
        <div className="container mx-auto my-16">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h2 className="text-5xl font-bold text-gray-900 mb-2">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-sm text-gray-500">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
                <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Starter</h3>
                    <p className="text-gray-500 mb-6">For individuals</p>

                    <h1 className="text-4xl font-bold mb-6">$0</h1>

                    <ul className="space-y-3 text-gray-600 mb-8">
                        <li>✔ 1 project per month</li>
                        <li>✔ Basic analytics</li>
                        <li>✔ Email support</li>
                    </ul>

                    <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                        Get Started Free
                    </button>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-lg p-6 text-center transform scale-105">
                    <h3 className="text-xl font-semibold mb-2">Pro</h3>
                    <p className="text-purple-100 mb-6">For professionals</p>

                    <h1 className="text-4xl font-bold mb-6">$29/mo</h1>

                    <ul className="space-y-3 mb-8">
                        <li>✔ Unlimited projects</li>
                        <li>✔ Cloud sync</li>
                        <li>✔ Advanced analytics</li>
                    </ul>

                    <button className="w-full py-3 rounded-full bg-white text-purple-600 font-medium">
                        Start Pro Trial
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                    <p className="text-gray-500 mb-6">For teams</p>

                    <h1 className="text-4xl font-bold mb-6">Custom</h1>

                    <ul className="space-y-3 text-gray-600 mb-8">
                        <li>✔ Dedicated support</li>
                        <li>✔ SLA guarantee</li>
                        <li>✔ Custom branding</li>
                    </ul>

                    <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PrisingTable