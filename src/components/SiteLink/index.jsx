const SiteLink = ({ to, className = '', children, onClick, ariaLabel })  => {
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

export default SiteLink;