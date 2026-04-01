import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 px-6 py-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">Digitools</h2>
                    <p className="text-sm">
                        Powerful tools to help you work smarter and grow faster. Built for professionals and teams.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                        <li className="hover:text-white cursor-pointer">Updates</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Terms of Service</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Social</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Terms of Service</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Digitools App. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer