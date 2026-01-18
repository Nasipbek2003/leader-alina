import { ChevronDown, Star } from 'lucide-react';
import Image from 'next/image';
import alinaImg from '../assets/alina.png';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  <span>Лидер Алина №1</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Абдрахманова
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Алина
                  </span>
                </h1>
                <div className="text-2xl font-semibold text-gray-700 mb-6">
                  Путь к успеху
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Профессиональный бизнес-консультант и мотивационный спикер с 5-летним опытом в сфере развития бизнеса и личностного роста.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">700</div>
                  <div className="text-sm text-gray-600">партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">150+</div>
                  <div className="text-sm text-gray-600">тренингов</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Начать сотрудничество
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:shadow-md transition-all duration-300"
                >
                  Узнать больше
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 w-full max-w-xs mx-auto">
                <Image
                  src={alinaImg}
                  alt="Абдрахманова Алина"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-16">
            <button
              onClick={scrollToNext}
              className="animate-bounce p-2 text-gray-500 hover:text-purple-600 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}