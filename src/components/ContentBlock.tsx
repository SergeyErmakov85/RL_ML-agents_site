import React from 'react';

interface ContentBlockProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ 
  title, 
  children,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-xl p-6 md:p-8 mb-8 ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
      <div className="prose prose-blue max-w-none">
        {children}
      </div>
    </div>
  );
};

export default ContentBlock;