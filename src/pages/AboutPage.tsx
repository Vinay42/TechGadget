import React from 'react';
import { Users, Award, Rocket, Target } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Team working together"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovating the Future of Technology
            </h1>
            <p className="text-xl text-gray-200">
              We're passionate about bringing the latest technology to our customers, providing exceptional service, and building lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                At TechGadget, we believe in making cutting-edge technology accessible to everyone. Our mission is to provide high-quality electronics and gadgets while delivering exceptional customer service and expert guidance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-primary-100 rounded-full p-2">
                    <Target className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">To empower people through technology by providing the best products and unmatched customer service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-primary-100 rounded-full p-2">
                    <Rocket className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">To be the leading technology retailer known for innovation, quality, and customer satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-success-100 rounded-full p-3">
                    <Award className="w-8 h-8 text-success-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10+ Years</p>
                    <p className="text-gray-600">of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly seek new ways to improve and bring the latest technology to our customers.',
                icon: <Rocket className="w-8 h-8 text-primary-600" />,
              },
              {
                title: 'Quality',
                description: 'We maintain the highest standards in our product selection and service delivery.',
                icon: <Award className="w-8 h-8 text-primary-600" />,
              },
              {
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do, driving our decisions and actions.',
                icon: <Users className="w-8 h-8 text-primary-600" />,
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO & Founder',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Sarah Johnson',
                role: 'Head of Technology',
                image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Michael Chen',
                role: 'Operations Director',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Emily Brown',
                role: 'Customer Success Manager',
                image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 group">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years of Experience' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '1000+', label: 'Products' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};