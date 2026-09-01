import { useState, useEffect } from "react"
import SiteLink from "../SiteLink"
import Cat1 from "../../assets/logo/kitty cat club identity-05.png"
import Cat2 from "../../assets/logo/kitty cat club identity-06.png"
import Cat3 from "../../assets/logo/kitty cat club identity-07.png"
import Logo1 from "../../assets/logo/kitty cat club identity-08.png"
import Logo2 from "../../assets/logo/profile pic.png"

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
            <img src={Cat1} alt="KittyCat Studio cat logo" />
          </SiteLink>
          <SiteLink to="/services" className={path === '/services' ? 'active' : ''}>Services</SiteLink>
          <SiteLink to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</SiteLink>
        </nav>
        <SiteLink to="/" className="mobile-logo" ariaLabel="KittyCat Studio home">
          <img src={Cat1} alt="KittyCat Studio cat logo" className="w-[30px]"/>
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