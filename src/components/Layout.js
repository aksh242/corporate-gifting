import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '../context/CartContext';

export default function Layout({ children }) {
    return (
        <CartProvider>
            <div className="min-h-screen flex flex-col bg-[#a6a297]">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
}