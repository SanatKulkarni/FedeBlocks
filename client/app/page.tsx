"use client"

import { useEffect, useRef, useState } from 'react'
import Step from './components/Step'
import Logo from './components/Logo'
import InteractivePage from './components/InteractivePage'
import StarryBackground from './components/StarryBackground'

const steps = [
  {
    title: "Data Distribution",
    description: "Data stays on multiple devices or servers. Each participant has their own local dataset, ensuring privacy and reducing centralized storage needs.",
  },
  {
    title: "Local Model Training",
    description: "Each participant trains a machine learning model on their local dataset. This keeps raw data on the device, maintaining privacy.",
  },
  {
    title: "zk-SNARK Proof Generation",
    description: "After local training, each participant creates a zk-SNARK proof. This shows they've correctly updated their model without revealing the actual data or updates.",
  },
  {
    title: "Aggregation and Verification",
    description: "The central server collects model updates and zk-SNARK proofs. It verifies the proofs to ensure update integrity without learning private information about local datasets.",
  },
  {
    title: "Global Model Update",
    description: "After verifying all proofs, the central server combines the model updates to create a new global model. This updated model is then shared with all participants.",
  },
]

export default function FederatedLearningZkSnarks() {
  const [activeStep, setActiveStep] = useState(0)
  const [showInteractive, setShowInteractive] = useState(false)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.findIndex((ref) => ref === entry.target)
            setActiveStep(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <StarryBackground />
      <main className="container mx-auto px-4 pb-12 relative z-10">
        <div className="h-screen flex flex-col items-center justify-center">
          <Logo />
          <button
            onClick={() => setShowInteractive(true)}
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Try Interactive Demo
          </button>
        </div>
        {showInteractive ? (
          <InteractivePage onClose={() => setShowInteractive(false)} />
        ) : (
          <div className="space-y-[100vh]">
            {steps.map((step, index) => (
              <div key={index} ref={(el) => (stepsRef.current[index] = el)}>
                <Step
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === index}
                  isEven={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        )}
        <footer className="w-full text-center py-4 mt-8">
          <p className="text-sm text-gray-400">Made by Sanat Kulkarni</p>
        </footer>
      </main>
    </div>
  )
}

