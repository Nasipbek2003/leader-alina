import React from 'react'
import { Mail, Instagram, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">А</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">Алина Абдрахманова</div>
                  <div className="text-purple-400">Путь к успеху</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Профессиональный бизнес-консультант и мотивационный спикер. 
                Помогаю предпринимателям достигать целей через эффективные стратегии развития.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:leader_alina"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/leader_alina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Бизнес-возможности</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Готовая бизнес-система</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение с нуля</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наставничество</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Онлайн-формат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьерный рост</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
                <li><a href="#achievements" className="hover:text-white transition-colors">Достижения</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Бизнес-возможность</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} Алина Абдрахманова. Создано с</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>для вашего успеха</span>
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
