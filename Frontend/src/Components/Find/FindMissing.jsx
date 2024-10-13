import { useState } from "react";

const FindMissing = () => {
  const [searchData, setSearchData] = useState({
    name: "",
    description: "",
    contactInfo: "",
    dateMissing: "",
    preferredContact: "",
    urgentConfirmation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchData({
      ...searchData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to the server
    console.log(searchData);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Find The Missing Person
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name of Missing Person */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of Missing Person (required)
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter the name of the missing person"
              value={searchData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description (required)
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Please include details such as age, height, and any distinguishing features"
              value={searchData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Contact Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Contact Information (required)
            </label>
            <input
              type="text"
              name="contactInfo"
              placeholder="Your email or phone number"
              value={searchData.contactInfo}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Date Missing */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date Missing
            </label>
            <input
              type="date"
              name="dateMissing"
              value={searchData.dateMissing}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Preferred Method of Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your preferred method of contact
            </label>
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
                <label
                  htmlFor="emailPreferred"
                  className="ml-3 block text-sm text-gray-700"
                >
                  Email
                </label>
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
                <label
                  htmlFor="phonePreferred"
                  className="ml-3 block text-sm text-gray-700"
                >
                  Phone
                </label>
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
                <label
                  htmlFor="dontMind"
                  className="ml-3 block text-sm text-gray-700"
                >
                  I don&apos;t mind
                </label>
              </div>
            </div>
          </div>

          {/* Urgent Police Action Confirmation */}
          <div className="flex items-center">
            <input
              id="urgentConfirmation"
              name="urgentConfirmation"
              type="checkbox"
              checked={searchData.urgentConfirmation}
              onChange={handleChange}
              required
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="urgentConfirmation"
              className="ml-3 block text-sm text-gray-700"
            >
              I confirm that this form is not being used to report something
              that requires urgent Police action
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindMissing;
