import React from 'react';
import Layout from '../../components/Layout';
import ProductGrid from '../../components/ProductGrid';
import { useRouter } from 'next/router';
import { products } from '@/data/product';

export default function CategoryPage() {
    const router = useRouter();
    const { slug } = router.query;

    const categoryProducts = products.filter(product => product.category === slug);

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 capitalize">{slug?.replace('-', ' ')}</h1>
                <ProductGrid products={categoryProducts} />
            </div>
        </Layout>
    );
}