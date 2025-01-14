import { motion } from 'framer-motion'

interface StepProps {
  isActive: boolean
}

export default function Step5({ isActive }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 5: Global Model Update</h2>
        <p className="mb-4">
          After verifying all proofs, the central server aggregates the model updates to create a new global model. This updated model is then distributed back to all participants, completing one round of federated learning with zk-SNARKs.
        </p>
        <div className="flex justify-center">
          <svg width="200" height="120" viewBox="0 0 200 120">
            <rect x="75" y="10" width="50" height="50" rx="5" fill="#9C27B0" />
            <path d="M35 60 L100 85" stroke="white" strokeWidth="2" fill="none" />
            <path d="M100 85 L165 60" stroke="white" strokeWidth="2" fill="none" />
            <rect x="10" y="70" width="50" height="40" rx="5" fill="#4CAF50" />
            <rect x="75" y="70" width="50" height="40" rx="5" fill="#2196F3" />
            <rect x="140" y="70" width="50" height="40" rx="5" fill="#FFC107" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

