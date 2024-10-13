import { useState } from "react";

const ReportMissing = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactAbout: '',
    contactRelateTo: '',
    details: '',
    email: '',
    phone: '',
    contactPermission: false,
    preferredContact: '',
    urgentConfirmation: false,
    date: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to the server
    console.log(formData);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Report a Missing Person</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Your Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="You may leave this blank if you wish to remain anonymous"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Contact About */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Who are you contacting us about? (required)</label>
            <input
              type="text"
              name="contactAbout"
              placeholder="E.g. a specific case, or your own family member"
              value={formData.contactAbout}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Contact Relate To */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What does your contact relate to? (required)</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  id="missingPerson"
                  name="contactRelateTo"
                  type="radio"
                  value="A missing person"
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="missingPerson" className="ml-3 block text-sm text-gray-700">
                  A missing person
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="unidentifiedPerson"
                  name="contactRelateTo"
                  type="radio"
                  value="An unidentified person"
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="unidentifiedPerson" className="ml-3 block text-sm text-gray-700">
                  An unidentified person
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="lostContact"
                  name="contactRelateTo"
                  type="radio"
                  value="Someone you've lost contact with"
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="lostContact" className="ml-3 block text-sm text-gray-700">
                  Someone you&apos;ve lost contact with
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="somethingElse"
                  name="contactRelateTo"
                  type="radio"
                  value="Something else"
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="somethingElse" className="ml-3 block text-sm text-gray-700">
                  Something else
                </label>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What would you like to tell us? (required)</label>
            <textarea
              name="details"
              rows="4"
              placeholder="Please include as much detail as possible"
              value={formData.details}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email (required)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Contact Permission */}
          <div className="flex items-center">
            <input
              id="contactPermission"
              name="contactPermission"
              type="checkbox"
              checked={formData.contactPermission}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor="contactPermission" className="ml-3 block text-sm text-gray-700">
              Can we contact you if we need to, to ask some more questions?
            </label>
          </div>

          {/* Preferred Method of Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Your preferred method of contact</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  id="emailPreferred"
                  name="preferredContact"
                  type="radio"
                  value="email"
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="emailPreferred" className="ml-3 block text-sm text-gray-700">Email</label>
              </div>
              <div className="flex items-center">
                <input
                  id="phonePreferred"
                  name="preferredContact"
                  type="radio"
                  value="phone"
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="phonePreferred" className="ml-3 block text-sm text-gray-700">Phone</label>
              </div>
              <div className="flex items-center">
                <input
                  id="dontMind"
                  name="preferredContact"
                  type="radio"
                  value="noPreference"
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="dontMind" className="ml-3 block text-sm text-gray-700">I don&apos;t mind</label>
              </div>
            </div>
          </div>

          {/* Urgent Police Action Confirmation */}
          <div className="flex items-center">
            <input
              id="urgentConfirmation"
              name="urgentConfirmation"
              type="checkbox"
              checked={formData.urgentConfirmation}
              onChange={handleChange}
              required
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor="urgentConfirmation" className="ml-3 block text-sm text-gray-700">
              I confirm that this form is not being used to report something that requires urgent Police action
            </label>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload a photo</label>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportMissing;
