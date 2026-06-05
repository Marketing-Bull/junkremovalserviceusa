const steps = [
  {
    step: "1",
    title: "Book in 2 Minutes",
    description: "Choose your service, pick a time window, and submit your request — all online. No credit card needed.",
  },
  {
    step: "2",
    title: "We Arrive. You Just Point.",
    description: "Your crew shows up at the scheduled window, takes a look at what needs to go, and gives you a firm upfront price. No obligation — you can say no at any time.",
  },
  {
    step: "3",
    title: "Junk Gone. Space Reclaimed.",
    description: "Say yes and we get straight to work. All the lifting, loading, and cleanup — done. You don't have to lift a finger.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-500 text-lg">Three simple steps to a junk-free space</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                {step.step}
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-green-100" style={{ zIndex: -1 }} />
              )}
              <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
