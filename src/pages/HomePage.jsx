import Marquee from "../components/Marquee";
import OutlineButton from "../components/OutlineButton";
import Sparkle from "../components/Sparkle";
import CTASection from "../components/CTA";
import WorkCard from "../components/WorkCard";

import services from "../constant/service";
import workItems from "../constant/workItems";
import companies from "../constant/companies";

//icons
import { BadgeCheck, BriefcaseBusiness, PackageCheck, Palette } from "lucide-react";

//assets
import KSmascot from "../assets/ks-mascot/kitty mascot.mp4"

import { PawPrint, Clapperboard, UsersRound } from "lucide-react";

const HomePage = () => {
  const reasons = [
    ['Digital Creatives', 'We specialise in creative solutions crafted with care, clarity and a little bit of fun.', <Palette className="text-white"/>],
    ['Experienced Team', 'From first sketch to final delivery, our team works closely with you at every step.', <UsersRound className="text-white"/>],
    ['Quality Assurance', 'Every detail is reviewed so your finished work feels polished and ready to share.', <BadgeCheck className="text-white"/>],
    ['Industry Experience', 'We turn strategy into visuals that connect with real people and support your goals.', <BriefcaseBusiness className="text-white"/>],
    ['Production Studio', 'All the creative support you need, from branding and content to websites and products.', <Clapperboard className="text-white"/>],
    ['Package & Retainer', 'Flexible support for one-time launches, growing brands and consistent monthly content.', <PackageCheck className="text-white"/>],
  ]

  return (
    <>
      <main>
        <section className="home-hero w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            width="100%"
          >
            <source src= {KSmascot} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <Marquee />

        <section className="home-services content-width">
          <div className="home-services-intro">
            <PawPrint className="text-[#ca88a4] -rotate-45"/>
            <h2>What We Do?</h2>
            <p className="mb-[40px]">Transforming your big ideas into designs that are thoughtful, memorable and ready to grow.</p>
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
            <PawPrint className="text-[#ca88a4] -rotate-45"/>
            <h2>Our Work</h2>
            <p className="mb-[40px]">A small selection of ideas brought to life for bold, growing brands.</p>
            <OutlineButton to="/portfolio">Explore More</OutlineButton>
          </div>
          <div className="home-work-list">
            {workItems.slice(0, 3).map((item, index) => <WorkCard key={item.title} item={item} index={index} compact />)}
          </div>
        </section>

        <section className="client-strip content-width" aria-label="Selected clients">
          {companies.map((company) => <div key={company.name} className="bg-cover bg-center" style={{
            backgroundImage: `url(${company.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}></div>)}
        </section>

        <section className="why-section content-width">
          <div className="why-title"><PawPrint className="text-[#ca88a4] -rotate-45"/><h2>Why Us?</h2></div>
          <div className="why-grid">
            {reasons.map(([title, copy, icon]) => (
              <article key={title}>
                <span className="flex justify-center items-center">
                  {icon}
                </span>
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