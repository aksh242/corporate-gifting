import React from 'react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function SubmissionForm({ items }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // In a real application, you would send this to your backend
        const submissionData = {
            ...formData,
            items: items.map(item => ({
                name: item.name,
                category: item.category,
                id: item.id
            }))
        };

        // Example API call (implement your own endpoint)
        try {
            const response = await fetch('/api/submit-selection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                // Handle success
                alert('Your selection has been submitted successfully!');
            }
        } catch (error) {
            console.error('Error submitting selection:', error);
        }
    };

    return (
        <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Submit Selection</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Input
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <Input
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <Textarea
                        placeholder="Additional Message (Optional)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                    />
                </div>
                <Button type="submit" className="w-full">
                    Submit Selection
                </Button>
            </form>
        </Card>
    );
}