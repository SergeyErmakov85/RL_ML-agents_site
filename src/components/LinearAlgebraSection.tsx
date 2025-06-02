import React from 'react';

interface LinearAlgebraSectionProps {
  onOpenGuide: () => void;
  equation: string;
  description: string;
}

const LinearAlgebraSection: React.FC<LinearAlgebraSectionProps> = ({ onOpenGuide, equation, description }) => (
  <div className="mb-8">
    <button
      onClick={onOpenGuide}
      className="block w-full p-6 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors duration-300 mb-4 text-left cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-800">📚 Linear Algebra in RL</h3>
      <p className="text-gray-700">
        Click to open the comprehensive guide on linear algebra fundamentals and their applications in reinforcement learning.
      </p>
    </button>
    <div className="bg-gray-50 p-4 rounded border border-gray-200">
      <div className="font-mono text-lg mb-2">{equation}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  </div>
);

export default LinearAlgebraSection;
