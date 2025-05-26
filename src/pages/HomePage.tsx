import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Truck, ShieldCheck, Headphones, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/products/ProductCard';
import { mockProducts, mockNews } from '../data/mockData';

export const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState(mockProducts.filter(p => p.featured));

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Latest Technology"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>


        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Discover Tomorrow's Technology Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8"
            >
              Explore our curated collection of cutting-edge gadgets and innovative tech products that will transform your digital lifestyle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" className="px-8"
                onClick={() => {
                  const section = document.getElementById("categories_shop");
                  if (section) {
                    // section.scrollIntoView({ behavior: "smooth" });
                    const yOffset = -80; // adjust for header height
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}>
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10"
                onClick={() => {
                  const section = document.getElementById("benefit_sect");
                  if (section) {
                    // section.scrollIntoView({ behavior: "smooth" });
                    const yOffset = -80; // adjust for header height
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}>
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>

        {/* <div className="absolute bottom-5 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="animate-bounce"
          >
            <ChevronRight size={32} className="text-white transform rotate-90" />
          </motion.div>
        </div> */}
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50" id='categories_shop'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of products across different categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Audio', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { name: 'Computers', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { name: 'Wearables', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { name: 'Accessories', image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
            ].map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name}`}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="h-52 md:h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg md:text-xl font-semibold text-white">{category.name}</h3>
                  <p className="text-sm text-gray-200 group-hover:underline transition-all mt-1 flex items-center">
                    Shop Now <ArrowRight size={16} className="ml-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/products" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50" id="benefit_sect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best shopping experience with quality products and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="w-12 h-12 text-primary-600" />,
                title: 'Free Shipping',
                description: 'On orders over $50'
              },
              {
                icon: <RefreshCw className="w-12 h-12 text-primary-600" />,
                title: 'Easy Returns',
                description: '30-day return policy'
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-primary-600" />,
                title: 'Secure Payments',
                description: '100% secure checkout'
              },
              {
                icon: <Headphones className="w-12 h-12 text-primary-600" />,
                title: '24/7 Support',
                description: 'Dedicated customer service'
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Link to="/news" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((article) => (
              <Link key={article.id} to={`/news/${article.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <span className="mt-auto text-primary-600 font-medium flex items-center group-hover:underline">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest updates, exclusive offers, and tech news.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-300"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};