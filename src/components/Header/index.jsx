import { useState, useEffect } from "react"
import SiteLink from "../SiteLink"

const Header = ({ path })  => {
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [path])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <nav className={`desktop-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <SiteLink to="/about" className={path === '/about' ? 'active' : ''}>About</SiteLink>
          <SiteLink to="/portfolio" className={path === '/portfolio' ? 'active' : ''}>Portfolio</SiteLink>
          <SiteLink to="/" className="logo-link" ariaLabel="KittyCat Studio home">
            <img src="/assets/kitty-logo.png" alt="KittyCat Studio cat logo" />
          </SiteLink>
          <SiteLink to="/services" className={path === '/services' ? 'active' : ''}>Services</SiteLink>
          <SiteLink to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</SiteLink>
        </nav>
        <SiteLink to="/" className="mobile-logo" ariaLabel="KittyCat Studio home">
          <img src="/assets/kitty-logo.png" alt="KittyCat Studio cat logo" />
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

export default Header;