import React from 'react';
import { Link } from 'react-router-dom';
import TestForm from '../components/TestForm/TestForm';

const FormTest: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </Link>
      
      <h1 className="text-3xl font-bold text-center mb-8">Form Testing Page</h1>
      <p className="text-gray-600 text-center mb-8">
        This page demonstrates a simple React form with Tailwind CSS styling.
      </p>
      <TestForm />
    </div>
  );
};

export default FormTest; 