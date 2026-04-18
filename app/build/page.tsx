'use client'

import { useEffect } from 'react'

export default function BuildPage() {
  useEffect(() => {
    // Force redirect to static HTML page so all JavaScript executes correctly
    window.location.replace('/design-plan.html')
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#16253F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif', fontSize: '14px', letterSpacing: '0.1em' }}>
        Loading...
      </p>
    </div>
  )
}
