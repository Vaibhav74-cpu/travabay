import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-[#001524]">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block bg-opacity-40 border border-blue-500 border-opacity-50 rounded-full px-4 py-2 mb-6">
            <p className="text-xs md:text-xs text-blue-300 tracking-wide">
              UPDATED FOR TRAVABAY HOLIDAYS PVT. LTD.
            </p>
          </div>
          
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-3">
            Privacy Policy
          </h1>
          
          <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>
              Travabay Holidays Pvt. Ltd. ("Travabay", "we", "us" or "our") understands and respects the importance of privacy for everyone who interacts with us. This Privacy Policy explains how any personal data we collect from you, or that you share with us via{' '}
              <a 
                href="https://www.travabay.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-medium" >
                https://www.travabay.com
              </a>
              {' '}(the "Website") and our offices, is processed and safeguarded. Confidentiality of information provided by you will be maintained.
            </p>
            
            <p>
              This policy applies to every person who enquires about, purchases or intends to purchase any Travabay product or service through the Website, corporate office, branch offices or preferred sales partners. By submitting your personal data or making a booking, you consent to its transfer, storage and processing as described here. If you disagree with the way we use your data, please do not use the Website or proceed with a booking.
            </p>
          </div>
        </div>

        {/* Collection and Use Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-4">
            Collection and Use of Personal Information
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
            You may be asked for information including, but not limited to: name, address, email address, telephone number, date of birth, encrypted credit/debit card details, banking details, Aadhaar, PAN, visa documentation, passport details, mobile number and professional qualifications. Travabay may also:
          </p>
          
          <ul className='list-disc pl-5 space-y-4 mb-2 text-sm'>
            <li>Maintain records of your emails, chat messages or other correspondence. Calls may be monitored or recorded for training and customer service purposes.</li>

            <li>Collect technical information about your visits (traffic data, location data, IP address, operating system and browser type) for analytics, security and advertising reporting.</li>

            <li>Collect sensitive personal data such as medical conditions, disabilities or special requirements whenever such information is necessary to arrange the services you request. Supporting medical certificates may also be stored.</li>

            <li>Use cookies and similar technologies to optimize on-site experience, troubleshoot issues and improve content relevance. The data collected through cookies is anonymous and not linked to your identity.</li>
          </ul>
          <p>All information is collected to provide the services you request, enhance user experience and conduct internal research, analysis and auditing.</p>
        </div>

        {/* Purpose Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Purpose of Collecting Personal Information
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
            The predominant purposes include:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3">
            {/* Card 1 */}
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-20 rounded-xl p-2 md:p-6 hover:bg-opacity-50 hover:border-opacity-40 transition-all duration-300">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Communicating regarding bookings, purchases and transaction status.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-20 rounded-lg p-5 md:p-6 hover:bg-opacity-50 hover:border-opacity-40 transition-all duration-300">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Sending booking confirmations, daily tour updates and itinerary changes.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-20 rounded-lg p-5 md:p-6 hover:bg-opacity-50 hover:border-opacity-40 transition-all duration-300">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Sharing verification or alert messages, resolving complaints and customer support queries.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-20 rounded-lg p-5 md:p-6 hover:bg-opacity-50 hover:border-opacity-40 transition-all duration-300">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Detecting and preventing fraudulent or criminal activity.
              </p>
            </div>
            
            {/* Card 5 */}
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-20 rounded-lg p-5 md:p-6 hover:bg-opacity-50 hover:border-opacity-40 transition-all duration-300">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Fulfilling contractual obligations between you and Travabay or you and third-party suppliers.
              </p>
            </div>
            
            {/* Card 6 */}
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-20 rounded-lg p-5 md:p-6 hover:bg-opacity-50 hover:border-opacity-40 transition-all duration-300">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Ensuring Website content is presented effectively for your device.
              </p>
            </div>
          </div>
        </div>

        {/* Cookies Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Cookies
          </h2>
          
          <div className="space-y-2 text-sm md:text-medium text-gray-300 leading-relaxed">
            <p>
              The Website uses cookies to distinguish you from other users and to ensure key features function correctly. Cookies enable you to log in without re-entering details, keep you signed in, and allow certain personalised experiences. Most cookies are session-based; some are persistent to simplify repeated visits.
            </p>
            <p>
              You can control cookie acceptance through your browser settings, though disabling cookies may affect site functionality. By using the Website, you consent to Travabay's use of cookies. Cookies may also help Travabay understand trends, administer the site, gather demographic data and measure advertising effectiveness. We may employ pixel tags to understand whether emails have been opened in order to improve communication relevance. The information gathered remains anonymous.
            </p>
          </div>
        </div>

        {/* Third-Party Links Section */}
        <div className='mb-12'>
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Third-Party Website Links
          </h2>
          
          <p className="text-sm md:text-medium text-gray-300 leading-relaxed">
            You may encounter automatic links to other websites. These websites may collect information about your visits to provide targeted advertisements. Travabay only shares your personal information with such parties if you have provided written permission. Once you click an external link, you are no longer on Travabay's Website; we are not responsible for the content, policies or practices of other websites. Please review their terms and privacy policies before sharing any data.
          </p>
        </div>


        {/* Parties with Whom Your Information Is Shared */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-3">
            Parties with Whom Your Information Is Shared
          </h2>
          
          <ul className='list-disc pl-5 space-y-4 mb-2 text-sm'>
            <li>Travabay may share information with its holding company, subsidiary companies, associate companies or any entity that controls, is controlled by or is under common control, under secure conditions.</li>

            <li>In the event of a merger, restructuring or business transfer, customer information may be transferred to the relevant entity.</li>

            <li>Personal information may be shared with service providers such as hotels, airlines, destination management companies, transport operators, banks, insurance companies, international SIM card providers, visa consulates and other partners required to fulfil your booking.</li>

            <li>Information may be disclosed to comply with court orders, ongoing judicial proceedings or other legal processes, or to defend legal claims in good faith.</li>
          </ul>

          <p>While we carefully choose partners, their use of information is governed by their own policies. We encourage you to review them when availing third-party services.</p>
        </div>


        {/* Marketing Use */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Marketing Use
          </h2>
          
          <div className="space-y-2 text-sm md:text-medium text-gray-300 leading-relaxed">
            <p>
              Travabay may contact you via phone, email or RCS with information about the products you enquired about. You can opt out of marketing communications at any time by emailing {' '}
              <a 
                href="contact@travabay.com." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium" >
                contact@travabay.com.
              </a>
            </p>
            <p>
              We may send newsletters, promotions, surveys, contest updates or special offers if you opt in. We also conduct sponsorships and giveaways; information collected during such campaigns is used to notify winners and improve services. By participating in Travabay tours, you consent to our use of photographs captured during the trip for marketing purposes.
            </p>
          </div>
        </div>


        {/* Data Protection and Security */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Data Protection and Security
          </h2>
          
          <div className="space-y-2 text-sm md:text-medium text-gray-300 leading-relaxed">
            <p>
              While information transmitted over the internet cannot be guaranteed completely secure, Travabay uses stringent security measures, including SSL encryption, secure servers and access controls to protect your data. Certain areas of the Website require sign-in credentials; please keep your password confidential. You may withdraw consent to share personal information, but doing so may limit access to services. Travabay is not liable for losses caused by unlawful interception of your data by third parties despite reasonable safeguards. </p>
          </div>
        </div>


        {/* Intellectual Property Rights */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Intellectual Property Rights
          </h2>
          
          <div className="space-y-2 text-sm md:text-medium text-gray-300 leading-relaxed">
            <p>
              Travabay's products, concepts, logo and brand name are protected by trademarks, copyrights and other intellectual property rights owned by Travabay and its directors. You agree not to use or display any Travabay IPR without prior written consent. Any infringement will attract legal consequences. </p>
          </div>
        </div>


        {/* Authenticity of Data */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Authenticity of Data 
          </h2>
          
          <div className="space-y-2 text-sm md:text-medium text-gray-300 leading-relaxed">
            <p>
              It is your responsibility to ensure the information you provide is true, accurate and complete. Travabay is not responsible for the authenticity or correctness of details submitted by users. </p>
          </div>
        </div>


        {/* Changes to this Privacy Policy */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">
            Changes to this Privacy Policy
          </h2>
          
          <div className="space-y-2 text-sm md:text-medium text-gray-300 leading-relaxed">
            <p>
              By accessing or transacting on the Website, you agree to the latest version of this Privacy Policy. Travabay may update the policy without prior notice; please refer to this page for the most recent version. If you believe we have not adhered to the policy, please email contact@travabay.com and we will respond promptly. </p>
          </div>
        </div>



      </div>
    </div>
  );
}
