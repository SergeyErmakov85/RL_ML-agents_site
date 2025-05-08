import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContentBlock from '../components/ContentBlock';
import CodeBlock from '../components/CodeBlock';
import MathEquation from '../components/MathEquation';

const AlgorithmsPage: React.FC = () => {
  const qLearningCode = `
import numpy as np

def q_learning(env, episodes=1000, alpha=0.1, gamma=0.99, epsilon=0.1):
    # Initialize Q-table with zeros
    q_table = np.zeros([env.observation_space.n, env.action_space.n])
    
    for i in range(episodes):
        state = env.reset()
        done = False
        
        while not done:
            # Epsilon-greedy action selection
            if np.random.random() < epsilon:
                action = env.action_space.sample()  # Explore
            else:
                action = np.argmax(q_table[state, :])  # Exploit
            
            # Take action and observe outcome
            next_state, reward, done, _ = env.step(action)
            
            # Q-learning update
            old_value = q_table[state, action]
            next_max = np.max(q_table[next_state, :])
            
            # Bellman equation update
            new_value = old_value + alpha * (reward + gamma * next_max - old_value)
            q_table[state, action] = new_value
            
            state = next_state
            
        # Optionally decrease epsilon over time
        epsilon = max(0.01, epsilon * 0.995)
        
    return q_table
`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Methods and Algorithms</h1>
            <p className="text-xl text-blue-100">
              Exploring the core algorithms that power reinforcement learning systems.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <SectionHeading 
          title="Reinforcement Learning Algorithms" 
          subtitle="Understanding the different approaches to learning optimal policies from experience."
        />

        <ContentBlock>
          <p className="text-lg leading-relaxed mb-4">
            Reinforcement learning algorithms can be broadly categorized into several families based on their
            approach to learning. In this section, we'll explore the key algorithms and methods used in
            reinforcement learning, from classic tabular methods to more advanced gradient-based approaches.
          </p>
          <p className="mb-4">
            Each algorithm has its own strengths, weaknesses, and domains of applicability. Understanding the
            range of available methods helps in selecting the most appropriate algorithm for a given problem.
          </p>
        </ContentBlock>

        {/* Monte Carlo Methods */}
        <SectionHeading 
          title="Monte Carlo Methods" 
          subtitle="Learning from complete episodes of experience."
        />

        <ContentBlock>
          <p className="mb-4">
            Monte Carlo (MC) methods learn directly from episodes of experience without requiring prior knowledge
            of environment dynamics. They operate on the principle of averaging returns from complete episodes
            to estimate value functions.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Learn from complete episodes of experience</li>
            <li>Do not require knowledge of transition and reward dynamics</li>
            <li>Update estimates based on actual returns</li>
            <li>Only applicable to episodic tasks with well-defined termination</li>
            <li>Can have high variance due to stochasticity in returns</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-4">Monte Carlo Policy Evaluation</h3>
          <p className="mb-4">
            Monte Carlo policy evaluation estimates the value function of a policy by averaging the returns observed
            after visiting each state:
          </p>
          <MathEquation 
            equation="V(s) ← average of returns following visits to s" 
            description="The value of a state is updated to be the average of actual returns experienced after visiting that state."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Monte Carlo Control</h3>
          <p className="mb-4">
            Monte Carlo control aims to find an optimal policy by alternating between policy evaluation (estimating
            value functions) and policy improvement (making the policy greedy with respect to the current value function).
          </p>
          <p className="mb-4">
            A common approach is the ε-greedy policy, which selects the greedy action with probability 1-ε and
            a random action with probability ε, ensuring exploration.
          </p>
        </ContentBlock>

        {/* Temporal Difference Learning */}
        <SectionHeading 
          title="Temporal Difference Learning" 
          subtitle="Learning from partial episodes through bootstrapping."
        />

        <ContentBlock>
          <p className="mb-4">
            Temporal Difference (TD) learning combines ideas from Monte Carlo methods and dynamic programming.
            Like Monte Carlo, TD methods learn from experience without requiring a model of the environment.
            However, they update estimates based on other learned estimates without waiting for a final outcome,
            a process known as bootstrapping.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">TD(0) Update Rule</h3>
          <p className="mb-4">
            The simplest TD method, TD(0), updates the value function after every step using the observed reward
            and the value of the next state:
          </p>
          <MathEquation 
            equation="V(s_t) ← V(s_t) + α[r_{t+1} + γV(s_{t+1}) - V(s_t)]" 
            description="TD update rule, where α is the learning rate and γ is the discount factor."
          />
          <p className="mb-4">
            The term [r_{t+1} + γV(s_{t+1}) - V(s_t)] is known as the TD error, representing the difference
            between the estimated value and the better estimate based on the next step.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 mt-8">SARSA</h3>
          <p className="mb-4">
            SARSA (State-Action-Reward-State-Action) is an on-policy TD control algorithm that updates the
            action-value function based on the actions actually taken:
          </p>
          <MathEquation 
            equation="Q(s_t, a_t) ← Q(s_t, a_t) + α[r_{t+1} + γQ(s_{t+1}, a_{t+1}) - Q(s_t, a_t)]" 
            description="SARSA update rule using the action selected by the current policy."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Q-Learning</h3>
          <p className="mb-4">
            Q-Learning is an off-policy TD control algorithm that learns the optimal policy regardless of the
            policy being followed:
          </p>
          <MathEquation 
            equation="Q(s_t, a_t) ← Q(s_t, a_t) + α[r_{t+1} + γmax_a Q(s_{t+1}, a) - Q(s_t, a_t)]" 
            description="Q-learning update rule using the maximum Q-value for the next state."
          />
          <p className="mb-4">
            Here's a simple implementation of Q-learning:
          </p>
          <CodeBlock 
            language="python" 
            title="Q-Learning Algorithm"
            code={qLearningCode.trim()} 
          />
        </ContentBlock>

        {/* Gradient Methods */}
        <SectionHeading 
          title="Gradient Methods and Stochastic Gradient Descent" 
          subtitle="Using gradient-based optimization for reinforcement learning."
        />

        <ContentBlock>
          <p className="mb-4">
            For large or continuous state spaces, representing value functions with tables becomes impractical.
            Function approximation methods, often using neural networks, can approximate value functions and policies.
            Gradient-based methods update parameters to minimize loss functions.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Policy Gradient Methods</h3>
          <p className="mb-4">
            Policy gradient methods directly optimize the policy without learning a value function. They update
            policy parameters in the direction of greater expected rewards:
          </p>
          <MathEquation 
            equation="∇J(θ) = E_π[∇log π(a|s,θ) Q^π(s,a)]" 
            description="The policy gradient theorem, where J(θ) is the expected reward and θ are the policy parameters."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">REINFORCE Algorithm</h3>
          <p className="mb-4">
            The REINFORCE algorithm is a Monte Carlo policy gradient method that updates policy parameters using
            the log derivative of the policy and the cumulative reward from each state:
          </p>
          <MathEquation 
            equation="θ ← θ + α ∑_t ∇log π(a_t|s_t,θ) G_t" 
            description="REINFORCE update rule, where G_t is the return from time step t."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Actor-Critic Methods</h3>
          <p className="mb-4">
            Actor-Critic methods combine policy gradient (actor) and value function approximation (critic) approaches.
            The actor determines which actions to take, while the critic evaluates those actions to assist the
            learning process:
          </p>
          <MathEquation 
            equation="θ ← θ + α ∇log π(a_t|s_t,θ) [r_{t+1} + γV(s_{t+1}) - V(s_t)]" 
            description="Actor-Critic update rule, using the TD error as the advantage estimate."
          />
        </ContentBlock>

        {/* Comparison of Methods */}
        <SectionHeading 
          title="Comparing RL Methods" 
          subtitle="Understanding the trade-offs between different algorithms."
        />

        <ContentBlock>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Method</th>
                  <th className="py-3 px-4 border-b text-left">Model-Free</th>
                  <th className="py-3 px-4 border-b text-left">On/Off Policy</th>
                  <th className="py-3 px-4 border-b text-left">Bootstrapping</th>
                  <th className="py-3 px-4 border-b text-left">Function Approximation</th>
                  <th className="py-3 px-4 border-b text-left">Sample Efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Monte Carlo</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Both</td>
                  <td className="py-3 px-4 border-b">No</td>
                  <td className="py-3 px-4 border-b">Compatible</td>
                  <td className="py-3 px-4 border-b">Low</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">SARSA</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">On-policy</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Compatible</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Q-Learning</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Off-policy</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Compatible</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">REINFORCE</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">On-policy</td>
                  <td className="py-3 px-4 border-b">No</td>
                  <td className="py-3 px-4 border-b">Natural fit</td>
                  <td className="py-3 px-4 border-b">Low</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b font-medium">Actor-Critic</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Both</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Natural fit</td>
                  <td className="py-3 px-4 border-b">Medium-High</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">DQN</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Off-policy</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Yes (Deep NN)</td>
                  <td className="py-3 px-4 border-b">Medium-High</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Selection Guidelines</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>For small, discrete state spaces:</strong> Tabular methods like Q-learning or SARSA</li>
            <li><strong>For large or continuous state spaces:</strong> Function approximation with deep networks (DQN, A2C, etc.)</li>
            <li><strong>For continuous action spaces:</strong> Policy gradient or actor-critic methods</li>
            <li><strong>When sample efficiency matters:</strong> Model-based methods or off-policy algorithms</li>
            <li><strong>When stability is crucial:</strong> On-policy methods like SARSA or PPO</li>
          </ul>
        </ContentBlock>
      </div>
    </div>
  );
};

export default AlgorithmsPage;