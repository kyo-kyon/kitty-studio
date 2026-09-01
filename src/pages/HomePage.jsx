import Marquee from "../components/Marquee";
import OutlineButton from "../components/OutlineButton";
import Sparkle from "../components/Sparkle";
import CTASection from "../components/CTA";
import WorkCard from "../components/WorkCard";

import services from "../constant/service";
import workItems from "../constant/workItems";

const HomePage = () => {
  const reasons = [
    ['Digital Creatives', 'We specialise in creative solutions crafted with care, clarity and a little bit of fun.'],
    ['Experienced Team', 'From first sketch to final delivery, our team works closely with you at every step.'],
    ['Quality Assurance', 'Every detail is reviewed so your finished work feels polished and ready to share.'],
    ['Industry Experience', 'We turn strategy into visuals that connect with real people and support your goals.'],
    ['Production Studio', 'All the creative support you need, from branding and content to websites and products.'],
    ['Package & Retainer', 'Flexible support for one-time launches, growing brands and consistent monthly content.'],
  ]

  return (
    <>
      <main>
        <section className="home-hero content-width">
          <div className="video-placeholder">
            <span className="video-corner">INTRODUCING VIDEO</span>
            <div className="video-copy">KittyCat Mascot<br />#trust</div>
            <button type="button" aria-label="Play introduction video">▶</button>
          </div>
        </section>
        <Marquee />

        <section className="home-services content-width">
          <div className="home-services-intro">
            <Sparkle small />
            <h2>What We Do?</h2>
            <p>Transforming your big ideas into designs that are thoughtful, memorable and ready to grow.</p>
            <OutlineButton to="/services">Discover More</OutlineButton>
          </div>
          <div className="home-services-list">
            {services.map((service) => (
              <article key={service.title}>
                <p>{service.number}.</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <OutlineButton to="/services">Learn More</OutlineButton>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Marquee />

        <section className="home-work content-width">
          <div className="home-work-intro">
            <Sparkle small />
            <h2>Our Work</h2>
            <p>A small selection of ideas brought to life for bold, growing brands.</p>
            <OutlineButton to="/portfolio">Explore More</OutlineButton>
          </div>
          <div className="home-work-list">
            {workItems.slice(0, 3).map((item, index) => <WorkCard key={item.title} item={item} index={index} compact />)}
          </div>
        </section>

        <section className="client-strip content-width" aria-label="Selected clients">
          {['Mallow', 'Neko Co.', 'Lunaria', 'Bloom', 'Sunday'].map((name) => <div key={name}>{name}</div>)}
        </section>

        <section className="why-section content-width">
          <div className="why-title"><Sparkle small /><h2>Why Us?</h2></div>
          <div className="why-grid">
            {reasons.map(([title, copy]) => (
              <article key={title}>
                <span />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <CTASection />
      </main>
    </>
  )
}

export default HomePage;