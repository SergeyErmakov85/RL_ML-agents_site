import React, { useState } from 'react';
import { Send, MessageCircle, Users, ThumbsUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContentBlock from '../components/ContentBlock';

const FeedbackPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would send the feedback to a server
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        topic: 'general',
        message: ''
      });
    }, 3000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Feedback & Community</h1>
            <p className="text-xl text-blue-100">
              Share your thoughts, ask questions, and connect with other learners.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <SectionHeading 
          title="Join the Conversation" 
          subtitle="Your feedback helps us improve the course and benefits the entire learning community."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <ContentBlock>
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold">Send Us Feedback</h3>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <ThumbsUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">
                  Your feedback has been submitted successfully. We appreciate your input!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="general">General Feedback</option>
                    <option value="content">Course Content</option>
                    <option value="technical">Technical Issue</option>
                    <option value="question">Question about RL</option>
                    <option value="suggestion">Suggestion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Send Feedback <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </ContentBlock>

          {/* Community Section */}
          <ContentBlock>
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold">Community Forum</h3>
            </div>

            <p className="mb-6">
              Join our community of learners to discuss reinforcement learning concepts, share projects, 
              ask questions, and collaborate with fellow enthusiasts.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-lg mb-3">Benefits of Joining</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2">•</div>
                  <span>Get help with challenging concepts from the community</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2">•</div>
                  <span>Share your projects and receive constructive feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2">•</div>
                  <span>Collaborate on reinforcement learning experiments</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2">•</div>
                  <span>Stay updated on the latest research and advancements</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <a
                href="#"
                className="block w-full text-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Join the Community Forum
              </a>
              <a
                href="#"
                className="block w-full text-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                View Discussion Threads
              </a>
            </div>
          </ContentBlock>
        </div>

        {/* FAQ Section */}
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Common questions about the course and reinforcement learning."
          centered={false}
        />

        <ContentBlock>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold mb-2">How do I get started with the course?</h4>
              <p className="text-gray-600">
                We recommend starting with the Fundamentals section to build a solid foundation, 
                then proceeding through the sections in order. Each section builds upon concepts 
                from previous ones, so a sequential approach is best for most learners.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold mb-2">What programming languages are used in the examples?</h4>
              <p className="text-gray-600">
                Most of our code examples and notebooks use Python, which is the most common language 
                for reinforcement learning research and implementation. Libraries like NumPy, PyTorch, 
                and TensorFlow are frequently used throughout the course.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold mb-2">Is there a recommended math background for this course?</h4>
              <p className="text-gray-600">
                Basic familiarity with calculus, linear algebra, and probability theory is helpful. 
                However, we provide review sections in the Mathematical Foundations area to help 
                students refresh or learn these concepts as needed for reinforcement learning.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold mb-2">How can I get help if I'm stuck on a concept?</h4>
              <p className="text-gray-600">
                You can use the feedback form on this page to ask specific questions, or join our 
                community forum to discuss with fellow learners. We also provide additional resources 
                for each topic that may help clarify difficult concepts.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Are there any prerequisites for this course?</h4>
              <p className="text-gray-600">
                While we aim to make the content accessible, some background in programming (especially Python) 
                and basic mathematics will be helpful. If you're completely new to these areas, we recommend 
                starting with some introductory courses in programming and mathematics before diving into 
                reinforcement learning.
              </p>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default FeedbackPage;