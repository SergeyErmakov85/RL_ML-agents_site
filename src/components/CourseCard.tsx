import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default CourseCard;