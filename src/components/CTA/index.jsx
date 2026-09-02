
import Sparkle from "../Sparkle"
import OutlineButton from "../OutlineButton"
import { PawPrint } from "lucide-react";

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Explore More Work</h2>
      <PawPrint className="text-[#ca88a4] -rotate-45"/>
      <p>Have a message or idea to share with your audience?<br />Let&apos;s bring it to life. Get in touch with us today!</p>
      <OutlineButton to="/contact">Request a free consultation</OutlineButton>
    </section>
  )
}

export default CTASection