import React from 'react';
import { ExternalLink } from 'lucide-react';

interface InteractiveDemoProps {
  title: string;
  description: string;
  demoUrl: string;
  imageUrl: string;
}

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({
  title,
  description,
  demoUrl,
  imageUrl,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200 mb-4 shadow-inner">
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover"
          />
        </div>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Open interactive demo <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default InteractiveDemo;