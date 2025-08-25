import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, TrendingUp, Star, ArrowRight, CheckCircle, Mail, Phone } from 'lucide-react';
import Logo from '../SgtCleanLogo.png';

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute top-8 right-8 opacity-10">
          <img src={Logo} alt="" className="h-24 w-24" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partner with <span className="text-yellow-300">Sgt. Clean Car Wash Tunes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your car wash business with personalized AI-generated music experiences. 
              Delight your customers and stand out from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partners@sgtcleancarwashtunes.com"
                className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              <a
                href="tel:+1-555-WASH-TUNE"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us: (555) WASH-TUNE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
               Why Car Wash Businesses Choose Sgt. Clean Car Wash Tunes
             </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join over 50 successful car wash locations that have revolutionized their customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Increase Customer Satisfaction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                95% customer satisfaction rate with personalized music experiences. Turn routine car washes into memorable events.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-semibold">
                +23% in customer happiness scores
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Boost Repeat Business
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Customers return 40% more often when they have a personalized experience they can share.
              </p>
              <div className="text-green-600 dark:text-green-400 font-semibold">
                +40% customer retention
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Stand Out from Competition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Be the only car wash in your area offering AI-personalized music experiences. Create viral social moments.
              </p>
              <div className="text-purple-600 dark:text-purple-400 font-semibold">
                Unique market differentiator
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Perfect Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Seamlessly integrates with your existing 4-minute wash cycles. No operational changes needed.
              </p>
              <div className="text-orange-600 dark:text-orange-400 font-semibold">
                Plug & play solution
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Viral Marketing Potential
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Customers naturally share their personalized songs on social media, creating organic marketing.
              </p>
              <div className="text-pink-600 dark:text-pink-400 font-semibold">
                Free social media buzz
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Easy Implementation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Quick setup with tablet/kiosk at your location. Full support and training included.
              </p>
              <div className="text-cyan-600 dark:text-cyan-400 font-semibold">
                Ready in 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Setup Process
            </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
               Get started with Sgt. Clean Car Wash Tunes in just 3 easy steps
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact & Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                 Reach out to our team, and we'll schedule a consultation to understand your needs and set up your Sgt. Clean Car Wash Tunes system.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Install & Train
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide the tablet/kiosk hardware and train your staff. The whole process takes less than a day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Launch & Succeed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Start offering personalized music experiences to your customers and watch satisfaction scores soar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Partnership Options
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Flexible plans designed for car wash businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Starter Package
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect for single location operations
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">1 Location setup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Tablet/kiosk included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Up to 100 songs/month</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Basic analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Phone & email support</span>
                </div>
              </div>

              <a
                href="mailto:partners@sgtcleancarwashtunes.com?subject=Starter%20Package%20Inquiry"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Pricing
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Enterprise Package
                </h3>
                <p className="text-blue-100">
                  For multi-location car wash chains
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                  <span>Unlimited locations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                  <span>All hardware included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                  <span>Unlimited songs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                  <span>Advanced analytics & insights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                  <span>Custom branding options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                  <span>24/7 priority support</span>
                </div>
              </div>

              <a
                href="mailto:partners@sgtcleancarwashtunes.com?subject=Enterprise%20Package%20Inquiry"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Car Wash Business?
          </h2>
            <p className="text-xl mb-8 text-blue-100">
             Join the revolution in customer experience. Contact us today to discuss how Sgt. Clean Car Wash Tunes 
             can help your business stand out and thrive.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partners@sgtcleancarwashtunes.com"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5 mr-2" />
              Start Partnership
            </a>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-full transition-all duration-300"
            >
              Learn More About Sgt. Clean Car Wash Tunes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PartnersPage;