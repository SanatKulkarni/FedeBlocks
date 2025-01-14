import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

interface StepProps {
  isActive: boolean
}

export default function Step4({ isActive }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 4: Aggregation and Verification</h2>
        <p className="mb-4">
          The central server collects the model updates and zk-SNARK proofs from all participants. It verifies the proofs to ensure the integrity of the updates without learning any private information about the local datasets.
        </p>
        <div className="flex justify-center">
          <svg width="200" height="120" viewBox="0 0 200 120">
            <rect x="75" y="10" width="50" height="50" rx="5" fill="#9C27B0" />
            <path d="M35 60 L100 35" stroke="white" strokeWidth="2" fill="none" />
            <path d="M100 35 L165 60" stroke="white" strokeWidth="2" fill="none" />
            <rect x="10" y="70" width="50" height="40" rx="5" fill="#4CAF50" />
            <rect x="75" y="70" width="50" height="40" rx="5" fill="#2196F3" />
            <rect x="140" y="70" width="50" height="40" rx="5" fill="#FFC107" />
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

