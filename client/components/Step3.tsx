import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

interface StepProps {
  isActive: boolean
}

export default function Step3({ isActive }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 3: zk-SNARK Proof Generation</h2>
        <p className="mb-4">
          After local training, each participant generates a zk-SNARK proof. This proof demonstrates that they have correctly updated their model parameters without revealing the actual data or the specific updates.
        </p>
        <div className="flex justify-center">
          <svg width="200" height="100" viewBox="0 0 200 100">
            <rect x="10" y="10" width="50" height="80" rx="5" fill="#4CAF50" />
            <circle cx="35" cy="50" r="15" fill="#FF5722" />
            <rect x="75" y="10" width="50" height="80" rx="5" fill="#2196F3" />
            <circle cx="100" cy="50" r="15" fill="#FF5722" />
            <rect x="140" y="10" width="50" height="80" rx="5" fill="#FFC107" />
            <circle cx="165" cy="50" r="15" fill="#FF5722" />
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

