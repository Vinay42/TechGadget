import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { mockNews } from '../data/mockData';
import { NewsArticle } from '../types';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const categories = Array.from(new Set(mockNews.map(article => article.category)));

  const filteredNews = selectedCategory
    ? mockNews.filter(article => article.category === selectedCategory)
    : mockNews;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest technology trends, product launches, and company news.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === ''
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <div className="mb-12">
            <Link to={`/news/${filteredNews[0].slug}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[2/1] overflow-hidden">
                  <img
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                      {filteredNews[0].category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {new Date(filteredNews[0].publishedAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={14} className="mr-1" />
                      {filteredNews[0].author}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {filteredNews[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">{filteredNews[0].excerpt}</p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:underline">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((article: NewsArticle) => (
            <Link key={article.id} to={`/news/${article.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={14} className="mr-1" />
                        {article.author}
                      </div>
                      <span className="text-primary-600 font-medium group-hover:underline flex items-center">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};