import Sparkle from "../components/Sparkle"

const ContactPage =() => {
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

export default ContactPage