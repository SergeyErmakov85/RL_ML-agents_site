import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContentBlock from '../components/ContentBlock';
import MathEquation from '../components/MathEquation';
import CodeBlock from '../components/CodeBlock';
import LinearAlgebraSection from '../components/LinearAlgebraSection';

const MathFoundationsPage: React.FC = () => {
  const handleOpenCalculusGuide = () => {
    window.open('/Module_1_calculus.pdf', '_blank');
  };

  const handleOpenLinearAlgebraGuide = () => {
    window.open('/Module_2_linear_algebra.pdf', '_blank');
  };

  const gradientDescentCode = `
import numpy as np
import matplotlib.pyplot as plt

def gradient_descent(f, df, x0, learning_rate=0.1, num_iterations=100):
    """
    Simple gradient descent implementation
    
    Args:
        f: Function to minimize
        df: Gradient of f
        x0: Initial point (numpy array)
        learning_rate: Step size alpha
        num_iterations: Number of iterations
        
    Returns:
        x_history: History of x values during optimization
        f_history: History of function values
    """
    x = x0.copy()
    x_history = [x.copy()]
    f_history = [f(x)]
    
    for i in range(num_iterations):
        # Compute gradient
        gradient = df(x)
        
        # Update x by taking a step in the negative gradient direction
        x = x - learning_rate * gradient
        
        # Store x and f(x)
        x_history.append(x.copy())
        f_history.append(f(x))
        
    return np.array(x_history), np.array(f_history)

# Example usage:
# Define a simple quadratic function and its gradient
def f(x):
    return x[0]**2 + 2*x[1]**2

def df(x):
    return np.array([2*x[0], 4*x[1]])

# Run gradient descent
x0 = np.array([3.0, -2.0])
x_history, f_history = gradient_descent(f, df, x0)

print(f"Starting point: {x0}")
print(f"Final point: {x_history[-1]}")
print(f"Function value at minimum: {f_history[-1]}")
`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Mathematical Foundations</h1>
            <p className="text-xl text-blue-100">
              The essential mathematical concepts underlying reinforcement learning theory and algorithms.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <SectionHeading 
          title="Mathematical Foundations of Reinforcement Learning" 
          subtitle="Understanding the theoretical framework that makes reinforcement learning possible."
        />

        <ContentBlock>
          <p className="text-lg leading-relaxed mb-4">
            Reinforcement learning is built upon a rich mathematical foundation that includes probability theory,
            Markov decision processes, dynamic programming, and optimization. These mathematical tools provide
            the theoretical framework for understanding how agents can learn optimal behavior through interaction
            with an environment.
          </p>
          <p className="mb-4">
            In this section, we'll explore the key mathematical concepts that form the backbone of reinforcement
            learning algorithms and theory. Understanding these foundations is essential for grasping how and why
            reinforcement learning algorithms work.
          </p>
        </ContentBlock>

        {/* Linear Algebra */}
        <LinearAlgebraSection 
          onOpenGuide={handleOpenLinearAlgebraGuide}
          equation="V = Φw"
          description="Linear function approximation of value function V using feature matrix Φ and weight vector w"
        />

        {/* Calculus */}
        <SectionHeading 
          title="Calculus" 
          subtitle="The fundamental mathematical framework for understanding change and optimization."
        />

        <div className="bg-blue-700 rounded-lg overflow-hidden shadow-xl mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Calculus</h2>
            <p className="text-blue-100 mb-6">
              The fundamental mathematical framework for understanding change and optimization.
            </p>

            <button
              onClick={handleOpenCalculusGuide}
              className="block w-full p-6 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-300 mb-8 text-left cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">📚 Calculus in Reinforcement Learning</h3>
              <p className="text-blue-100">
                Click to open the comprehensive guide on calculus fundamentals and their applications in reinforcement learning.
                This document covers derivatives, integrals, and their role in optimization algorithms.
              </p>
            </button>

            <div className="space-y-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Key Concepts in Calculus</h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li><strong className="text-white">Derivatives:</strong> Measuring rates of change and finding optimal solutions</li>
                <li><strong className="text-white">Integrals:</strong> Accumulating continuous quantities over time or space</li>
                <li><strong className="text-white">Multivariate Calculus:</strong> Working with functions of multiple variables</li>
                <li><strong className="text-white">Optimization:</strong> Finding maxima and minima of functions</li>
              </ul>

              <div className="bg-blue-600 p-6 rounded-lg mt-8">
                <h4 className="font-semibold mb-3 text-white">Applications in Reinforcement Learning:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Policy gradient methods use calculus to optimize policy parameters</li>
                  <li>• Value function approximation relies on gradient-based optimization</li>
                  <li>• Temporal difference learning uses derivatives for error minimization</li>
                  <li>• Continuous action spaces require calculus for policy optimization</li>
                </ul>
              </div>

              <div className="mt-8">
                <MathEquation 
                  equation="∇θ J(θ) = E[∇θ log π(a|s;θ) Q(s,a)]" 
                  description="The policy gradient theorem, a fundamental result using calculus for policy optimization"
                />
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Gradient Descent Implementation</h3>
              <p className="mb-4 text-blue-100">
                Here's a practical implementation of gradient descent, a fundamental optimization algorithm used in many reinforcement learning methods:
              </p>
              <CodeBlock code={gradientDescentCode} language="python" />
            </div>
          </div>
        </div>

        {/* Probability Theory */}
        <SectionHeading 
          title="Probability Theory and Random Processes" 
          subtitle="The language of uncertainty and randomness in reinforcement learning."
        />

        <ContentBlock>
          <h3 className="text-xl font-semibold mb-4">Expected Value and Variance</h3>
          <p className="mb-4">
            Expected value (or expectation) is a fundamental concept in reinforcement learning, representing the
            long-term average value of a random variable. For a discrete random variable X with possible values
            x₁, x₂, ..., xₙ and corresponding probabilities p₁, p₂, ..., pₙ, the expected value is:
          </p>
          <MathEquation 
            equation="E[X] = ∑ x_i * p_i" 
            description="Expected value is the sum of each possible value multiplied by its probability."
          />
          <p className="mb-4">
            Variance measures the spread or dispersion of a random variable around its expected value:
          </p>
          <MathEquation 
            equation="Var(X) = E[(X - E[X])²] = E[X²] - (E[X])²" 
            description="Variance is the expected value of the squared deviation from the mean."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Conditional Probability</h3>
          <p className="mb-4">
            Conditional probability is essential for reasoning about the likelihood of events given that other events
            have occurred. The conditional probability of event A given event B is:
          </p>
          <MathEquation 
            equation="P(A|B) = P(A ∩ B) / P(B)" 
            description="The probability of A given B equals the probability of both A and B occurring, divided by the probability of B."
          />
          <p className="mb-4">
            In reinforcement learning, conditional probabilities are used to model state transitions, rewards, and
            the agent's observation of the environment.
          </p>
        </ContentBlock>

        {/* Markov Decision Processes */}
        <SectionHeading 
          title="Markov Decision Processes (MDPs)" 
          subtitle="The mathematical framework for sequential decision making."
        />

        <ContentBlock>
          <p className="mb-4">
            Markov Decision Processes (MDPs) provide the formal framework for most reinforcement learning problems.
            An MDP is defined by:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>S</strong>: A set of states</li>
            <li><strong>A</strong>: A set of actions</li>
            <li><strong>P(s'|s,a)</strong>: Transition probability function, giving the probability of transitioning to state s' from state s after taking action a</li>
            <li><strong>R(s,a,s')</strong>: Reward function, giving the expected immediate reward when transitioning from s to s' via action a</li>
            <li><strong>γ</strong>: Discount factor, which determines the importance of future rewards (0 ≤ γ ≤ 1)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-4">The Markov Property</h3>
          <p className="mb-4">
            The Markov property states that the future depends only on the present state, not on the sequence of
            events that preceded it:
          </p>
          <MathEquation 
            equation="P(s_{t+1}|s_t, a_t, s_{t-1}, a_{t-1}, ..., s_0, a_0) = P(s_{t+1}|s_t, a_t)" 
            description="The probability of the next state depends only on the current state and action, not on the history."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Policies and Value Functions</h3>
          <p className="mb-4">
            A policy π is a mapping from states to probabilities of selecting each possible action. The value
            function V^π(s) of a state s under policy π is the expected return when starting in s and following
            policy π thereafter:
          </p>
          <MathEquation 
            equation="V^π(s) = E_π[R_t | s_t = s] = E_π[∑_{k=0}^∞ γ^k r_{t+k+1} | s_t = s]" 
            description="The state-value function is the expected sum of discounted rewards when starting from state s and following policy π."
          />
          <p className="mb-4">
            Similarly, the action-value function Q^π(s,a) is the expected return when starting in state s, taking
            action a, and following policy π thereafter:
          </p>
          <MathEquation 
            equation="Q^π(s,a) = E_π[R_t | s_t = s, a_t = a] = E_π[∑_{k=0}^∞ γ^k r_{t+k+1} | s_t = s, a_t = a]" 
            description="The action-value function is the expected sum of discounted rewards when starting from state s, taking action a, and following policy π."
          />
        </ContentBlock>

        {/* Bellman Equations */}
        <SectionHeading 
          title="Bellman Equations and Optimality" 
          subtitle="The recursive relationships that define value functions."
        />

        <ContentBlock>
          <p className="mb-4">
            Bellman equations provide recursive relationships for value functions, expressing the value of a state
            in terms of the values of successor states. These equations are the foundation of many reinforcement
            learning algorithms.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Bellman Expectation Equation</h3>
          <p className="mb-4">
            For a given policy π, the Bellman expectation equation for the state-value function is:
          </p>
          <MathEquation 
            equation="V^π(s) = ∑_a π(a|s) ∑_{s'} P(s'|s,a) [R(s,a,s') + γV^π(s')]" 
            description="The value of a state equals the expected reward plus the discounted value of the next state."
          />
          <p className="mb-4">
            And for the action-value function:
          </p>
          <MathEquation 
            equation="Q^π(s,a) = ∑_{s'} P(s'|s,a) [R(s,a,s') + γ ∑_{a'} π(a'|s') Q^π(s',a')]" 
            description="The value of a state-action pair equals the expected reward plus the discounted expected value of the next state-action pair."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Bellman Optimality Equation</h3>
          <p className="mb-4">
            The Bellman optimality equations define the optimal value functions:
          </p>
          <MathEquation 
            equation="V^*(s) = max_a ∑_{s'} P(s'|s,a) [R(s,a,s') + γV^*(s')]" 
            description="The optimal value of a state is the maximum expected reward plus discounted value obtainable by any action."
          />
          <p className="mb-4">
            And for the optimal action-value function:
          </p>
          <MathEquation 
            equation="Q^*(s,a) = ∑_{s'} P(s'|s,a) [R(s,a,s') + γ max_{a'} Q^*(s',a')]" 
            description="The optimal value of a state-action pair is the expected reward plus the discounted maximum value of any action from the next state."
          />
        </ContentBlock>

        {/* Dynamic Programming */}
        <SectionHeading 
          title="Dynamic Programming" 
          subtitle="Solving MDPs through iterative computation of value functions."
        />

        <ContentBlock>
          <p className="mb-4">
            Dynamic programming (DP) provides a collection of algorithms for computing optimal policies given a
            perfect model of the environment as an MDP. While DP methods are limited by their assumptions, they
            provide the mathematical foundation for many reinforcement learning algorithms.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Policy Evaluation</h3>
          <p className="mb-4">
            Policy evaluation computes the state-value function V^π for a given policy π. It involves iteratively
            applying the Bellman expectation equation as an update rule:
          </p>
          <MathEquation 
            equation="V_{k+1}(s) = ∑_a π(a|s) ∑_{s'} P(s'|s,a) [R(s,a,s') + γV_k(s')]" 
            description="Iterative update rule for computing the value function of a policy."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Policy Improvement</h3>
          <p className="mb-4">
            Policy improvement generates a better policy π' from policy π by acting greedily with respect to V^π:
          </p>
          <MathEquation 
            equation="π'(s) = argmax_a ∑_{s'} P(s'|s,a) [R(s,a,s') + γV^π(s')]" 
            description="Policy improvement by selecting actions that maximize expected return."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Policy Iteration and Value Iteration</h3>
          <p className="mb-4">
            Policy iteration alternates between policy evaluation and policy improvement until convergence to the
            optimal policy. Value iteration combines these steps by updating each state's value with the maximum
            over all actions of the expected returns:
          </p>
          <MathEquation 
            equation="V_{k+1}(s) = max_a ∑_{s'} P(s'|s,a) [R(s,a,s') + γV_k(s')]" 
            description="Value iteration update rule for computing the optimal value function."
          />
        </ContentBlock>

        {/* Practice Problems */}
        <SectionHeading 
          title="Practice Problems" 
          subtitle="Test your understanding of the mathematical concepts."
        />

        <ContentBlock>
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold mb-2">Problem 1: Expected Value Calculation</h4>
              <p className="mb-2">
                A reinforcement learning agent is in a simple environment with three possible rewards: +10 with
                probability 0.2, +5 with probability 0.5, and -3 with probability 0.3. Calculate the expected reward.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:text-blue-700">Show Solution</summary>
                <div className="mt-2 p-3 bg-white rounded">
                  <p>E[R] = (10 × 0.2) + (5 × 0.5) + (-3 × 0.3) = 2 + 2.5 - 0.9 = 3.6</p>
                </div>
              </details>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold mb-2">Problem 2: Bellman Equation Application</h4>
              <p className="mb-2">
                Consider a simple MDP with two states (s₁ and s₂) and two actions (a₁ and a₂). The transition
                probabilities and rewards are as follows:
              </p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li>P(s₁|s₁,a₁) = 0.7, R(s₁,a₁,s₁) = 5</li>
                <li>P(s₂|s₁,a₁) = 0.3, R(s₁,a₁,s₂) = 10</li>
                <li>P(s₁|s₁,a₂) = 0.4, R(s₁,a₂,s₁) = 0</li>
                <li>P(s₂|s₁,a₂) = 0.6, R(s₁,a₂,s₂) = 15</li>
              </ul>
              <p className="mb-2">
                Given V(s₂) = 20 and a discount factor γ = 0.9, calculate Q(s₁,a₁) and Q(s₁,a₂).
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:text-blue-700">Show Solution</summary>
                <div className="mt-2 p-3 bg-white rounded">
                  <p>Q(s₁,a₁) = P(s₁|s₁,a₁)[R(s₁,a₁,s₁) + γV(s₁)] + P(s₂|s₁,a₁)[R(s₁,a₁,s₂) + γV(s₂)]</p>
                  <p>Since V(s₁) isn't given, we can only compute the part involving s₂:</p>
                  <p>Q(s₁,a₁) = 0.7[5 + 0.9V(s₁)] + 0.3[10 + 0.9 × 20]</p>
                  <p>Q(s₁,a₁) = 0.7[5 + 0.9V(s₁)] + 0.3[10 + 18] = 0.7[5 + 0.9V(s₁)] + 0.3[28]</p>
                  <p>Q(s₁,a₁) = 3.5 + 0.63V(s₁) + 8.4 = 11.9 + 0.63V(s₁)</p>
                  <p>Similarly for Q(s₁,a₂):</p>
                  <p>Q(s₁,a₂) = 0.4[0 + 0.9V(s₁)] + 0.6[15 + 0.9 × 20] = 0.36V(s₁) + 0.6[15 + 18] = 0.36V(s₁) + 19.8</p>
                </div>
              </details>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default MathFoundationsPage;