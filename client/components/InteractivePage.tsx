"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface InteractivePageProps {
  onClose: () => void
}

export default function InteractivePage({ onClose }: InteractivePageProps) {
  const [localData, setLocalData] = useState('')
  const [globalModel, setGlobalModel] = useState<string[]>([])
  const [zkProof, setZkProof] = useState('')
  const [isGeneratingProof, setIsGeneratingProof] = useState(false)

  useEffect(() => {
    const storedGlobalModel = localStorage.getItem('globalModel')
    if (storedGlobalModel) {
      setGlobalModel(JSON.parse(storedGlobalModel))
    }
  }, [])

  const generateSHA256Proof = async () => {
    const randomData = new Uint8Array(32);
    crypto.getRandomValues(randomData);
    const hashBuffer = await crypto.subtle.digest('SHA-256', randomData);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGeneratingProof(true)
    
    // Simulate proof generation delay
    await new Promise(resolve => setTimeout(resolve, 4000))
    
    const newGlobalModel = [...globalModel, localData]
    setGlobalModel(newGlobalModel)
    localStorage.setItem('globalModel', JSON.stringify(newGlobalModel))
    setLocalData('')
    const proof = await generateSHA256Proof()
    setZkProof(proof)
    setIsGeneratingProof(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h2 className="text-3xl font-bold mb-8">Interactive Federated Learning Demo</h2>
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="localData" className="block text-sm font-medium mb-2">
            Enter Local Data:
          </label>
          <input
            type="text"
            id="localData"
            value={localData}
            onChange={(e) => setLocalData(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isGeneratingProof}
          >
            {isGeneratingProof ? 'Generating Proof...' : 'Submit Data'}
          </button>
        </form>
        {isGeneratingProof && (
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Loader2 className="h-6 w-6 animate-spin text-green-500" />
            <span className="text-green-500 font-semibold">Generating zk-SNARK proof...</span>
          </div>
        )}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Global Model:</h3>
          <ul className="list-disc pl-5">
            {globalModel.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
        {zkProof && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">zk-SNARK Proof:</h3>
            <p className="bg-gray-700 p-2 rounded-md break-all">{zkProof}</p>
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        className="mt-8 px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
      >
        Back to Main Page
      </button>
    </motion.div>
  )
}

