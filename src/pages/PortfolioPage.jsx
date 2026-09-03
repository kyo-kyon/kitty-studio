import SectionIntro from "../components/SectionIntro";
import Marquee from "../components/Marquee";
import CTASection from "../components/CTA";
import WorkCard from "../components/WorkCard";

import workItems from "../constant/workItems";

const PortfolioPage = () => {
  return (
    <main>
      <section className="page-heading content-width">
        <SectionIntro
          eyebrow=""
          title={<>Explore Our Work<br />Where Creativity Meets Purpose</>}
          body="Discover our portfolio of standout design projects, each crafted to inspire and connect. From bold branding and memorable visual identities to engaging digital and print designs, our work reflects a commitment to creative excellence and results-driven design. Every project tells a story brought to life with precision and purpose. Dive in to see how we transform ideas into impactful, lasting visuals that resonate."
        />
      </section>
      <section className="portfolio-grid content-width">
        {workItems.map((item, index) => <WorkCard key={item.title} item={item} index={index} />)}
      </section>
      <Marquee />
      <CTASection />
    </main>
  )
}

export default PortfolioPage;