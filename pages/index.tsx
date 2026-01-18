import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Home() {
  const { activeSection, setActiveSection } = useActiveSection()

  return (
    <>
      <Head>
        <title>Абдрахманова Алина - Путь к успеху | Бизнес-консультант и мотивационный спикер</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero />
        <About />
        <Achievements />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
