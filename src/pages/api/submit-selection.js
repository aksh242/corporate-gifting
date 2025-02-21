// pages/api/submit-selection.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const data = req.body;
        // Implement your email sending logic here
        // You can use libraries like nodemailer or a service like SendGrid

        res.status(200).json({ message: 'Submission successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error processing submission' });
    }
}