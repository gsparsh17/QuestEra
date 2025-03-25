
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import CurriculumSection from '../components/CurriculumSection';
import { BookOpen, Trophy, BarChart, Users, Brain, Award, Sparkles, Smile } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Structured Learning",
      description: "Age-appropriate financial concepts from Class 1 to 12"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Learning",
      description: "Personalized tasks and adaptive learning paths"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Gamification",
      description: "Interactive challenges, quizzes, and leaderboards"
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-600" />,
      title: "Progress Tracking",
      description: "Comprehensive analytics and performance insights"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Teacher Dashboard",
      description: "Task assignment and student monitoring tools"
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Certification",
      description: "Recognition upon module completion"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Making <span className="text-blue-600">Financial Learning</span> Fun
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform transforms financial education into an exciting journey for students of all ages
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <CurriculumSection />
      
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Smile className="w-4 h-4 mr-2" />
            Join Thousands of Schools
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Financial Education?</h2>
          <p className="text-xl mb-8">Join schools across India in preparing the next generation for financial success.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;