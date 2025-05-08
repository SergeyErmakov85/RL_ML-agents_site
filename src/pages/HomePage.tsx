import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Box, Brain, Calculator, BarChart, 
  Compass, Workflow, Users, ArrowRight
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';

const HomePage: React.FC = () => {
  const courseModules = [
    {
      title: 'Fundamentals of Reinforcement Learning',
      description: 'Learn about agents, environments, actions, states, and rewards. See practical applications of RL in various domains.',
      icon: <BookOpen className="h-8 w-8" />,
      link: '/fundamentals'
    },
    {
      title: 'Mathematical Foundations',
      description: 'Explore probability theory, Markov decision processes, Bellman equations, and dynamic programming.',
      icon: <Calculator className="h-8 w-8" />,
      link: '/math-foundations'
    },
    {
      title: 'Learning Methods & Algorithms',
      description: 'Master Monte Carlo methods, Temporal Difference Learning (Q-learning, SARSA), and gradient methods.',
      icon: <Workflow className="h-8 w-8" />,
      link: '/algorithms'
    },
    {
      title: 'Vector & Numerical Analysis',
      description: 'Study gradients, optimization in multidimensional spaces, and numerical methods for solving optimization problems.',
      icon: <BarChart className="h-8 w-8" />,
      link: '/vector-analysis'
    },
    {
      title: 'Advanced Topics',
      description: 'Dive into Deep Reinforcement Learning, Policy Gradients, Actor-Critic methods, and the exploration-exploitation dilemma.',
      icon: <Brain className="h-8 w-8" />,
      link: '/advanced-topics'
    },
    {
      title: 'Resources & Materials',
      description: 'Access a curated collection of books, video lectures, research papers, and additional learning resources.',
      icon: <Box className="h-8 w-8" />,
      link: '/resources'
    },
  ];

  return (
    <div>
      <HeroSection
        title="Reinforcement Learning Course"
        subtitle="Master the theory and practice of Reinforcement Learning from fundamentals to advanced applications"
        ctaLink="/fundamentals"
        ctaText="Start Learning"
      />

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Course Overview"
            subtitle="A comprehensive curriculum designed to build your knowledge from the ground up"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <CourseCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                link={module.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Learning */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Interactive Learning Experience</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our course features interactive elements designed to reinforce your understanding and
                provide hands-on experience with reinforcement learning concepts.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <BookOpen className="h-5 w-5" />, text: 'Jupyter notebooks with executable code examples' },
                  { icon: <Brain className="h-5 w-5" />, text: 'Interactive visualizations of mathematical concepts' },
                  { icon: <Compass className="h-5 w-5" />, text: 'Guided implementations of popular RL algorithms' },
                  { icon: <Users className="h-5 w-5" />, text: 'Community forum for discussion and collaboration' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-4 text-blue-600">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link 
                  to="/feedback" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Join our community <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Interactive learning visualization" 
                className="rounded-lg shadow-sm w-full"
              />
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">Learn by Doing</h3>
                <p className="text-gray-600">
                  Interactive examples help reinforce theoretical concepts through practical application.
                  Work with real code and see results immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Begin your reinforcement learning adventure today with our structured, 
            comprehensive curriculum designed for all skill levels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/fundamentals"
              className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-all shadow-lg"
            >
              Start the Course
            </Link>
            <Link
              to="/resources"
              className="bg-transparent text-white border border-white hover:bg-blue-600 font-medium py-3 px-6 rounded-lg transition-all"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;