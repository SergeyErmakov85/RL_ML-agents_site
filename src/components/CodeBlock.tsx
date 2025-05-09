import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden mb-6 bg-gray-800 text-gray-100 shadow-xl">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
          <span className="font-mono text-sm">{title}</span>
          <div className="flex items-center">
            <span className="mr-2 text-xs text-gray-400">{language}</span>
            <button
              onClick={handleCopy}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Copy code"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;