import React from 'react';
import { Shield, Eye, Lock, Trash2, Download, Mail } from 'lucide-react';
import Logo from '../SgtCleanLogo.png';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 right-0 opacity-5">
            <img src={Logo} alt="" className="h-16 w-16" />
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your privacy is our priority. Here's how we protect your data.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Quick Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What You Need to Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Eye className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Minimal Data Collection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We only collect your name and music preferences - nothing more.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Secure & Encrypted</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  All data is encrypted and never shared with third parties.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Trash2 className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Auto-Delete</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Songs are automatically deleted after 30 days unless saved.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Download className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Your Control</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Download your data or request deletion anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Personal Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When you create a personalized song, we collect:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>Your first name (for personalization)</li>
              <li>Music genre preference</li>
              <li>Optional mood, artist, or vibe preferences</li>
              <li>IP address (for security and analytics)</li>
              <li>Browser and device information (for compatibility)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Generated Content
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We temporarily store the AI-generated songs and associated metadata to enable:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>Playback and download functionality</li>
              <li>Sharing capabilities</li>
              <li>Quality assurance and improvement</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How We Use Your Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Song Generation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create personalized AI-generated music based on your preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Service Improvement</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Analyze aggregate usage patterns to improve our AI and user experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Business Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Understand genre popularity and usage trends (anonymized data only).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Data Protection & Security
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  🔒 Encryption
                </h3>
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  All data is encrypted in transit (HTTPS) and at rest using industry-standard AES-256 encryption.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                  🏢 Secure Storage
                </h3>
                <p className="text-green-800 dark:text-green-300 text-sm">
                  Data is stored on secure, SOC 2 compliant servers with regular security audits.
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                  ⏱️ Limited Retention
                </h3>
                <p className="text-orange-800 dark:text-orange-300 text-sm">
                  Generated songs are automatically deleted after 30 days unless you choose to save them.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  🚫 No Third-Party Sharing
                </h3>
                <p className="text-purple-800 dark:text-purple-300 text-sm">
                  We never sell, rent, or share your personal information with third parties.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Your Rights & Choices
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Data Access & Download
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  You can download all your generated songs and associated data at any time.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Data Deletion
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Request complete deletion of your data by contacting our support team. 
                  We'll permanently remove all information within 7 business days.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Opt-out of Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  While we only use anonymized data for analytics, you can opt out of 
                  all data collection beyond what's necessary for song generation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Compliance & Legal
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Sgt. Clean Car Wash Tunes complies with applicable data protection regulations including:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li><strong>GDPR</strong> - General Data Protection Regulation (EU)</li>
              <li><strong>CCPA</strong> - California Consumer Privacy Act (US)</li>
              <li><strong>COPPA</strong> - Children's Online Privacy Protection Act (Users under 13 require parental consent)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300">
              We may update this policy periodically to reflect changes in our practices or legal requirements. 
              Users will be notified of significant changes via email or website notification.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-blue-100 mb-6">
            We're here to help. Contact our privacy team with any questions or concerns.
          </p>
          <a
            href="mailto:privacy@sgtcleancarwashtunes.com"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-200"
          >
            <Mail className="h-5 w-5 mr-2" />
            privacy@sgtcleancarwashtunes.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;