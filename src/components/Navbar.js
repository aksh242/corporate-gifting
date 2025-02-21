import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const { cart = [] } = useCart();

    return (
        <nav className="bg-black shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="font-bold text-red-500 text-2xl">
                        Corporate Gifts
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search gifts..."
                                className="pl-8 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 text-gray-500 font-semibold"
                            />
                            <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                        </div>

                        <Link href="/cart" className="relative">
                            <ShoppingCart className="h-6 w-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}