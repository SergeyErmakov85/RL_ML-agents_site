import React from 'react';

interface MathEquationProps {
  equation: string;
  description?: string;
}

// This is a placeholder component for math equations
// In a production app, you would integrate a library like KaTeX or MathJax
const MathEquation: React.FC<MathEquationProps> = ({ equation, description }) => {
  return (
    <div className="my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-center font-mono text-lg py-2">{equation}</div>
      {description && (
        <p className="text-sm text-gray-600 mt-2 border-t border-gray-200 pt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default MathEquation;