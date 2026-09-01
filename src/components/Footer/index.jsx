import SiteLink from "../SiteLink";
import navItems from "../../constant/navItems";

const Footer = () => {
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

export default Footer;