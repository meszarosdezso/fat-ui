import Link from 'next/link'

export default function Typography() {
  return (
    <section id="typography">
      <h2>Typography</h2>
      <div className="fontface">
        <h1 className="title mb-0">Abril Fatface Display</h1>
        <p>For displaying titles, CTAs, and big prices.</p>
      </div>

      <div className="fontface">
        <h1>Montserrat</h1>
        <p>For body and informative texts.</p>
      </div>

      <div className="fontface">
        <h3 className="mb-0">
          <code>Azeret</code>
        </h3>
        <p>For code snippets.</p>
      </div>

      <h4>Articles (blocks of text)</h4>

      <Link href="/article">Link to an article</Link>
    </section>
  )
}
