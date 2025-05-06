declare module 'react-confetti' {
  import * as React from 'react'

  interface ConfettiProps {
    width?: number
    height?: number
    numberOfPieces?: number
    recycle?: boolean
    run?: boolean
    gravity?: number
    initialVelocityX?: number
    initialVelocityY?: number
    opacity?: number
    colors?: string[]
    wind?: number
    drawShape?: (ctx: CanvasRenderingContext2D) => void
    tweenDuration?: number
    confettiSource?: {
      x: number
      y: number
      w: number
      h: number
    }
    style?: React.CSSProperties
    className?: string
  }

  const Confetti: React.FC<ConfettiProps>
  export default Confetti
}
