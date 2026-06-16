export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="mono-label reveal">Open to new projects</p>
        <h2 className="reveal">Have something worth building? Let&apos;s talk.</h2>
        <p className="reveal">
          <a className="email-link" href="mailto:me@vndl.dev">me@vndl.dev</a>
        </p>
        <div className="contact-rows reveal">
          <div>
            <span className="mono-label">Phone</span>
            <a href="tel:+32488089442">+32 488 08 94 42</a>
          </div>
          <div>
            <span className="mono-label">LinkedIn</span>
            <a href="https://linkedin.com/in/bodhi-vandael" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/bodhi-vandael
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
