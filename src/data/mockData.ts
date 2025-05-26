import { Product, NewsArticle, Order, QuotationRequest } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions.',
    price: 349.99,
    discountPrice: 299.99,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Audio',
    tags: ['wireless', 'headphones', 'noise-cancellation', 'premium'],
    stock: 45,
    rating: 4.8,
    reviews: 234,
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Noise Cancellation': 'Active',
      'Weight': '250g',
    },
    featured: true,
    createdAt: '2023-09-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Ultra-Slim Laptop',
    description: 'Our thinnest and lightest laptop ever. Featuring a brilliant Retina display, powerful processor, and all-day battery life.',
    price: 1299.99,
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Computers',
    tags: ['laptop', 'ultrabook', 'premium', 'lightweight'],
    stock: 18,
    rating: 4.9,
    reviews: 187,
    specifications: {
      'Processor': 'Intel Core i7',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Display': '13.3" Retina',
      'Battery Life': 'Up to 20 hours',
      'Weight': '1.29kg',
    },
    featured: true,
    createdAt: '2023-10-02T14:15:00Z',
  },
  {
    id: '3',
    name: 'Smart Watch Series 5',
    description: 'Track your fitness, monitor your health, and stay connected with our latest smartwatch. Water-resistant, with GPS and cellular connectivity.',
    price: 499.99,
    discountPrice: 449.99,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Wearables',
    tags: ['smartwatch', 'fitness', 'health', 'gps'],
    stock: 31,
    rating: 4.7,
    reviews: 156,
    specifications: {
      'Display': 'Always-On Retina',
      'GPS': 'Built-in',
      'Water Resistance': '50 meters',
      'Sensors': 'Heart rate, ECG, Oxygen',
      'Battery Life': 'Up to 18 hours',
    },
    featured: true,
    createdAt: '2023-08-28T09:45:00Z',
  },
  {
    id: '4',
    name: '4K Smart TV 55"',
    description: 'Immerse yourself in stunning 4K resolution. This smart TV features HDR, built-in streaming apps, and voice control.',
    price: 899.99,
    discountPrice: 799.99,
    images: [
      'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'TV & Home Theater',
    tags: ['tv', '4k', 'smart', 'hdr'],
    stock: 12,
    rating: 4.6,
    reviews: 98,
    specifications: {
      'Resolution': '4K Ultra HD',
      'Screen Size': '55 inches',
      'HDR': 'Yes',
      'Smart Features': 'Built-in streaming, voice control',
      'Ports': 'HDMI x4, USB x2',
    },
    featured: false,
    createdAt: '2023-11-10T16:20:00Z',
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    description: 'Charge your compatible devices wirelessly with our sleek, fast-charging pad. No more tangled cables.',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Accessories',
    tags: ['wireless', 'charging', 'accessories'],
    stock: 67,
    rating: 4.5,
    reviews: 112,
    specifications: {
      'Charging Speed': 'Up to 15W',
      'Compatibility': 'Qi-enabled devices',
      'Input': 'USB-C',
      'Dimensions': '100 x 100 x 10mm',
    },
    featured: false,
    createdAt: '2023-07-05T11:50:00Z',
  },
  {
    id: '6',
    name: 'Gaming Console Pro',
    description: 'Experience next-generation gaming with stunning graphics, lightning-fast load times, and an extensive game library.',
    price: 499.99,
    images: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4225230/pexels-photo-4225230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Gaming',
    tags: ['gaming', 'console', 'entertainment'],
    stock: 8,
    rating: 4.9,
    reviews: 203,
    specifications: {
      'CPU': '8-core custom Zen 2',
      'GPU': 'Custom RDNA 2',
      'Storage': '825GB SSD',
      'Resolution': 'Up to 8K',
      'Frame Rate': 'Up to 120fps',
    },
    featured: true,
    createdAt: '2023-12-01T13:10:00Z',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-1234',
    items: [
      { product: mockProducts[0], quantity: 1 },
      { product: mockProducts[4], quantity: 2 },
    ],
    status: 'delivered',
    totalAmount: 419.97,
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'US',
      phone: '555-123-4567',
    },
    paymentMethod: 'Credit Card',
    createdAt: '2023-10-15T10:30:00Z',
    updatedAt: '2023-10-20T14:25:00Z',
    trackingNumber: 'TRK-7890123',
  },
  {
    id: 'ORD-5678',
    items: [
      { product: mockProducts[2], quantity: 1 },
    ],
    status: 'shipped',
    totalAmount: 449.99,
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'US',
      phone: '555-123-4567',
    },
    paymentMethod: 'PayPal',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-07T16:40:00Z',
    trackingNumber: 'TRK-4567890',
  },
];

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Introducing Our New Line of Premium Headphones',
    slug: 'new-premium-headphones',
    excerpt: 'Experience unparalleled sound quality with our latest headphone technology.',
    content: `
      <p>We're excited to announce our new line of premium headphones, designed to deliver the ultimate listening experience. With advanced noise cancellation, superior sound quality, and all-day comfort, these headphones set a new standard in audio technology.</p>
      
      <p>Our team of audio engineers has worked tirelessly to create a product that meets the needs of both casual listeners and audiophiles alike. The result is a pair of headphones that offers:</p>
      
      <ul>
        <li>Industry-leading active noise cancellation</li>
        <li>High-definition audio with deep bass and crystal-clear highs</li>
        <li>30-hour battery life with quick charging</li>
        <li>Premium materials for maximum comfort</li>
        <li>Intuitive touch controls</li>
      </ul>
      
      <p>Available in stores and online starting next week, these headphones represent our commitment to innovation and quality in all our products.</p>
    `,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Chen',
    category: 'Product Announcements',
    tags: ['headphones', 'audio', 'new release'],
    publishedAt: '2024-01-15T09:00:00Z',
  },
  {
    id: '2',
    title: 'Tech Trends to Watch in 2024',
    slug: 'tech-trends-2024',
    excerpt: 'From AI innovations to sustainable gadgets, here are the top tech trends for the coming year.',
    content: `
      <p>As we move into 2024, several exciting technology trends are emerging that promise to reshape how we interact with our devices and the world around us.</p>
      
      <h3>Artificial Intelligence Integration</h3>
      <p>AI is becoming more seamlessly integrated into everyday devices, offering personalized experiences and automating routine tasks. From smart home systems that learn your preferences to phones that anticipate your needs, AI is enhancing user experience across the board.</p>
      
      <h3>Sustainable Technology</h3>
      <p>With growing environmental concerns, tech companies are prioritizing sustainability. This includes using recycled materials, designing for repairability, and reducing energy consumption. Our own sustainability initiative aims to make all our packaging plastic-free by the end of the year.</p>
      
      <h3>Extended Reality</h3>
      <p>The lines between virtual and physical worlds continue to blur with advancements in AR and VR technology. These technologies are finding applications beyond gaming, including education, healthcare, and remote collaboration.</p>
      
      <h3>Health Tech Revolution</h3>
      <p>Wearable devices are evolving beyond simple fitness tracking to offer comprehensive health monitoring, with features like blood oxygen measurement, ECG capabilities, and sleep analysis becoming standard.</p>
      
      <p>Stay tuned to our blog as we explore each of these trends in more depth in the coming weeks.</p>
    `,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Johnson',
    category: 'Industry Insights',
    tags: ['trends', 'AI', 'sustainability', 'AR/VR', 'health tech'],
    publishedAt: '2024-01-10T14:30:00Z',
  },
];

export const mockQuotationRequests: QuotationRequest[] = [
  {
    id: 'QUOT-1234',
    products: [
      { product: mockProducts[1], quantity: 5 },
      { product: mockProducts[5], quantity: 2 },
    ],
    companyName: 'TechCorp Inc.',
    contactName: 'John Doe',
    email: 'john@techcorp.com',
    phone: '555-123-4567',
    message: 'We are looking to upgrade our office equipment and are interested in a bulk purchase of laptops and gaming consoles for our break room.',
    status: 'quoted',
    createdAt: '2023-12-10T11:20:00Z',
  },
  {
    id: 'QUOT-5678',
    products: [
      { product: mockProducts[3], quantity: 10 },
    ],
    companyName: 'Media Solutions LLC',
    contactName: 'Jane Smith',
    email: 'jane@mediasolutions.com',
    phone: '555-987-6543',
    message: 'We are setting up a new conference room and need smart TVs. Looking for the best price on a bulk order.',
    status: 'pending',
    createdAt: '2024-01-05T16:45:00Z',
  },
];