import { FaCheck } from "react-icons/fa"
import { IoCheckmarkOutline } from "react-icons/io5"

const PrisingTable = () => {
    return (
        <div className="container mx-auto my-16">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h2 className="text-5xl font-bold text-gray-900 mb-2">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-sm text-gray-500 pb-5">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
                    <div className="bg-[#F9FAFC] rounded-2xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">Starter</h3>
                        <p className="text-gray-500 mb-6">For individuals</p>

                        <h1 className="text-4xl font-bold mb-6">$0<sub><span className="font-normal text-[#627382]">/Month</span></sub></h1>

                        <ul className="space-y-3 text-gray-600 mb-8">
                           <div className="flex items-center gap-2">
                            <IoCheckmarkOutline />
                             <li>Access to 10 free tools</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Basic templates</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Community support</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>1 project per month</li>
                           </div>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                            Get Started Free
                        </button>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-lg p-6 text-center transform scale-105 mt-4 md:mt-0">
                         <button className="absolute -top-4 left-45  md:-top-6 md:left-32  bg-[#FEF3C6] text-[#BB4D00] rounded-full px-4 py-2">Most Popular</button>
                        <h3 className="text-xl font-semibold mb-2">Pro</h3>
                       
                        <p className="text-purple-100 mb-6">For professionals</p>
                        <h1 className="text-4xl font-bold mb-6">$29<sub><span className="font-normal text-white">/Month</span></sub></h1>
                        <ul className="space-y-3 mb-8">
                            <div className="flex items-center gap-2">
                            <IoCheckmarkOutline />
                             <li>Access to all premium tools</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Unlimited templates</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Priority support</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Unlimited projects</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Cloud sync</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Advanced analytics</li>
                           </div>
                            
                        </ul>
                        <button className="w-full py-3 rounded-full bg-white text-purple-600 font-medium">
                            Start Pro Trial
                        </button>
                    </div>

                    <div className="bg-[#F9FAFC] rounded-2xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                        <p className="text-gray-500 mb-6">For teams</p>
                        <h1 className="text-4xl font-bold mb-6">$99<sub><span className="font-normal text-[#627382]">/Month</span></sub></h1>
                        <ul className="space-y-3 text-gray-600 mb-8">
                            <div className="flex items-center gap-2">
                            <IoCheckmarkOutline />
                             <li>Everything in Pro</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Team collaboration</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Custom integrations</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Dedicated support</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>SLA guarantee</li>
                           </div>
                           <div className="flex items-center gap-2">
                             <IoCheckmarkOutline />
                             <li>Custom branding</li>
                           </div>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PrisingTable