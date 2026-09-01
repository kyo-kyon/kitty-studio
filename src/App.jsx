import { useEffect, useMemo, useState } from 'react'

import Cat1 from './assets/logo/kitty cat club identity-05.png'
import Cat2 from './assets/logo/kitty cat club identity-06.png'
import Cat3 from './assets/logo/kitty cat club identity-07.png'
import Cat4 from './assets/logo/kitty cat club identity-08.png'
import Logo from './assets/logo/profile pic.png'

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

//hi sayangg
const services = [
  {
    number: '01',
    title: 'Brand Identity',
    summary: 'Turn your brand into something clear, memorable and unmistakably yours.',
    description:
      'Create a memorable brand identity with unique logos and cohesive visuals. Stand out, build trust, and leave a lasting impression.',
    items: ['Logo Design', 'Color Palette', 'Typography', 'Business Cards', 'Stationery & Promotional Items'],
  },
  {
    number: '02',
    title: 'Social Media Design',
    summary: 'Scroll-stopping content designed to keep your brand consistent and engaging.',
    description:
      'Eye-catching infographics and engaging product visuals tailored to boost your brand. Elevate your content and attract clients with designs that stand out.',
    items: ['Visuals and Graphics', 'Infographics', 'Social Media Content', 'Video and Animation'],
  },
  {
    number: '03',
    title: 'Website Design',
    summary: 'Friendly, thoughtful websites that look polished on every screen.',
    description:
      'Create stunning, user-friendly websites with our expert design and development services. We craft responsive, SEO-optimised sites to give you the confidence to market your ideas.',
    items: ['Material Research and Prototyping', 'User Experience & Interface', 'Prototyping & Usability Testing', 'Visual Concept Design', 'Responsive Page Design', 'WordPress Web Development', 'Support and Maintenance'],
  },
  {
    number: '04',
    title: 'Merchandise Design',
    summary: 'Useful, playful brand pieces that people will want to keep.',
    description:
      'Design merchandise that connects, represents and leaves an impact. Where creative meets purpose.',
    items: ['Apparel Design', 'Accessories', 'Print Designs', 'Packaging', 'Custom Merch Solutions'],
  },
]

const workItems = [
  { title: 'Mochi House', category: ['Branding', 'Packaging'], style: 'peach' },
  { title: 'Petal Social', category: ['Social Media', 'Art Direction'], style: 'blue' },
  { title: 'Little Sunday', category: ['Website', 'UI/UX'], style: 'lilac' },
  { title: 'Neko Notes', category: ['Branding', 'Stationery'], style: 'yellow' },
  { title: 'Studio Bloom', category: ['Website', 'Development'], style: 'mint' },
  { title: 'Cherry Club', category: ['Campaign', 'Social Media'], style: 'rose' },
  { title: 'Happy Goods', category: ['Merchandise', 'Illustration'], style: 'sky' },
  { title: 'Tumi Coffee', category: ['Branding', 'Packaging'], style: 'sand' },
]

function currentPath() {
  const hash = window.location.hash.replace(/^#/, '')
  return hash && hash.startsWith('/') ? hash : '/'
}

function SiteLink({ to, className = '', children, onClick, ariaLabel }) {
  return (
    <a
      href={`#${to}`}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

function Sparkle({ small = false }) {
  return <span className={`sparkle ${small ? 'sparkle--small' : ''}`} aria-hidden="true">✦</span>
}

function Header({ path }) {
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [path])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <nav className={`desktop-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <SiteLink to="/about" className={path === '/about' ? 'active' : ''}>About</SiteLink>
          <SiteLink to="/portfolio" className={path === '/portfolio' ? 'active' : ''}>Portfolio</SiteLink>
          <SiteLink to="/" className="logo-link" ariaLabel="KittyCat Studio home">
            <img 
              src={Cat1} alt="KittyCat Studio cat logo" 
              className=''/>
          </SiteLink>
          <SiteLink to="/services" className={path === '/services' ? 'active' : ''}>Services</SiteLink>
          <SiteLink to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</SiteLink>
        </nav>
        <SiteLink to="/" className="mobile-logo" ariaLabel="KittyCat Studio home">
          <img src={Cat1} alt="KittyCat Studio cat logo" />
        </SiteLink>
        <button
          className={`menu-button ${open ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Marquee() {
  const words = Array.from({ length: 8 }, (_, index) => (
    <span key={index}>YOUR VISION. OUR CREATION</span>
  ))
  return <div className="marquee" aria-hidden="true"><div>{words}{words}</div></div>
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main content-width">
        <div>
          <h3>Explore More</h3>
          <div className="footer-links">
            <SiteLink to="/">Home</SiteLink>
            {navItems.map((item) => <SiteLink key={item.to} to={item.to}>{item.label === 'Contact' ? 'Contact Us' : item.label}</SiteLink>)}
          </div>
        </div>
        <div>
          <h3>Talk To Us</h3>
          <a href="mailto:TheKittyCatStudio@gmail.com">TheKittyCatStudio@gmail.com</a>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">The KittyCat Studio © 2026</div>
    </footer>
  )
}

function OutlineButton({ to, children }) {
  return <SiteLink to={to} className="outline-button">{children}<span aria-hidden="true">↗</span></SiteLink>
}

function SectionIntro({ eyebrow, title, body }) {
  return (
    <div className="section-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {body && <p>{body}</p>}
    </div>
  )
}

function CTASection() {
  return (
    <section className="cta-section">
      <h2>Explore More Work</h2>
      <Sparkle />
      <p>Have a message or idea to share with your audience?<br />Let&apos;s bring it to life. Get in touch with us today!</p>
      <OutlineButton to="/contact">Request a free consultation</OutlineButton>
    </section>
  )
}

function WorkCard({ item, compact = false, index }) {
  return (
    <article className={`work-card ${compact ? 'work-card--compact' : ''}`}>
      <div className={`work-image work-image--${item.style}`} role="img" aria-label={`${item.title} project preview`}>
        <span className="work-mark">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="work-card-body">
        <div className="tags">{item.category.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <h3>{item.title}</h3>
      </div>
    </article>
  )
}

function HomePage() {
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

function AboutPage() {
  return (
    <main>
      <section className="about-hero" aria-label="Creative team working together" />
      <section className="about-story content-width">
        <div className="studio-signature" aria-label="The KittyCat Studio wordmark">
          <span>The</span>
          <strong>KittyCat</strong>
          <b>Studio</b>
        </div>
        <div className="about-copy">
          <p><strong>The KittyCat Studio,</strong> we are a creative studio dedicated to helping brands bring fun, innovative ideas to life. We partner with clients who want to stand out, offering fresh visual solutions that capture attention and make a lasting impact.</p>
          <p>At The KittyCat Studio, we offer <strong>comprehensive branding support</strong> and <strong>product services</strong>, ensuring that your brand not only looks stunning but also tells a compelling story. Whether you&apos;re launching your first business or refreshing your brand, The KittyCat Studio is here to guide you with creativity, expertise, and a personal touch.</p>
          <p>Let&apos;s bring your vision to life. <strong>Your brand, your story—crafted with confidence.</strong></p>
          <OutlineButton to="/portfolio">View Our Work</OutlineButton>
        </div>
      </section>
    </main>
  )
}

function PortfolioPage() {
  return (
    <main>
      <section className="page-heading content-width">
        <SectionIntro
          eyebrow="Selected projects"
          title={<>Explore Our Work<br />Where Creativity Meets Purpose</>}
          body="Discover our portfolio of standout design projects, each crafted to inspire and connect. From bold branding and memorable visual identities to engaging digital and print designs, our work reflects a commitment to creative excellence and results-driven design."
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

function ServicesPage() {
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
              <ol>{service.items.map((item) => <li key={item}>{item}</li>)}</ol>
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
            <ul>{pack.perks.map((perk) => <li key={perk}>{perk}</li>)}</ul>
            <OutlineButton to="/contact">Choose {pack.name}</OutlineButton>
          </article>
        ))}
      </section>
      <Marquee />
      <CTASection />
    </main>
  )
}

function ContactPage() {
  const initialForm = { name: '', email: '', company: '', website: '', services: [], package: '', description: '' }
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function toggleService(service) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }))
  }

  function submitForm(event) {
    event.preventDefault()
    if (!form.services.length || !form.package) {
      setMessage('Please choose at least one service and a package.')
      return
    }
    setMessage(`Thanks, ${form.name}! Your enquiry is ready to be sent.`)
  }

  return (
    <main className="contact-page">
      <section className="contact-layout content-width">
        <div className="contact-form-wrap">
          <Sparkle />
          <h1>Contact Us</h1>
          <form onSubmit={submitForm}>
            <label>Your Name*<input name="name" value={form.name} onChange={updateField} required /></label>
            <label>Email / Work Email*<input type="email" name="email" value={form.email} onChange={updateField} required /></label>
            <label>Company Name*<input name="company" value={form.company} onChange={updateField} required /></label>
            <label>Website URL<input type="url" name="website" value={form.website} onChange={updateField} placeholder="https://" /></label>

            <fieldset>
              <legend>Services Required *</legend>
              <div className="option-grid">
                {services.map((service) => (
                  <label className="check-label" key={service.title}>
                    <input type="checkbox" checked={form.services.includes(service.title)} onChange={() => toggleService(service.title)} />
                    <span />{service.title}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Package *</legend>
              <div className="option-grid option-grid--package">
                {['Student', 'Pro', 'Premium'].map((pack) => (
                  <label className="check-label" key={pack}>
                    <input type="radio" name="package" value={pack} checked={form.package === pack} onChange={updateField} />
                    <span />{pack}
                  </label>
                ))}
              </div>
            </fieldset>

            <label>Brief Description<textarea name="description" value={form.description} onChange={updateField} rows="7" /></label>
            <button className="submit-button" type="submit">Submit <span>↗</span></button>
            {message && <p className="form-message" role="status">{message}</p>}
          </form>
        </div>

        <aside className="contact-card">
          <h2>Get In Touch</h2>
          <div className="contact-detail"><span>⌖</span><p>Cyberjaya, Selangor,<br />Malaysia</p></div>
          <div className="contact-detail"><span>✉</span><a href="mailto:TheKittyCatStudio@gmail.com">TheKittyCatStudio@gmail.com</a></div>
          <div className="contact-detail"><span>♡</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Message us on Instagram</a></div>
          <div className="map-placeholder">
            <span>KittyCat Studio</span>
            <p>Cyberjaya, Selangor</p>
          </div>
        </aside>
      </section>
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="not-found content-width">
      <Sparkle />
      <h1>Oops, this page wandered off.</h1>
      <p>Let&apos;s take you back to the studio.</p>
      <OutlineButton to="/">Back Home</OutlineButton>
    </main>
  )
}

export default function App() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const handleChange = () => setPath(currentPath())
    window.addEventListener('hashchange', handleChange)
    return () => window.removeEventListener('hashchange', handleChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [path])

  const page = useMemo(() => {
    switch (path) {
      case '/': return <HomePage />
      case '/about': return <AboutPage />
      case '/portfolio': return <PortfolioPage />
      case '/services': return <ServicesPage />
      case '/contact': return <ContactPage />
      default: return <NotFoundPage />
    }
  }, [path])

  return (
    <div className="app-shell">
      <Header path={path} />
      {page}
      <Footer />
    </div>
  )
}
