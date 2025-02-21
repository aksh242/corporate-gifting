import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialIcons = [
    { Icon: Facebook, name: "Facebook" },
    { Icon: Twitter, name: "Twitter" },
    { Icon: Linkedin, name: "LinkedIn" },
    { Icon: Instagram, name: "Instagram" },
];

const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/categories", label: "Categories" },
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
];

const categories = [
    { href: "/category/household", label: "Household" },
    { href: "/category/smart-wearables", label: "Smart Wearables" },
    { href: "/category/audio", label: "Audio" },
    { href: "/category/kitchen-hardware", label: "Kitchen Hardware" },
];

const contactInfo = [
    { Icon: Phone, text: "+1 (555) 123-4567" },
    { Icon: Mail, text: "info@corporategifting.com" },
    {
        Icon: MapPin,
        text: (
            <>
                123 Business Avenue,
                <br />
                Suite 100, New York,
                <br />
                NY 10001
            </>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl mb-4 text-black font-bold">Corporate Gifting</h3>
                        <p className="text-gray-600 mb-4">
                            Elevate your corporate relationships with our premium selection of thoughtful gifts.
                        </p>
                        <div className="flex space-x-4">
                            {socialIcons.map(({ Icon, name }, index) => (
                                <Icon
                                    key={index}
                                    title={name}
                                    className="h-5 w-5 text-gray-600 hover:text-gray-900 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl mb-4 text-black font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(({ href, label }, index) => (
                                <li key={index}>
                                    <Link href={href} className="text-gray-600 hover:text-gray-900">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-xl mb-4 text-black font-bold">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map(({ href, label }, index) => (
                                <li key={index}>
                                    <Link href={href} className="text-gray-600 hover:text-gray-900">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl mb-4 text-black font-bold">Contact Us</h3>
                        <ul className="space-y-4">
                            {contactInfo.map(({ Icon, text }, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <Icon className="h-5 w-5 text-gray-600" />
                                    <span className="text-gray-600">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
                    <p>© {new Date().getFullYear()} Corporate Gifting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
