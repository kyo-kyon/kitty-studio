const Marquee = () => {
  const words = Array.from({ length: 8 }, (_, index) => (
    <span key={index}>YOUR VISION. OUR CREATION</span>
  ))
  return <div className="marquee" aria-hidden="true"><div>{words}{words}</div></div>
}

export default Marquee;