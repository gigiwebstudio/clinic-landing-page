import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.tsx'

// Initialize Lenis before React mounts
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Handle anchor link clicks with Lenis smooth scroll
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (target.tagName === 'A') {
    const href = target.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.2,
        })
      }
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
