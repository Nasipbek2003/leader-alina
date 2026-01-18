import React, { useRef } from 'react'
import { Award, Users, BookOpen, Mic, TrendingUp, Star } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Users,
      title: 'Более 200 клиентов',
      description: 'Создала успешную консалтинговую практику с более чем 200 довольными клиентами',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Mic,
      title: '150+ тренингов',
      description: 'Провела более 150 тренингов по личностному росту и развитию бизнеса',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Автор бестселлера',
      description: 'Написала книгу "Формула успеха в бизнесе", которая стала бестселлером',
      color: 'from-green-600 to-blue-600'
    },
    {
      icon: Award,
      title: 'Международный спикер',
      description: 'Выступаю на международных бизнес-конференциях и форумах',
      color: 'from-yellow-600 to-orange-600'
    }
  ]

  const stats = [
    { number: '8+', label: 'Лет опыта', icon: TrendingUp },
    { number: '200+', label: 'Довольных клиентов', icon: Users },
    { number: '150+', label: 'Проведенных тренингов', icon: Mic },
    { number: '95%', label: 'Успешных проектов', icon: Star }
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
              За годы работы я достигла значительных результатов в области бизнес-консалтинга 
              и помогла сотням предпринимателей реализовать свои цели.
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
