import OutlineButton from "../components/OutlineButton";
import HeroImg from '../assets/images/aupic1.jpg.jpeg';
import HeroImg2 from '../assets/images/aupic2.jpg.jpeg';
import Logo from '../assets/logo/logoks01.png'

const AboutPage = () => {
  return (
    <main>
      <section className="flex " aria-label="Creative team working together" >
        <img
          src={HeroImg}
          className="w-[50%] h-full"></img>
        <img
          src={HeroImg2}
          className="w-[50%] h-full"></img>

      </section>
      <section className="about-story content-width">
        <div className="" aria-label="The KittyCat Studio wordmark">
          <img src={Logo}/>
        </div>
        <div className="about-copy ">
          <p className="mb-4"><strong>The KittyCat Studio,</strong> we are a creative studio dedicated to helping brands bring fun, innovative ideas to life. We partner with clients who want to stand out, offering fresh visual solutions that capture attention and make a lasting impact.</p>
          <p className="mb-4">At The KittyCat Studio, we offer <strong>comprehensive branding support</strong> and <strong>product services</strong>, ensuring that your brand not only looks stunning but also tells a compelling story. Whether you&apos;re launching your first business or refreshing your brand, The KittyCat Studio is here to guide you with creativity, expertise, and a personal touch.</p>
          <p>Let&apos;s bring your vision to life. <strong>Your brand, your story—crafted with confidence.</strong></p>
          <OutlineButton to="/portfolio">View Our Work</OutlineButton>
        </div>
      </section>
    </main>
  )
}

export default AboutPage;