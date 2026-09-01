import Sparkle from "../components/Sparkle"
import OutlineButton from "../components/OutlineButton"

const NotFoundPage = () => {
  return (
    <main className="not-found content-width">
      <Sparkle />
      <h1>Oops, this page wandered off.</h1>
      <p>Let&apos;s take you back to the studio.</p>
      <OutlineButton to="/">Back Home</OutlineButton>
    </main>
  )
}

export default NotFoundPage