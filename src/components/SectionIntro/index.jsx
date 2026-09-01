const SectionIntro = ({ eyebrow, title, body }) =>{
  return (
    <div className="section-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {body && <p>{body}</p>}
    </div>
  )
}

export default SectionIntro;