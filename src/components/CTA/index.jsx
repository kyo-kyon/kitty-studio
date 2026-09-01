
import Sparkle from "../Sparkle"
import OutlineButton from "../OutlineButton"

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Explore More Work</h2>
      <Sparkle />
      <p>Have a message or idea to share with your audience?<br />Let&apos;s bring it to life. Get in touch with us today!</p>
      <OutlineButton to="/contact">Request a free consultation</OutlineButton>
    </section>
  )
}

export default CTASection