import React, { useRef } from 'react'
import { Award, Users, BookOpen, Mic, TrendingUp, Star } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const openWhatsApp = () => {
    window.open('https://wa.me/996705020238', '_blank')
  }

  const achievements = [
    {
      icon: Users,
      title: 'Команда из 700 партнеров',
      description: 'Создала и развила успешную команду из 700 активных партнеров по всей стране',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Award,
      title: 'Машина за $43,000',
      description: 'Приобрела собственный автомобиль стоимостью $43,000 благодаря успешному бизнесу',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: '3 автопроекта в команде',
      description: '3 партнера из моей команды также приобрели автомобили, достигнув финансового успеха',
      color: 'from-green-600 to-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Собственный магазин',
      description: 'В 2021 году открыла собственный магазин и продолжаю расширять бизнес',
      color: 'from-yellow-600 to-orange-600'
    }
  ]

  const stats = [
    { number: '2020', label: 'Начало пути', icon: Star },
    { number: '700', label: 'Партнеров в команде', icon: Users },
    { number: '$43k', label: 'Своя машина', icon: Award },
    { number: '3', label: 'Автопроекта в команде', icon: TrendingUp }
  ]

  return (
    <section id="achievements" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Мои <span className="text-purple-600">Достижения</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              За 6 лет с 2020 года построила команду из 700 партнеров, приобрела машину за $43,000, 
              а 3 партнера из команды также достигли автопроектов. Мой путь доказывает, что при желании и упорстве можно достичь любых целей.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div 
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white"
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                Готовы к успеху?
              </motion.h3>
              <motion.p 
                className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.9 } : {}}
                transition={{ delay: 0.8 }}
              >
                Позвольте мне помочь вам достичь ваших бизнес-целей и раскрыть ваш потенциал
              </motion.p>
              <motion.button 
                onClick={openWhatsApp}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold"
                whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Начать сотрудничество
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
