import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-20 w-20 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          <Home className="mr-2 h-5 w-5" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;