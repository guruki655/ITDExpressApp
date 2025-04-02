const Product = require('../model/product');

const products = [
    {
        name: 'Smartphone X',
        description: 'Latest model with advanced features',
        price: 899.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/smartphone.jpg',
        quantity: 30
    },
    {
        name: 'Running Shoes',
        description: 'Comfortable and durable running shoes',
        price: 79.99,
        category: 'Clothing',
        imageUrl: 'https://example.com/shoes.jpg',
        quantity: 50
    },
    {
        name: 'Wooden Desk',
        description: 'Sturdy wooden desk for office and home',
        price: 199.99,
        category: 'Furniture',
        imageUrl: 'https://example.com/desk.jpg',
        quantity: 20
    },
    {
        name: 'Blender Pro',
        description: 'High-speed blender for smoothies and more',
        price: 129.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://example.com/blender.jpg',
        quantity: 40
    },
    {
        name: 'Mystery Novel',
        description: 'A thrilling mystery book by top author',
        price: 14.99,
        category: 'Books',
        imageUrl: 'https://example.com/book.jpg',
        quantity: 25
    },
    {
        name: 'Gaming Mouse',
        description: 'Ergonomic mouse with programmable buttons',
        price: 59.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/mouse.jpg',
        quantity: 60
    },
    {
        name: 'Camping Tent',
        description: 'Waterproof tent for outdoor adventures',
        price: 149.99,
        category: 'Sports & Outdoors',
        imageUrl: 'https://example.com/tent.jpg',
        quantity: 15
    }
];

async function saveProducts() {
    try {
        for (let productData of products) {
            const product = new Product(productData);
            await product.save();
            console.log(`Saved product: ${product.name}`);
        }
        console.log('All products saved successfully');
    } catch (err) {
        console.error('Error saving products:', err);
    }
}

module.exports = { saveProducts };
