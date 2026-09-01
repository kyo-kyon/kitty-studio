const Marquee = () => {
  const words = Array.from({ length: 8 }, (_, index) => (
    <span className="flex justify-center items-center" key={index}>YOUR VISION. OUR CREATION</span>
  ))
  return <div className="marquee flex items-center " aria-hidden="true"><div>{words}{words}</div></div>
}

export default Marquee;