import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-semibold text-white">RL Course</span>
            </Link>
            <p className="mt-4 text-sm">
              A comprehensive educational resource for learning Reinforcement Learning
              from fundamentals to advanced topics.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-white mb-4">Course Sections</h3>
            <ul className="space-y-2">
              <li><Link to="/fundamentals" className="text-sm hover:text-blue-400 transition">Fundamentals</Link></li>
              <li><Link to="/math-foundations" className="text-sm hover:text-blue-400 transition">Math Foundations</Link></li>
              <li><Link to="/algorithms" className="text-sm hover:text-blue-400 transition">Algorithms</Link></li>
              <li><Link to="/vector-analysis" className="text-sm hover:text-blue-400 transition">Vector Analysis</Link></li>
              <li><Link to="/advanced-topics" className="text-sm hover:text-blue-400 transition">Advanced Topics</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-sm hover:text-blue-400 transition">Learning Materials</Link></li>
              <li><Link to="/resources#books" className="text-sm hover:text-blue-400 transition">Books</Link></li>
              <li><Link to="/resources#videos" className="text-sm hover:text-blue-400 transition">Video Lectures</Link></li>
              <li><Link to="/resources#papers" className="text-sm hover:text-blue-400 transition">Research Papers</Link></li>
              <li><Link to="/feedback" className="text-sm hover:text-blue-400 transition">Feedback & Forum</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Reinforcement Learning Course. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;