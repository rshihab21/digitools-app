import React from 'react'
import { CiInstagram } from 'react-icons/ci'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 px-6 py-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
                <div>
                    <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
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
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>
                  <div className='flex gap-4'>
                    <span className='bg-white p-2 rounded-full text-black'><CiInstagram /></span>
                    <span className='bg-white p-2 rounded-full text-black'><FaFacebookSquare /></span>
                    <span className='bg-white p-2 rounded-full text-black'><FaXTwitter /></span>
                  </div>
                   
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 container mx-auto">
               <div className='md:flex justify-between gap-4'>
                <p> © {new Date().getFullYear()} Digitools App. All rights reserved.</p>
                <div className='md:flex gap-4'>
                    <span className='mr-2'>Privacy Policy</span>
                    <span className='mr-2'>Terms of Service</span>
                    <span>Cookies</span>
                </div>
               </div>
            </div>
        </footer>
    )
}

export default Footer