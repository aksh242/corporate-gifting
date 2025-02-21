import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';

export default function CategoryGrid({ categories }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
                <Link href={`/category/${category.slug}`} key={category.slug}>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="aspect-square relative mb-4">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">{category.name}</h3>
                            <p className="text-gray-600 mt-2">{category.description}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
}