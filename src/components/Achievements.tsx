import React from 'react';
import { Award, Users, BookOpen, Mic, TrendingUp, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Users,
      title: 'Команда из 700 партнеров',
      description: 'Создала и развила успешную команду из 700 активных партнеров по всей стране',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Опыт в банковской сфере',
      description: 'Работала в банке "Бай Тушум", получила ценный опыт в финансовой сфере',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Эксперт онлайн-продаж',
      description: 'С 2021 года успешно развиваю онлайн-бизнес и обучаю других',
      color: 'from-green-600 to-blue-600'
    },
    {
      icon: Award,
      title: 'Собственный магазин',
      description: 'В 2024 году открыла собственный магазин и продолжаю расширять бизнес',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  const stats = [
    { number: '2011', label: 'Начало пути', icon: Star },
    { number: '700', label: 'Партнеров в команде', icon: Users },
    { number: '2021', label: 'Старт онлайн-бизнеса', icon: TrendingUp },
    { number: '2024', label: 'Открытие магазина', icon: Award }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Мои <span className="text-purple-600">Достижения</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От выпускницы сельской школы до успешного предпринимателя с командой из 700 партнеров. 
              Мой путь доказывает, что при желании и упорстве можно достичь любых целей.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Готовы к успеху?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Позвольте мне помочь вам достичь ваших бизнес-целей и раскрыть ваш потенциал
              </p>
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Начать сотрудничество
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}