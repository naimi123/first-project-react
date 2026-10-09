import React, { useState } from 'react';
import Modal from './modale'; // Import Modal component

export default function Form() {
  // State to control Modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to close the Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // State to store form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    select: '',
    check: false,
  });

  // Check if any required field is empty to disable submit button
  const isDisabled =
    formData.firstName === '' ||
    formData.lastName === '' ||
    formData.age === '' ||
    formData.phoneNumber === '' ||
    formData.select === '';

  // Check condition for loan approval (Age >= 18 and employed)
  const isFormSuccess = Number(formData.age) >= 18 && formData.check;

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        Loan Application
      </h2>

      {/* Form submit handler */}
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setIsModalOpen(true); // Open modal on submit
        }}
      >
        {/* First Name & Last Name Input */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
              First name
            </label>
            <input
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              type="text"
              id="firstName"
              placeholder="John"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
              Last name
            </label>
            <input
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              type="text"
              id="lastName"
              placeholder="Doe"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm"
            />
          </div>
        </div>

        {/* Age & Phone Number Input */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-1">
              Age
            </label>
            <input
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              type="number"
              id="age"
              placeholder="25"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone number
            </label>
            <input
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              type="tel"
              id="phone"
              maxLength={10}
              placeholder="0612345678"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm"
            />
          </div>
        </div>

        {/* Employment Status Checkbox */}
        <div className="flex items-center pt-2">
          <input
            checked={formData.check}
            onChange={(e) => setFormData({ ...formData, check: e.target.checked })}
            id="isEmployed"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="isEmployed" className="ms-2 text-sm font-medium text-slate-700 cursor-pointer">
            Are you currently employed?
          </label>
        </div>

        {/* Loan Amount Selection */}
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-slate-700 mb-1">
            Select required loan amount
          </label>
          <select
            value={formData.select}
            onChange={(e) => setFormData({ ...formData, select: e.target.value })}
            id="loanAmount"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm bg-white"
          >
            <option value="">Choose an amount...</option>
            <option value="10000-50000">$1,000 - $5,000</option>
            <option value="50000-100000">$5,000 - $10,000</option>
            <option value="100000-200000">$10,000 - $20,000</option>
            <option value="200000+">$20,000 +</option>
          </select>
        </div>

        {/* Submit Application Button */}
        <button
          disabled={isDisabled}
          type="submit"
          className={
            isDisabled
              ? "w-full py-3 bg-gray-400 text-white font-semibold rounded-xl cursor-not-allowed text-sm"
              : "w-full font-medium rounded-xl text-sm px-5 py-3 transition duration-200 shadow-md bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:shadow-lg"
          }
        >
          Submit Application
        </button>
      </form>

      {/* Render Modal Component */}
      <Modal
        isOpen={isModalOpen}
        isSuccess={isFormSuccess}
        onClose={handleCloseModal}
      />
    </div>
  );
}