import React from 'react';
import { ExternalLink, FileText, Video, Book, Globe, FileCode } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContentBlock from '../components/ContentBlock';

const ResourcesPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Learning Resources</h1>
            <p className="text-xl text-blue-100">
              A curated collection of books, videos, tutorials, and research papers to expand your knowledge.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <SectionHeading 
          title="Reinforcement Learning Resources" 
          subtitle="Recommended materials for deepening your understanding of reinforcement learning."
        />

        <ContentBlock>
          <p className="text-lg leading-relaxed mb-6">
            This page provides a curated collection of high-quality resources for learning reinforcement learning,
            from introductory materials to advanced research papers. Whether you prefer books, video lectures,
            interactive tutorials, or academic papers, you'll find materials to suit your learning style and level.
          </p>
          <p className="mb-4">
            We've organized the resources by type and difficulty level to help you find what you need. The materials
            cover theoretical foundations, practical implementations, and cutting-edge research in reinforcement learning.
          </p>
        </ContentBlock>

        {/* Books */}
        <section id="books" className="scroll-mt-20">
          <SectionHeading 
            title="Books" 
            subtitle="Comprehensive texts on reinforcement learning theory and practice."
          />

          <ContentBlock>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Book className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reinforcement Learning: An Introduction</h3>
                  <p className="text-gray-600 mb-2">Richard S. Sutton and Andrew G. Barto</p>
                  <p className="mb-2">
                    The definitive textbook on reinforcement learning, providing a clear and accessible introduction
                    to the field's core concepts, algorithms, and theoretical foundations.
                  </p>
                  <a 
                    href="http://incompleteideas.net/book/the-book-2nd.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Book className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deep Reinforcement Learning</h3>
                  <p className="text-gray-600 mb-2">Pieter Abbeel, Sergey Levine, Chelsea Finn, and John Schulman</p>
                  <p className="mb-2">
                    A modern textbook focusing on deep reinforcement learning methods, with an emphasis on recent
                    advances and practical implementations.
                  </p>
                  <a 
                    href="https://deepreinforcementlearningbook.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Book className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Algorithms for Reinforcement Learning</h3>
                  <p className="text-gray-600 mb-2">Csaba Szepesvári</p>
                  <p className="mb-2">
                    A concise introduction to reinforcement learning algorithms, providing a more mathematical
                    treatment of the subject with a focus on theoretical foundations.
                  </p>
                  <a 
                    href="https://sites.ualberta.ca/~szepesva/rlbook.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </ContentBlock>
        </section>

        {/* Online Courses and Video Lectures */}
        <section id="videos" className="scroll-mt-20">
          <SectionHeading 
            title="Online Courses and Video Lectures" 
            subtitle="Learn from expert instructors through structured courses and video content."
          />

          <ContentBlock>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Video className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reinforcement Learning Specialization</h3>
                  <p className="text-gray-600 mb-2">University of Alberta & Alberta Machine Intelligence Institute on Coursera</p>
                  <p className="mb-2">
                    A comprehensive specialization taught by Martha White and Adam White, featuring four courses
                    covering fundamentals, sample-based learning, prediction and control, and a capstone project.
                  </p>
                  <a 
                    href="https://www.coursera.org/specializations/reinforcement-learning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Course <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Video className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deep Reinforcement Learning</h3>
                  <p className="text-gray-600 mb-2">UC Berkeley CS285</p>
                  <p className="mb-2">
                    A graduate-level course by Sergey Levine covering deep reinforcement learning algorithms,
                    with lectures, slides, and assignments freely available online.
                  </p>
                  <a 
                    href="http://rail.eecs.berkeley.edu/deeprlcourse/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Course <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Video className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practical Reinforcement Learning</h3>
                  <p className="text-gray-600 mb-2">Higher School of Economics on Coursera</p>
                  <p className="mb-2">
                    A hands-on course focusing on practical aspects of reinforcement learning, including
                    implementation of algorithms and application to real-world problems.
                  </p>
                  <a 
                    href="https://www.coursera.org/learn/practical-rl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Course <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </ContentBlock>
        </section>

        {/* Code Repositories and Tutorials */}
        <section className="scroll-mt-20">
          <SectionHeading 
            title="Code Repositories and Tutorials" 
            subtitle="Practical implementations and hands-on guides for reinforcement learning."
          />

          <ContentBlock>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FileCode className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stable Baselines3</h3>
                  <p className="text-gray-600 mb-2">A set of reliable implementations of reinforcement learning algorithms in PyTorch</p>
                  <p className="mb-2">
                    Provides reliable implementations of popular RL algorithms with a consistent interface,
                    extensive documentation, and examples for practical use.
                  </p>
                  <a 
                    href="https://github.com/DLR-RM/stable-baselines3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    GitHub Repository <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FileCode className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reinforcement Learning: An Introduction (Code Examples)</h3>
                  <p className="text-gray-600 mb-2">Python code implementing examples and exercises from the Sutton & Barto book</p>
                  <p className="mb-2">
                    A collection of well-documented Python implementations of the algorithms and examples
                    from the classic Sutton & Barto textbook.
                  </p>
                  <a 
                    href="https://github.com/ShangtongZhang/reinforcement-learning-an-introduction" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    GitHub Repository <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FileCode className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">OpenAI Spinning Up</h3>
                  <p className="text-gray-600 mb-2">An educational resource for deep reinforcement learning</p>
                  <p className="mb-2">
                    A comprehensive resource designed to teach deep reinforcement learning to anyone with
                    basic Python and deep learning knowledge, including code implementations and tutorials.
                  </p>
                  <a 
                    href="https://spinningup.openai.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </ContentBlock>
        </section>

        {/* Research Papers */}
        <section id="papers" className="scroll-mt-20">
          <SectionHeading 
            title="Seminal Research Papers" 
            subtitle="Landmark publications that shaped the field of reinforcement learning."
          />

          <ContentBlock>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Playing Atari with Deep Reinforcement Learning</h3>
                  <p className="text-gray-600 mb-2">Mnih et al., 2013</p>
                  <p className="mb-2">
                    The groundbreaking paper that introduced Deep Q-Networks (DQN), demonstrating how deep
                    reinforcement learning could learn to play Atari games directly from pixel inputs.
                  </p>
                  <a 
                    href="https://arxiv.org/abs/1312.5602" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mastering the Game of Go with Deep Neural Networks and Tree Search</h3>
                  <p className="text-gray-600 mb-2">Silver et al., 2016</p>
                  <p className="mb-2">
                    The paper describing AlphaGo, the first program to defeat a world champion Go player,
                    combining deep neural networks with Monte Carlo tree search.
                  </p>
                  <a 
                    href="https://www.nature.com/articles/nature16961" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proximal Policy Optimization Algorithms</h3>
                  <p className="text-gray-600 mb-2">Schulman et al., 2017</p>
                  <p className="mb-2">
                    Introduced PPO, a policy gradient method that has become widely used due to its
                    simplicity, good performance, and reliable convergence properties.
                  </p>
                  <a 
                    href="https://arxiv.org/abs/1707.06347" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor</h3>
                  <p className="text-gray-600 mb-2">Haarnoja et al., 2018</p>
                  <p className="mb-2">
                    Introduced SAC, an off-policy actor-critic algorithm that maximizes both expected
                    return and entropy, achieving state-of-the-art performance in continuous control tasks.
                  </p>
                  <a 
                    href="https://arxiv.org/abs/1801.01290" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </ContentBlock>
        </section>

        {/* Community Resources */}
        <SectionHeading 
          title="Community Resources" 
          subtitle="Forums, communities, and websites for ongoing learning and discussion."
        />

        <ContentBlock>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">RL Theory Forum</h3>
                <p className="text-gray-600 mb-2">A forum for theoretical discussions about reinforcement learning</p>
                <p className="mb-2">
                  An online community focused on theoretical aspects of reinforcement learning, with discussions
                  on mathematical foundations, convergence proofs, and theoretical advances.
                </p>
                <a 
                  href="https://rltheory.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">r/reinforcementlearning</h3>
                <p className="text-gray-600 mb-2">Reddit community for reinforcement learning</p>
                <p className="mb-2">
                  A subreddit dedicated to reinforcement learning, where practitioners, researchers, and enthusiasts
                  share papers, projects, questions, and discussions about RL.
                </p>
                <a 
                  href="https://www.reddit.com/r/reinforcementlearning/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Subreddit <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Papers With Code - Reinforcement Learning</h3>
                <p className="text-gray-600 mb-2">Collection of RL papers with code implementations</p>
                <p className="mb-2">
                  A curated list of reinforcement learning papers that include code implementations, making it
                  easier to understand and reproduce research results.
                </p>
                <a 
                  href="https://paperswithcode.com/task/reinforcement-learning" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default ResourcesPage;