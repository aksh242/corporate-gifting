import React from 'react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import SubmissionForm from '../components/SubmissionForm';
import { Card } from '@/components/ui/card';

export default function CartPage() {
    try {
        const { cart } = useCart();

        return (
            <Layout>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
                    {(!cart || cart.length === 0) ? (
                        <div className="text-center py-8">
                            <h2 className="text-xl font-semibold mb-4">Your Cart is Empty</h2>
                            <p className="text-gray-600">Start browsing our categories to add items to your cart.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <Card className="p-6">
                                    {cart.map((item) => (
                                        <CartItem key={item.id} item={item} />
                                    ))}
                                </Card>
                            </div>
                            <div>
                                <SubmissionForm items={cart} />
                            </div>
                        </div>
                    )}
                </div>
            </Layout>
        );
    } catch (error) {
        // Fallback UI in case of context error
        return (
            <Layout>
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold mb-4">Cart Unavailable</h1>
                    <p>We're having trouble loading your cart. Please try again later.</p>
                </div>
            </Layout>
        );
    }
}
