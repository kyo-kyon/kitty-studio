
import OutlineButton from "../components/OutlineButton"
import Marquee from "../components/Marquee"
import CTASection from "../components/CTA"
import SectionIntro from "../components/SectionIntro"
import services from "../constant/service"
import workItems from "../constant/workItems"

const ServicesPage =() => {
  const packages = [
    { name: 'Student', price: 'From RM 350', perks: ['Logo starter kit', 'Two design concepts', 'One revision round', 'Social profile graphic', 'Final digital files'] },
    { name: 'Pro', price: 'From RM 950', perks: ['Complete visual identity', 'Three design concepts', 'Three revision rounds', 'Social media starter kit', 'Brand guideline sheet'] },
    { name: 'Premium', price: 'Custom quote', perks: ['Creative direction', 'Full brand system', 'Website design support', 'Campaign-ready assets', 'Priority project support'] },
  ]

  return (
    <main>
      <section className="page-heading content-width">
        <SectionIntro
          eyebrow="Our capabilities"
          title="Designed To Make Your Brand Feel Like You"
          body="We deliver innovative design, branding, and creative solutions tailored to bring your vision to life and elevate your brand."
        />
      </section>
      <section className="capabilities content-width">
        {services.map((service, index) => (
          <article className="capability" key={service.title}>
            <div className={`capability-image work-image--${workItems[index].style}`}>
              <span>{service.number}</span>
            </div>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ol className="mb-[40px] list-disc">{service.items.map((item) => <li key={item}>{item}</li>)}</ol>
              <OutlineButton to="/contact">Learn More</OutlineButton>
            </div>
          </article>
        ))}
      </section>

      <section className="packages content-width">
        {packages.map((pack) => (
          <article key={pack.name}>
            <h2>{pack.name}</h2>
            <p className="package-price">{pack.price}</p>
            <ul className="mb-[40px]">{pack.perks.map((perk) => <li key={perk}>{perk}</li>)}</ul>
            <OutlineButton to="/contact">Choose {pack.name}</OutlineButton>
          </article>
        ))}
      </section>
      <Marquee />
      <CTASection />
    </main>
  )
}

export default ServicesPage