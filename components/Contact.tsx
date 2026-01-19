import React from 'react'
import { CheckCircle, Instagram, MessageCircle } from 'lucide-react'

// Updated: removed contact form
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Свяжитесь <span className="text-purple-600">со мной</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы начать путь к успеху? Давайте обсудим, как я могу помочь вам достичь ваших целей
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Мои контакты</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <a 
                  href="https://wa.me/996705020238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+996 705 020 238</p>
                  </div>
                </a>
                
                <a
                  href="https://www.instagram.com/leader_alina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <p className="text-purple-600">@leader_alina</p>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4 text-center">Почему выбирают меня?</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span>6 лет в онлайн-бизнесе</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span>700 партнеров в команде</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span>Машина за $43,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span>3 автопроекта в команде</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
