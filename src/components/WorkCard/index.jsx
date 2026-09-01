const WorkCard = ({ item, compact = false, index }) =>{
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

export default WorkCard;