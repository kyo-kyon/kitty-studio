import SiteLink from "../SiteLink";

const OutlineButton = ({ to, children }) => {
  return <SiteLink to={to} className="outline-button">{children}<span aria-hidden="true">↗</span></SiteLink>
}

export default OutlineButton;