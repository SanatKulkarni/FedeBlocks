"use client"

import { motion, SVGMotionProps } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface StepProps {
  stepNumber: number
  title: string
  description: string
  isActive: boolean
  isEven: boolean
}

export default function Step({ stepNumber, title, description, isActive, isEven }: StepProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isActive && svgRef.current) {
      const svg = svgRef.current
      const elements = svg.querySelectorAll('circle, rect, path, text')
      elements.forEach((el, index) => {
        el.style.opacity = '0'
        el.animate(
          [
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          {
            duration: 500,
            delay: index * 100,
            fill: 'forwards'
          }
        )
      })
    }
  }, [isActive])

  const MotionPath = motion<SVGMotionProps<SVGPathElement>>('path')
  const MotionRect = motion<SVGMotionProps<SVGRectElement>>('rect')
  const MotionCircle = motion<SVGMotionProps<SVGCircleElement>>('circle')
  const MotionText = motion<SVGMotionProps<SVGTextElement>>('text')

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }

  const renderSVG = () => {
    switch (stepNumber) {
      case 1:
        return (
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="50" y="50" width="200" height="300" rx="10" fill="#4CAF50" opacity="0.8" />
            <rect x="300" y="50" width="200" height="300" rx="10" fill="#2196F3" opacity="0.8" />
            <rect x="550" y="50" width="200" height="300" rx="10" fill="#FFC107" opacity="0.8" />
            
            <text x="150" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 1</text>
            <text x="400" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 2</text>
            <text x="650" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 3</text>

            <text x="150" y="200" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Local Data</text>
            <text x="400" y="200" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Local Data</text>
            <text x="650" y="200" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Local Data</text>

            <text x="400" y="390" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Data remains on individual devices</text>
          </svg>
        )
      case 2:
        return (
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="50" y="50" width="200" height="300" rx="10" fill="#4CAF50" opacity="0.8" />
            <rect x="300" y="50" width="200" height="300" rx="10" fill="#2196F3" opacity="0.8" />
            <rect x="550" y="50" width="200" height="300" rx="10" fill="#FFC107" opacity="0.8" />

            <text x="150" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 1</text>
            <text x="400" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 2</text>
            <text x="650" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 3</text>

            <path d="M100 200 L200 150 L200 250 Z" fill="white" opacity="0.9" />
            <path d="M350 200 L450 150 L450 250 Z" fill="white" opacity="0.9" />
            <path d="M600 200 L700 150 L700 250 Z" fill="white" opacity="0.9" />

            <text x="400" y="390" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Local model training on each device</text>
          </svg>
        )
      case 3:
        return (
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="50" y="50" width="200" height="300" rx="10" fill="#4CAF50" opacity="0.8" />
            <rect x="300" y="50" width="200" height="300" rx="10" fill="#2196F3" opacity="0.8" />
            <rect x="550" y="50" width="200" height="300" rx="10" fill="#FFC107" opacity="0.8" />

            <text x="150" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 1</text>
            <text x="400" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 2</text>
            <text x="650" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 3</text>

            <circle cx="150" cy="200" r="60" fill="#FF5722" opacity="0.9" />
            <circle cx="400" cy="200" r="60" fill="#FF5722" opacity="0.9" />
            <circle cx="650" cy="200" r="60" fill="#FF5722" opacity="0.9" />

            <text x="150" y="190" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">zk-SNARK</text>
            <text x="150" y="210" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Proof</text>
            <text x="400" y="190" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">zk-SNARK</text>
            <text x="400" y="210" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Proof</text>
            <text x="650" y="190" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">zk-SNARK</text>
            <text x="650" y="210" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Proof</text>

            <text x="400" y="390" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Generate zk-SNARK proofs for model updates</text>
          </svg>
        )
      case 4:
        return (
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="300" y="50" width="200" height="100" rx="10" fill="#9C27B0" opacity="0.8" />
            <text x="400" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Central Server</text>

            <path d="M150 200 L400 150" stroke="white" strokeWidth="4" fill="none" opacity="0.8" />
            <path d="M400 150 L650 200" stroke="white" strokeWidth="4" fill="none" opacity="0.8" />

            <rect x="50" y="250" width="200" height="100" rx="10" fill="#4CAF50" opacity="0.8" />
            <rect x="300" y="250" width="200" height="100" rx="10" fill="#2196F3" opacity="0.8" />
            <rect x="550" y="250" width="200" height="100" rx="10" fill="#FFC107" opacity="0.8" />

            <text x="150" y="300" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Update 1</text>
            <text x="400" y="300" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Update 2</text>
            <text x="650" y="300" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Update 3</text>

            <text x="400" y="390" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Server aggregates and verifies proofs</text>
          </svg>
        )
      case 5:
        return (
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect x="300" y="50" width="200" height="100" rx="10" fill="#9C27B0" opacity="0.8" />
            <text x="400" y="30" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Central Server</text>
            <text x="400" y="100" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Global Model</text>

            <path d="M150 250 L400 150" stroke="white" strokeWidth="4" fill="none" opacity="0.8" />
            <path d="M400 150 L650 250" stroke="white" strokeWidth="4" fill="none" opacity="0.8" />

            <rect x="50" y="250" width="200" height="100" rx="10" fill="#4CAF50" opacity="0.8" />
            <rect x="300" y="250" width="200" height="100" rx="10" fill="#2196F3" opacity="0.8" />
            <rect x="550" y="250" width="200" height="100" rx="10" fill="#FFC107" opacity="0.8" />

            <text x="150" y="300" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 1</text>
            <text x="400" y="300" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 2</text>
            <text x="650" y="300" textAnchor="middle" fill="white" fontSize="18" filter="url(#glow)">Device 3</text>

            <text x="400" y="390" textAnchor="middle" fill="white" fontSize="24" filter="url(#glow)">Updated global model distributed to devices</text>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-16 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        {renderSVG()}
      </div>
      <div className="w-full md:w-1/2 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Step {stepNumber}: {title}</h2>
        <p className="text-base md:text-xl">{description}</p>
      </div>
    </motion.div>
  )
}

