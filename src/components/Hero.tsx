
import { School, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] bg-repeat"></div>
      </div>
      <div className="max-w-7xl mx-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                <School className="w-4 h-4 mr-2" />
                For Students Class 1-12
              </div>
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
                <span className="block">Financial Wisdom</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 py-4">
                  For Young Minds
                </span>
              </h1>
              <p className="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                Making money management fun and accessible through interactive, age-appropriate learning experiences.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg transition-all hover:shadow-xl">
                    Get Started
                    <Sparkles className="w-5 h-5 ml-2" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all">
                    See How It Works
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Happy students learning financial concepts"
        />
      </div>
    </div>
  );
};

export default Hero;