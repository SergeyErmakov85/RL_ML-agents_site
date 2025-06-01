import React from 'react';
import { Target, Cpu, Box, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContentBlock from '../components/ContentBlock';
import CodeBlock from '../components/CodeBlock';
import InteractiveDemo from '../components/InteractiveDemo';

const FundamentalsPage: React.FC = () => {
  const simpleRLEnvironmentCode = `
import numpy as np

class SimpleGridWorld:
    def __init__(self, size=5):
        self.size = size
        self.agent_pos = [0, 0]
        self.goal_pos = [size-1, size-1]
        self.reset()
        
    def reset(self):
        self.agent_pos = [0, 0]
        return self._get_state()
    
    def step(self, action):
        # 0: up, 1: right, A 2: down, 3: left
        if action == 0 and self.agent_pos[0] > 0:
            self.agent_pos[0] -= 1
        elif action == 1 and self.agent_pos[1] < self.size - 1:
            self.agent_pos[1] += 1
        elif action == 2 and self.agent_pos[0] < self.size - 1:
            self.agent_pos[0] += 1
        elif action == 3 and self.agent_pos[1] > 0:
            self.agent_pos[1] -= 1
        
        done = self.agent_pos == self.goal_pos
        reward = 1.0 if done else -0.01  # Small penalty for each step
        
        return self._get_state(), reward, done
        
    def _get_state(self):
        return tuple(self.agent_pos)
`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Fundamentals of Reinforcement Learning</h1>
            <p className="text-xl text-blue-100">
              Understanding the core concepts, components, and terminology of reinforcement learning systems.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <SectionHeading 
          title="Introduction to Reinforcement Learning" 
          subtitle="Understand the foundations of decision-making systems that learn from interaction with environments."
        />

        <ContentBlock>
          <p className="text-lg leading-relaxed mb-4">
            Reinforcement Learning (RL) is a paradigm of machine learning where an agent learns to make decisions
            by taking actions in an environment to achieve some goal. Unlike supervised learning, the agent is not
            explicitly told which actions to take, but instead must discover which actions yield the most reward
            through trial and error.
          </p>
          <p className="mb-4">
            This approach to learning is inspired by behavioral psychology, where agents learn through
            reinforcement to maximize some notion of reward. The field has gained significant attention with
            breakthroughs like AlphaGo defeating the world champion in the game of Go and reinforcement learning
            systems controlling robotic systems with superhuman dexterity.
          </p>
        </ContentBlock>

        {/* Core Components */}
        <SectionHeading 
          title="Core Components" 
          subtitle="The essential elements that make up any reinforcement learning system."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ContentBlock className="flex flex-col">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Agent</h3>
            </div>
            <p>
              The learner or decision-maker in the reinforcement learning framework. The agent interacts with the
              environment, observes states, takes actions, and receives rewards. Its goal is to learn a policy
              (a mapping from states to actions) that maximizes the cumulative reward over time.
            </p>
          </ContentBlock>

          <ContentBlock className="flex flex-col">
            <div className="flex items-center mb-4">
              <Box className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Environment</h3>
            </div>
            <p>
              The world with which the agent interacts. It defines the task or problem the agent is solving.
              The environment presents new situations (states) to the agent, accepts the agent's actions, and
              returns rewards and new states in response to those actions.
            </p>
          </ContentBlock>

          <ContentBlock className="flex flex-col">
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">State & Action Space</h3>
            </div>
            <p>
              The state space encompasses all possible situations or configurations the agent might find itself in.
              The action space defines all possible decisions the agent can make. In some problems, these spaces
              are discrete and finite; in others, they might be continuous and infinite.
            </p>
          </ContentBlock>

          <ContentBlock className="flex flex-col">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Reward Signal</h3>
            </div>
            <p>
              The primary feedback mechanism that defines the goal of reinforcement learning. The agent's objective
              is to maximize the total reward it receives over time. The reward signal can be immediate or delayed,
              and properly designing this signal is crucial for effective learning.
            </p>
          </ContentBlock>
        </div>

        {/* The Reinforcement Learning Loop */}
        <SectionHeading 
          title="The Reinforcement Learning Loop" 
          subtitle="Understanding the cyclical process of interaction, feedback, and learning."
        />

        <ContentBlock>
          <div className="mb-6">
            <img 
              src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Reinforcement Learning Loop Diagram"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md" 
            />
          </div>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Observation:</strong> The agent observes the current state of the environment.
            </li>
            <li>
              <strong>Decision:</strong> Based on this state, the agent selects an action according to its policy.
            </li>
            <li>
              <strong>Action:</strong> The agent executes the chosen action in the environment.
            </li>
            <li>
              <strong>Transition:</strong> The environment transitions to a new state.
            </li>
            <li>
              <strong>Reward:</strong> The environment provides a reward signal to the agent.
            </li>
            <li>
              <strong>Learning:</strong> The agent updates its policy based on the new information (state, action, reward, new state).
            </li>
            <li>
              <strong>Repeat:</strong> The process continues until a terminal state is reached or a maximum number of steps is completed.
            </li>
          </ol>
        </ContentBlock>

        {/* Simple RL Implementation */}
        <SectionHeading 
          title="Simple Reinforcement Learning Environment" 
          subtitle="A basic implementation to demonstrate the concepts."
        />

        <ContentBlock>
          <p className="mb-4">
            Below is a simple implementation of a grid world environment, a common testbed for reinforcement learning algorithms.
            In this environment, an agent navigates a grid to reach a goal position, receiving a small negative reward for each
            step and a positive reward upon reaching the goal.
          </p>
          <CodeBlock 
            language="python" 
            title="Simple Grid World Environment"
            code={simpleRLEnvironmentCode.trim()} 
          />
        </ContentBlock>

        {/* Interactive Elements */}
        <SectionHeading 
          title="Interactive Learning Tools" 
          subtitle="Hands-on examples to reinforce understanding."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <InteractiveDemo
            title="Grid World Explorer"
            description="Experiment with different policies in a simple grid world environment."
            demoUrl="https://example.com/grid-world-demo"
            imageUrl="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <InteractiveDemo
            title="Policy Iteration Visualizer"
            description="Watch how policy iteration converges to the optimal policy in real-time."
            demoUrl="https://example.com/policy-iteration-demo"
            imageUrl="https://images.pexels.com/photos/3756761/pexels-photo-3756761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>

        {/* Practical Applications */}
        <SectionHeading 
          title="Practical Applications" 
          subtitle="Real-world examples of reinforcement learning in action."
        />

        <ContentBlock>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Game Playing</h4>
              <p>
                From classic games like Chess and Go to modern video games, RL has demonstrated superhuman performance
                in various gaming environments.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Robotics</h4>
              <p>
                Teaching robots to walk, manipulate objects, and navigate complex environments through trial and error.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Recommendation Systems</h4>
              <p>
                Personalizing content recommendations on streaming platforms, e-commerce sites, and social media.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Autonomous Vehicles</h4>
              <p>
                Training self-driving cars to navigate roads, avoid obstacles, and make safe driving decisions.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Resource Management</h4>
              <p>
                Optimizing allocation of resources in complex systems like power grids, data centers, and logistics.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Healthcare</h4>
              <p>
                Personalized treatment recommendations, medical image analysis, and hospital resource optimization.
              </p>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default FundamentalsPage;