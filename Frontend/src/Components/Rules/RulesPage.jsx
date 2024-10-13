

const RulesPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-6 sm:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 lg:p-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-red-700">Rules and Regulations</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            This platform is dedicated to assisting in the location of missing persons through the use of AI. By accessing or using this website, you agree to comply with the following rules and regulations. These terms are intended to ensure that the platform is used responsibly, ethically, and in compliance with legal requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Eligibility and User Responsibility</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Eligibility</strong>: Users must be 18 years or older to register and use the platform.</li>
            <li><strong>Accurate Information</strong>: Users must provide accurate information. False use may result in suspension.</li>
            <li><strong>Accountability</strong>: Users are responsible for ensuring they have the legal right to upload any photos or data.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Photo Upload and AI Matching</h2>
          <p className="text-gray-700">
            When you upload a photo, our AI scans the database for matches. If no match is found, the image is stored securely for future reference. All uploads must comply with privacy laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Privacy and Data Protection</h2>
          <p className="text-gray-700">
            We comply with GDPR, CCPA, and other privacy regulations to ensure your data is protected. You can request data removal at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            5. Involvement of Law Enforcement and Authorities
          </h2>
          <p className="text-red-600 font-semibold">
            **Important Notice:**
          </p>
          <p className="text-gray-700">
            If you have information about a missing person, you must report it to local law enforcement. It is illegal to resolve missing person cases privately, including attempts to adopt or claim guardianship. All discoveries must involve law enforcement to ensure the safety and legality of the process.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Prohibited Activities</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Uploading false or misleading information is strictly prohibited.</li>
            <li>Unauthorized use or distribution of data is illegal and punishable under the law.</li>
            <li>Engaging in vigilantism is prohibited; report all findings to the authorities.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Notification System</h2>
          <p className="text-gray-700">
            The platform will notify users when a match is found. Users who upload images of missing persons will also be notified when someone searches for that person.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700">
            We do not guarantee the accuracy of AI matches. Users are responsible for verifying matches and working with law enforcement to resolve cases.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Legal Compliance</h2>
          <p className="text-gray-700">
            These terms are governed by the laws of [Country/State]. Any disputes will be resolved under the jurisdiction of local courts.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Modifications to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these rules and regulations at any time. Continued use of the platform after changes to the terms indicates acceptance of the updated terms.
          </p>
        </section>

        <div className="text-center mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
            Accept and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
