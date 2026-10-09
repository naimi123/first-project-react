import React from 'react';

export default function Modal({ isOpen, isSuccess, onClose }) {
  // If modal is closed, do not render anything
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 rounded-2xl">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
        
        {/* Status Icon (Success or Error) */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}
        >
          {isSuccess ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        {/* Modal Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {isSuccess ? 'Request Submitted Successfully!' : 'Application Rejected'}
        </h3>

        {/* Modal Description */}
        <p className="text-sm text-slate-600 mb-6">
          {isSuccess
            ? 'Your loan application has been received. Our team will review your details shortly.'
            : 'You must meet all requirements to apply for this loan.'}
        </p>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={`w-full text-white font-medium py-2.5 px-4 rounded-xl transition duration-200 shadow-md ${
            isSuccess ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
}