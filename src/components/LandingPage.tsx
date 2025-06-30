import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'

export const LandingPage = () => {
  const navItems = [
    { text: "HOME", isActive: true },
    { text: "ABOUT US", isActive: false },
    { text: "CONTACT US", isActive: false },
  ]

  const appSteps = [
    {
      number: 1,
      text: "Mag-sign up at ilagay ang iyong profile. Ibigay ang iyong kasanayan, karanasan, at kung saan ka pwede magtrabaho.",
    },
    {
      number: 2,
      text: "Awtomatikong imatch sa mga trabaho. Gamit ang matalinong sistema, ire-rekomenda ang mga oportunidad na swak sa'yo.",
    },
    {
      number: 3,
      text: "Kumonekta. Mag-apply. Magtrabaho. Diretso sa employer — walang paligoy-ligoy.",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="w-full max-w-[1920px] mx-auto relative">
        {/* Hero Section */}
        <header className="relative w-full min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-indigo-100/50">
          {/* Navigation */}
          <nav className="absolute top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-10">
            <div className="flex items-center justify-start px-16 py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">TH</span>
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-indigo-700">TrabaHope</h1>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex items-center ml-auto space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                      item.isActive 
                        ? "text-indigo-700 font-bold border-b-2 border-indigo-700" 
                        : "text-slate-600 hover:text-indigo-600"
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center min-h-screen pt-32 px-8">
            <div className="text-center max-w-4xl">
              <h2 className="text-6xl font-medium italic text-indigo-800 mb-8 drop-shadow-sm">
                "Trabaho na Tugma sa Galing Mo."
              </h2>
              
              <h3 className="text-5xl font-bold text-slate-800 mb-12 drop-shadow-sm">
                Who are you?
              </h3>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="w-80 h-20 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="text-3xl font-extrabold text-white">
                    I'm a Worker
                  </span>
                </Button>

                <Button className="w-80 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="text-3xl font-extrabold text-white">
                    I'm an Employer
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="relative w-full">
          {/* Mission Section */}
          <section className="w-full py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900">
            <div className="max-w-6xl mx-auto px-8 text-center">
              <h2 className="text-6xl font-medium italic text-white mb-8 drop-shadow-lg">
                Mabilis. Makatotohanan.
                <br />
                Para sa bawat manggagawa.
              </h2>

              <p className="text-3xl font-normal text-amber-300 leading-relaxed drop-shadow-md">
                Maghanap ng trabaho na akma sa iyong kakayahan at lokasyon — walang komplikasyon.
                <br />
                Para sa mga kumpanya, makahanap ng maaasahang tauhan sa ilang pindot lang.
              </p>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-20 px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold text-slate-800 mb-12 text-center drop-shadow-sm">
                Paano Gumagana ang App?
              </h2>

              <div className="space-y-8">
                {appSteps.map((step, index) => (
                  <Card key={index} className="p-8 bg-white/70 backdrop-blur-sm shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-0">
                      <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-white">
                            {step.number}
                          </span>
                        </div>
                        <p className="text-2xl font-normal text-slate-700 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 py-16">
            <div className="max-w-6xl mx-auto px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <blockquote className="text-3xl font-normal italic text-white leading-relaxed drop-shadow-lg">
                    "Hindi lang trabaho. Dito, tugma ang sipag, galing, at oportunidad."
                  </blockquote>
                </div>

                <Separator className="md:hidden h-px bg-white/80" />

                <div className="md:border-l md:border-white/80 md:pl-12">
                  <div className="text-white space-y-2">
                    <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
                    <p className="text-lg leading-relaxed">
                      College of Computer and Information Sciences<br />
                      Polytechnic University of the Philippines<br />
                      <br />
                      In partial fulfillment for the course<br />
                      COMP - Design and Analysis of Algorithm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}