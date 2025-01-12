// components/PricingSection.js
import React from "react";

const PricingSection = ({ pricingPlans }) => {
  if (!pricingPlans || pricingPlans.length === 0) {
    return <div>No plans available.</div>;
  }

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-24 lg:px-32">
      <div className="container mx-auto text-center">
        {/* Changed the title here */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Unlock Premium Features
        </h2>{" "}
        {/* More attractive title */}
        <p className="text-gray-600 mb-8">
          Choose the plan that's right for you and elevate your ChatTogether
          experience.
        </p>{" "}
        {/* Added a tagline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-600 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
