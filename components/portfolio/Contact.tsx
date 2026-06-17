export function Contact() {
  return (
    <section className="section py-9" id="contact">
      <div className="container">
        <p className="mono-label reveal">Open to new projects</p>
        <h2 className="my-4 mb-5 max-w-[20ch] text-[clamp(2.25rem,6vw,var(--text-3xl))] font-bold leading-tight tracking-tight text-balance reveal">
          Have something worth building? Let&apos;s talk.
        </h2>
        <p className="reveal">
          <a className="email-link" href="mailto:me@vndl.dev">
            me@vndl.dev
          </a>
        </p>
        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-5 reveal">
          <div className="grid gap-0.5">
            <span className="mono-label">GitHub</span>
            <a
              className="text-sm text-text-secondary"
              href="https://github.com/b0wdyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/b0wdyy
            </a>
          </div>
          <div className="grid gap-0.5">
            <span className="mono-label">LinkedIn</span>
            <a
              className="text-sm text-text-secondary"
              href="https://linkedin.com/in/bodhi-vandael"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/bodhi-vandael
            </a>
          </div>
          <div className="grid gap-0.5">
            <span className="mono-label">Phone</span>
            <a className="text-sm text-text-secondary" href="tel:+32488089442">
              +32 488 08 94 42
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
