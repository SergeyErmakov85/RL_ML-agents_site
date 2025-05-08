import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContentBlock from '../components/ContentBlock';
import MathEquation from '../components/MathEquation';

const MathFoundationsPage: React.FC = () => {
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