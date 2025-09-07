export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 text-sm">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-neutral-600">Effective Date: January 1, 2025</p>
      </section>

      <div className="bg-white rounded-xl border p-8 space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <p className="text-neutral-700">
                When you use our services, we collect information such as your name, email address, 
                phone number, and details about your pet(s) and travel plans. This information is 
                necessary to provide you with customized pet relocation guidance.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Usage Information</h3>
              <p className="text-neutral-700">
                We automatically collect information about how you interact with our website, 
                including pages visited, time spent, and actions taken. This helps us improve 
                our services and user experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Payment Information</h3>
              <p className="text-neutral-700">
                Payment processing is handled by Stripe. We do not store your payment card information 
                on our servers. Stripe's privacy policy governs the collection and use of payment data.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
          <ul className="space-y-2 list-disc pl-6 text-neutral-700">
            <li>Provide personalized pet relocation checklists and guidance</li>
            <li>Communicate with you about your service and support requests</li>
            <li>Process payments and manage your account</li>
            <li>Send you important updates about our services</li>
            <li>Improve our website and services based on usage patterns</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Information Sharing</h2>
          <p className="text-neutral-700 mb-4">
            We do not sell, rent, or share your personal information with third parties except in the following circumstances:
          </p>
          <ul className="space-y-2 list-disc pl-6 text-neutral-700">
            <li><strong>Service Providers:</strong> We may share information with trusted service providers who help us operate our business (e.g., email services, analytics)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            <li><strong>With Consent:</strong> When you explicitly consent to sharing your information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. Data Security</h2>
          <p className="text-neutral-700">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. Data Retention</h2>
          <p className="text-neutral-700">
            We retain your personal information for as long as necessary to provide our services 
            and comply with legal obligations. You may request deletion of your account and 
            personal information at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
          <p className="text-neutral-700 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="space-y-2 list-disc pl-6 text-neutral-700">
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Delete your personal information</li>
            <li>Restrict or object to processing of your information</li>
            <li>Data portability (receive your information in a portable format)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">7. Cookies and Tracking</h2>
          <p className="text-neutral-700">
            We use cookies and similar tracking technologies to enhance your browsing experience, 
            analyze website traffic, and understand user preferences. You can control cookie 
            settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">8. Third-Party Links</h2>
          <p className="text-neutral-700">
            Our website may contain links to third-party websites. We are not responsible for 
            the privacy practices of these external sites. We encourage you to review their 
            privacy policies before providing any information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">9. Children's Privacy</h2>
          <p className="text-neutral-700">
            Our services are not directed to children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If we become aware that we have 
            collected such information, we will take steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">10. International Transfers</h2>
          <p className="text-neutral-700">
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your information in accordance 
            with this privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">11. Changes to This Policy</h2>
          <p className="text-neutral-700">
            We may update this privacy policy from time to time. We will notify you of any 
            material changes by posting the updated policy on our website and updating the 
            effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">12. Contact Us</h2>
          <p className="text-neutral-700">
            If you have any questions about this privacy policy or our data practices, 
            please contact us at:
          </p>
          <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
            <p><strong>Email:</strong> whiskawaypets@gmail.com</p>
            <p><strong>Address:</strong> [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
}