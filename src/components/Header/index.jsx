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
          <SiteLink to="/about" className={path === '/about' ? 'active' : ''}><span className="text-[21px] ">About</span></SiteLink>
          <SiteLink to="/portfolio" className={path === '/portfolio' ? 'active' : ''}><span className="text-[21px] ">Portfolio</span></SiteLink>
          <SiteLink to="/" className="logo-link" ariaLabel="KittyCat Studio home">
            <img src={Cat1} alt="KittyCat Studio cat logo" />
          </SiteLink>
          <SiteLink to="/services" className={path === '/services' ? 'active' : ''}><span className="text-[21px] ">Services</span></SiteLink>
          <SiteLink to="/contact" className={path === '/contact' ? 'active' : ''}><span className="text-[21px] font-[400]">Contact</span></SiteLink>
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