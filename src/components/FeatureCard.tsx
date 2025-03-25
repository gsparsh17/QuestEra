import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: 'blue' | 'green' | 'yellow' | 'purple' | 'red' | 'indigo';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  color = 'blue' 
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-100',
      border: 'border-blue-200'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      hover: 'hover:bg-green-100',
      border: 'border-green-200'
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      hover: 'hover:bg-yellow-100',
      border: 'border-yellow-200'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-100',
      border: 'border-purple-200'
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-600',
      hover: 'hover:bg-red-100',
      border: 'border-red-200'
    },
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      hover: 'hover:bg-indigo-100',
      border: 'border-indigo-200'
    }
  };

  return (
    <div className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 
      ${colorClasses[color].bg} ${colorClasses[color].hover} border ${colorClasses[color].border}
      transform hover:-translate-y-1`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 
        ${colorClasses[color].bg} ${colorClasses[color].text} shadow-inner`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
    </div>
  );
};

export default FeatureCard;