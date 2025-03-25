
import { GraduationCap, BookOpenText, Rocket } from 'lucide-react';

const CurriculumSection = () => {
  const levels = [
    {
      title: "Foundation Level",
      grades: "Class 1-5",
      icon: <BookOpenText className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-100",
      topics: [
        "Understanding money basics",
        "Earning & spending concepts",
        "Basic budgeting with fun activities",
        "Safe transactions through stories",
        "Introduction to banks with games"
      ]
    },
    {
      title: "Intermediate Level",
      grades: "Class 6-8",
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-100",
      topics: [
        "Advanced budgeting with projects",
        "Banking & digital payments",
        "Savings & interest calculations",
        "Earning & entrepreneurship basics",
        "Smart spending decisions"
      ]
    },
    {
      title: "Advanced Level",
      grades: "Class 9-12",
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      color: "bg-indigo-100",
      topics: [
        "Investing basics & stock market",
        "Credit, loans & financial planning",
        "Taxes & economic policies",
        "Career & college financial planning",
        "Financial fraud awareness"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Age-Appropriate Learning
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-blue-600">Curriculum</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored financial education for different age groups
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                {level.icon}
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                {level.title}
              </h3>
              <p className="text-sm text-center text-gray-500 mb-6">{level.grades}</p>
              <ul className="space-y-3">
                {level.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start text-gray-700">
                    <span className={`w-3 h-3 rounded-full mt-1.5 mr-3 flex-shrink-0 ${level.color.replace('bg-', 'bg-')}`}></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;