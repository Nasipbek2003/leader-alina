import React from 'react';
import { GraduationCap, Briefcase, Target, Heart } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2011',
      title: 'Окончание средней школы',
      description: 'Закончила среднюю школу в селе и начала путь к высшему образованию'
    },
    {
      year: '2015',
      title: 'Экономический университет',
      description: 'Получила диплом Экономического университета в Бишкеке'
    },
    {
      year: '2017',
      title: 'Создание семьи',
      description: 'Вышла замуж за замечательного мужчину и начала новый этап жизни'
    },
    {
      year: '2019',
      title: 'Работа в банке "Бай Тушум"',
      description: 'Начала карьеру в банковской сфере, получила ценный опыт в финансах'
    },
    {
      year: '2021',
      title: 'Начало онлайн-бизнеса',
      description: 'Начала заниматься онлайн-продажами, вникла в эту сферу и создала свою команду'
    },
    {
      year: '2024',
      title: 'Открытие магазина',
      description: 'Открыла собственный магазин, команда выросла до 700 партнеров'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Моя <span className="text-purple-600">История</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мой путь начался в селе, где я закончила школу в 2011 году. После получения высшего образования 
              в Экономическом университете Бишкека, я прошла путь от банковского сотрудника до успешного предпринимателя 
              с командой из 700 партнеров.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Путь к успеху</h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="absolute left-2 top-4 w-0.5 h-full bg-purple-200"></div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-purple-600 font-bold text-sm mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Values */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Моя Миссия</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Помогать амбициозным предпринимателям и профессионалам достигать своих целей 
                  через эффективные стратегии развития и личностный рост.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Практические решения для реального бизнеса</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Долгосрочное партнерство и поддержка</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Присоединяйтесь к Команде</h3>
                </div>
                <p className="mb-6 opacity-90">
                  Я всегда в поиске талантливых единомышленников! Если вы:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Стремитесь к постоянному развитию</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Готовы делиться знаниями</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Хотите менять жизни людей к лучшему</span>
                  </div>
                </div>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Связаться со мной
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}