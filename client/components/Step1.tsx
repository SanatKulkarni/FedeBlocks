import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

interface StepProps {
  isActive: boolean
}

export default function Step1({ isActive }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 1: Data Distribution</h2>
        <p className="mb-4">
          In federated learning, data remains distributed across multiple devices or servers. Each participant has their own local dataset, ensuring data privacy and reducing the need for centralized data storage.
        </p>
        <div className="flex justify-center">
          <svg width="200" height="100" viewBox="0 0 200 100">
            <rect x="10" y="10" width="50" height="80" rx="5" fill="#4CAF50" />
            <rect x="75" y="10" width="50" height="80" rx="5" fill="#2196F3" />
            <rect x="140" y="10" width="50" height="80" rx="5" fill="#FFC107" />
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

