import React from 'react';
import { useCart } from '../context/CartContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-4">
                <div className="aspect-square relative mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover rounded-lg"
                    />
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button
                    onClick={() => addToCart(product)}
                    className="w-full"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}