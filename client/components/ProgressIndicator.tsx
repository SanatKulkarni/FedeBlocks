import { motion } from 'framer-motion'

interface ProgressIndicatorProps {
  activeStep: number
  totalSteps: number
}

export default function ProgressIndicator({ activeStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-20 right-4 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg p-4">
      <h3 className="text-sm font-semibold mb-2">Progress</h3>
      <div className="space-y-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <motion.div
            key={index}
            className="h-2 bg-gray-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: index <= activeStep ? '100%' : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: index === activeStep ? '100%' : 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

