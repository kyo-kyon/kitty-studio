import OutlineButton from "../components/OutlineButton";

const AboutPage = () => {
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

export default AboutPage;