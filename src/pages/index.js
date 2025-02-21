import React from 'react';
import Layout from '../components/Layout';
import CategoryGrid from '../components/CategoryGrid';
import { categories } from '../data/categories';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Corporate Gifting Solutions</h1>
        <CategoryGrid categories={categories} />
      </div>
    </Layout>
  );
}