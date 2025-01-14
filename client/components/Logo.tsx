import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" stroke="#4CAF50" strokeWidth="4" />
        <circle cx="200" cy="200" r="140" stroke="#2196F3" strokeWidth="4" />
        <circle cx="200" cy="200" r="100" stroke="#FFC107" strokeWidth="4" />
        <path d="M200 20 L200 380 M20 200 L380 200" stroke="white" strokeWidth="2" />
        <circle cx="200" cy="200" r="20" fill="#FF5722" />
        
        {/* Additional diagrams */}
        <g transform="translate(50, 50)">
          <rect width="60" height="60" rx="5" fill="#4CAF50" opacity="0.7" />
          <text x="30" y="75" textAnchor="middle" fill="white" fontSize="12">Device 1</text>
        </g>
        <g transform="translate(290, 50)">
          <rect width="60" height="60" rx="5" fill="#2196F3" opacity="0.7" />
          <text x="30" y="75" textAnchor="middle" fill="white" fontSize="12">Device 2</text>
        </g>
        <g transform="translate(50, 290)">
          <rect width="60" height="60" rx="5" fill="#FFC107" opacity="0.7" />
          <text x="30" y="75" textAnchor="middle" fill="white" fontSize="12">Device 3</text>
        </g>
        <g transform="translate(290, 290)">
          <rect width="60" height="60" rx="5" fill="#9C27B0" opacity="0.7" />
          <text x="30" y="75" textAnchor="middle" fill="white" fontSize="12">Server</text>
        </g>
        
        {/* Connecting lines */}
        <path d="M110 110 L290 290" stroke="white" strokeWidth="2" opacity="0.5" />
        <path d="M290 110 L110 290" stroke="white" strokeWidth="2" opacity="0.5" />
      </svg>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-4xl font-bold mt-4"
      >
        Federated Learning
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-2xl text-gray-400"
      >
        with zk-SNARKs
      </motion.h2>
    </motion.div>
  )
}

