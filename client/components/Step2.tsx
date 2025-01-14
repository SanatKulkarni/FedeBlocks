import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

interface StepProps {
  isActive: boolean
}

export default function Step2({ isActive }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 2: Local Model Training</h2>
        <p className="mb-4">
          Each participant trains a machine learning model on their local dataset. This process ensures that raw data never leaves the device, maintaining privacy.
        </p>
        <div className="flex justify-center">
          <svg width="200" height="100" viewBox="0 0 200 100">
            <rect x="10" y="10" width="50" height="80" rx="5" fill="#4CAF50" />
            <path d="M35 50 L60 30 L85 70" stroke="white" strokeWidth="2" fill="none" />
            <rect x="75" y="10" width="50" height="80" rx="5" fill="#2196F3" />
            <path d="M100 50 L125 20 L150 60" stroke="white" strokeWidth="2" fill="none" />
            <rect x="140" y="10" width="50" height="80" rx="5" fill="#FFC107" />
            <path d="M165 50 L190 40 L215 80" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="absolute left-1/2 transform -translate-x-1/2 mt-4"
      >
        <ArrowDown className="w-8 h-8 text-blue-400" />
      </motion.div>
    </motion.div>
  )
}

