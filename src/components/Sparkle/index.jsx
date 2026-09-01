const Sparkle = ({ small = false }) => {
  return <span className={`sparkle ${small ? 'sparkle--small' : ''}`} aria-hidden="true">✦</span>
}

export default Sparkle;