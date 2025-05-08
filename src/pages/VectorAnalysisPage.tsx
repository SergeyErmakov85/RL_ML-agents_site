import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContentBlock from '../components/ContentBlock';
import MathEquation from '../components/MathEquation';
import CodeBlock from '../components/CodeBlock';

const VectorAnalysisPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">Vector and Numerical Analysis</h1>
            <p className="text-xl text-blue-100">
              Understanding optimization in multidimensional spaces and numerical methods.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <SectionHeading 
          title="Vector Analysis and Optimization" 
          subtitle="Mathematical tools for understanding and implementing gradient-based learning methods."
        />

        <ContentBlock>
          <p className="text-lg leading-relaxed mb-4">
            Many reinforcement learning algorithms, especially those based on function approximation, rely on
            optimization techniques to find optimal policies or value functions. Understanding vector calculus
            and numerical optimization methods is crucial for implementing and analyzing these algorithms.
          </p>
          <p className="mb-4">
            In this section, we'll explore the mathematical foundations of gradient-based optimization methods
            commonly used in reinforcement learning, including gradient descent, stochastic gradient descent, and
            their variants.
          </p>
        </ContentBlock>

        {/* Gradients and Derivatives */}
        <SectionHeading 
          title="Gradients and Derivatives" 
          subtitle="The mathematical tools for understanding directions of steepest ascent and descent."
        />

        <ContentBlock>
          <h3 className="text-xl font-semibold mb-4">Partial Derivatives</h3>
          <p className="mb-4">
            A partial derivative measures how a function changes when one variable is varied while others are held constant.
            For a function f(x, y), the partial derivatives are:
          </p>
          <MathEquation 
            equation="∂f/∂x = lim_{h→0} [f(x+h, y) - f(x, y)]/h" 
            description="Partial derivative with respect to x, holding y constant."
          />
          <MathEquation 
            equation="∂f/∂y = lim_{h→0} [f(x, y+h) - f(x, y)]/h" 
            description="Partial derivative with respect to y, holding x constant."
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Gradient Vector</h3>
          <p className="mb-4">
            The gradient of a scalar function f(x) is a vector field whose components are the partial derivatives of f:
          </p>
          <MathEquation 
            equation="∇f(x) = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]" 
            description="The gradient vector points in the direction of steepest ascent."
          />
          <p className="mb-4">
            Key properties of the gradient:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The gradient vector points in the direction of steepest ascent of the function</li>
            <li>The negative gradient -∇f(x) points in the direction of steepest descent</li>
            <li>The magnitude of the gradient indicates the rate of increase in that direction</li>
            <li>At a local minimum or maximum, the gradient is the zero vector</li>
          </ul>
        </ContentBlock>

        {/* Optimization in Multidimensional Spaces */}
        <SectionHeading 
          title="Optimization in Multidimensional Spaces" 
          subtitle="Techniques for finding minima and maxima of functions with multiple variables."
        />

        <ContentBlock>
          <h3 className="text-xl font-semibold mb-4">Critical Points</h3>
          <p className="mb-4">
            Critical points of a function are points where the gradient is zero:
          </p>
          <MathEquation 
            equation="∇f(x) = 0" 
            description="At critical points, all partial derivatives are zero."
          />
          <p className="mb-4">
            Critical points can be classified as:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Local minimum:</strong> The function value is less than or equal to all nearby points</li>
            <li><strong>Local maximum:</strong> The function value is greater than or equal to all nearby points</li>
            <li><strong>Saddle point:</strong> The function increases in some directions and decreases in others</li>
            <li><strong>Global minimum/maximum:</strong> The minimum/maximum value across the entire domain</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Hessian Matrix</h3>
          <p className="mb-4">
            The Hessian matrix contains the second-order partial derivatives of a function:
          </p>
          <MathEquation 
            equation="H(f)(x) = [∂²f/∂xᵢ∂xⱼ]" 
            description="The Hessian matrix provides information about the curvature of the function."
          />
          <p className="mb-4">
            The Hessian can be used to classify critical points:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>If H is positive definite (all eigenvalues &gt; 0), the critical point is a local minimum</li>
            <li>If H is negative definite (all eigenvalues &lt; 0), the critical point is a local maximum</li>
            <li>If H has both positive and negative eigenvalues, the critical point is a saddle point</li>
          </ul>
        </ContentBlock>

        {/* Numerical Optimization Methods */}
        <SectionHeading 
          title="Numerical Optimization Methods" 
          subtitle="Algorithms for finding optimal solutions in practice."
        />

        <ContentBlock>
          <h3 className="text-xl font-semibold mb-4">Gradient Descent</h3>
          <p className="mb-4">
            Gradient descent is an iterative optimization algorithm for finding a local minimum of a function.
            It works by taking steps in the direction of steepest descent:
          </p>
          <MathEquation 
            equation="x_{t+1} = x_t - α∇f(x_t)" 
            description="Gradient descent update rule, where α is the learning rate."
          />
          <p className="mb-4">
            The learning rate α controls the step size:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>If α is too small, convergence will be slow</li>
            <li>If α is too large, the algorithm may overshoot and fail to converge</li>
          </ul>
          <p className="mb-4">
            Here's a simple implementation of gradient descent:
          </p>
          <CodeBlock 
            language="python" 
            title="Gradient Descent Implementation"
            code={gradientDescentCode.trim()} 
          />
          
          <h3 className="text-xl font-semibold mb-4 mt-8">Stochastic Gradient Descent (SGD)</h3>
          <p className="mb-4">
            Stochastic gradient descent approximates the true gradient using a small batch or single sample,
            making it computationally more efficient for large datasets:
          </p>
          <MathEquation 
            equation="x_{t+1} = x_t - α∇f_i(x_t)" 
            description="SGD update rule, where ∇f_i is the gradient computed from a single sample or small batch."
          />
          <p className="mb-4">
            Advantages of SGD:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Computationally more efficient for large datasets</li>
            <li>Can escape local minima due to noise in the gradient estimates</li>
            <li>Often results in faster convergence in practice</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-4 mt-8">SGD Variants</h3>
          <p className="mb-4">
            Several variants of SGD have been developed to improve convergence:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Momentum:</strong> Adds a fraction of the previous update to the current one, helping to dampen oscillations</li>
            <li><strong>RMSProp:</strong> Adapts the learning rate for each parameter based on the history of gradients</li>
            <li><strong>Adam:</strong> Combines the advantages of momentum and RMSProp, with adaptive learning rates for each parameter</li>
          </ul>
        </ContentBlock>

        {/* Applications in Reinforcement Learning */}
        <SectionHeading 
          title="Applications in Reinforcement Learning" 
          subtitle="How optimization techniques are used in RL algorithms."
        />

        <ContentBlock>
          <p className="mb-4">
            Optimization methods play a crucial role in various reinforcement learning algorithms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Policy Gradient Methods</h4>
              <p>
                Policy gradient methods use gradient ascent to maximize the expected return. The objective function
                is the expected return, and we update the policy parameters in the direction of the gradient.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Deep Q-Networks (DQN)</h4>
              <p>
                DQN uses neural networks to approximate the Q-function. The network parameters are updated using
                variants of stochastic gradient descent to minimize the temporal difference error.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Actor-Critic Methods</h4>
              <p>
                Actor-critic methods optimize both a policy (actor) and a value function (critic) simultaneously,
                often using different optimization techniques for each component.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Proximal Policy Optimization (PPO)</h4>
              <p>
                PPO uses a constrained optimization approach to improve policies while ensuring that the new policy
                doesn't deviate too much from the old one, enhancing stability.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Challenges in RL Optimization</h3>
          <p className="mb-4">
            Optimization in reinforcement learning faces several challenges:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Non-stationarity:</strong> The optimization target changes as the policy and value function evolve</li>
            <li><strong>Sample efficiency:</strong> Collecting experience can be expensive, requiring efficient use of data</li>
            <li><strong>Exploration-exploitation trade-off:</strong> Balancing finding better policies with exploiting known good ones</li>
            <li><strong>Credit assignment:</strong> Determining which actions in a sequence contributed to the observed reward</li>
            <li><strong>High-dimensional spaces:</strong> Many RL problems involve high-dimensional state and action spaces</li>
          </ul>
        </ContentBlock>
      </div>
    </div>
  );
};

export default VectorAnalysisPage;