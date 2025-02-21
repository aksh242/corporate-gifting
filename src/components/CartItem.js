import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CartItem({ item }) {
    const { removeFromCart } = useCart();

    return (
        <div className="flex items-center gap-4 py-4 border-b last:border-b-0">
            <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-cover rounded"
            />
            <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
            </div>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
            >
                <Trash2 className="h-5 w-5" />
            </Button>
        </div>
    );
}