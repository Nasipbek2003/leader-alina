import React from 'react';
import { Users, TrendingUp, BookOpen, Smartphone, Target, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Готовая бизнес-система',
      description: 'Подключение к проверенной платформе с готовой инфраструктурой для старта.',
      features: ['Регистрация на официальной платформе', 'Личный кабинет партнёра', 'Доступ к сайту для селлеров', 'Пошаговый старт без сложностей']
    },
    {
      icon: BookOpen,
      title: 'Обучение с нуля',
      description: 'Полное обучение всем аспектам бизнеса, даже если у вас нет опыта в продажах.',
      features: ['Как начать без опыта в продажах', 'Привлечение людей онлайн', 'Правильная презентация продукта', 'Выстраивание команды']
    },
    {
      icon: Target,
      title: 'Наставничество и поддержка',
      description: 'Личный наставник на каждом этапе развития с постоянной поддержкой.',
      features: ['Личный наставник', 'Ответы на все вопросы', 'Помощь в первых шагах', 'Поддержка до результата']
    },
    {
      icon: TrendingUp,
      title: 'Доход и карьерный рост',
      description: 'Многоуровневая система дохода с возможностью карьерного роста.',
      features: ['Процент с личных продаж', 'Доход от командного оборота', 'Карьерная система со статусами', 'Возможность выхода на уровень Лидера']
    },
    {
      icon: Globe,
      title: 'Онлайн-формат',
      description: 'Полностью удаленная работа с гибким графиком из любой точки мира.',
      features: ['Работа из любой точки мира', 'Свободный график', 'Совмещение с учёбой/работой/декретом', 'Нужен только телефон и интернет']
    },
    {
      icon: Smartphone,
      title: 'Цифровые инструменты',
      description: 'Современные инструменты для работы в социальных сетях и мессенджерах.',
      features: ['Работа через соцсети', 'Использование мессенджеров', 'Цифровые материалы', 'Автоматизированные процессы']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Бизнес-<span className="text-purple-600">Возможность</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Присоединяйтесь к готовой бизнес-системе с полным обучением и поддержкой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Как начать работать</h3>
              <p className="text-lg text-gray-600">Простые шаги для старта в бизнесе</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Регистрация', description: 'Регистрация на официальной платформе компании и получение доступа' },
                { step: '02', title: 'Обучение', description: 'Прохождение обучения с личным наставником в удобном формате' },
                { step: '03', title: 'Практика', description: 'Первые шаги в бизнесе с поддержкой и ответами на все вопросы' },
                { step: '04', title: 'Развитие', description: 'Рост дохода и карьерное развитие в зависимости от активности' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
              <p className="text-lg mb-6 opacity-90">
                Рост дохода зависит от твоей активности и желания развиваться. 
                Ты не остаёшься один(одна) — мы работаем командой.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ Обучение с нуля</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ Личный наставник</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ Онлайн-формат</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✅ Свободный график</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
