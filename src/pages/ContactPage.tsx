import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mt-1">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      1234 Tech Avenue<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mt-1">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1-555-123-4567" className="hover:text-primary-600">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mt-1">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@techgadget.com" className="hover:text-primary-600">
                        info@techgadget.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mt-1">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0637507774103!2d-122.41941658468186!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1565277444772!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    error={errors.name?.message}
                    {...register('name', { required: 'Name is required' })}
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    error={errors.email?.message}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    error={errors.phone?.message}
                    {...register('phone', {
                      pattern: {
                        value: /^[0-9-+\s()]*$/,
                        message: 'Invalid phone number',
                      },
                    })}
                  />
                  
                  <Input
                    label="Subject"
                    error={errors.subject?.message}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className={`block w-full rounded-md shadow-sm ${
                      errors.message
                        ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
                        : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  rightIcon={<Send size={18} />}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: 'What are your shipping options?',
                    answer: 'We offer standard (5-7 business days) and express (2-3 business days) shipping options. Free shipping is available for orders over $50.',
                  },
                  {
                    question: 'What is your return policy?',
                    answer: 'We accept returns within 30 days of purchase. Items must be unused and in their original packaging.',
                  },
                  {
                    question: 'Do you offer international shipping?',
                    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.',
                  },
                ].map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};