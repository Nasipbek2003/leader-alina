import React from 'react'
import { GraduationCap, Briefcase, Target, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const openWhatsApp = () => {
    window.open('https://wa.me/996705020238', '_blank')
  }

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
      year: '2020',
      title: 'Начало пути в бизнесе',
      description: 'Начала свой путь в сфере онлайн-бизнеса и предпринимательства'
    },
    {
      year: '2021',
      title: 'Старт онлайн-бизнеса',
      description: 'Запустила онлайн-бизнес, открыла магазин и приобрела свою первую машину за $43,000'
    },
    {
      year: '2022',
      title: 'Рост команды',
      description: '3 партнера из команды также приобрели автомобили, команда активно растет'
    },
    {
      year: '2024',
      title: 'Команда 700 партнеров',
      description: 'Команда выросла до 700 активных партнеров по всей стране'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Моя <span className="text-purple-600">История</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мой путь начался в селе, где я закончила школу в 2011 году. После получения высшего образования 
              в Экономическом университете Бишкека и работы в банке, в 2020 году я начала свой путь в онлайн-бизнесе. 
              За 6 лет построила команду из 700 партнеров и приобрела машину за $43,000.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Путь к успеху
              </motion.h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div 
                      className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <div className="absolute left-2 top-4 w-0.5 h-full bg-purple-200"></div>
                    <motion.div 
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-purple-600 font-bold text-sm mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Моя Миссия</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Помогать амбициозным предпринимателям и профессионалам достигать своих целей 
                  через эффективные стратегии развития и личностный рост.
                </p>
                <div className="space-y-3">
                  {[
                    'Индивидуальный подход к каждому клиенту',
                    'Практические решения для реального бизнеса',
                    'Долгосрочное партнерство и поддержка'
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Присоединяйтесь к Команде</h3>
                </div>
                <p className="mb-6 opacity-90">
                  Я всегда в поиске талантливых единомышленников! Если вы:
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Стремитесь к постоянному развитию',
                    'Готовы делиться знаниями',
                    'Хотите менять жизни людей к лучшему'
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button 
                  onClick={openWhatsApp}
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Связаться со мной
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
