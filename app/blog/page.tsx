import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog · Bodhi Vandael',
  description: 'Occasional, practical posts on monorepos, frontend architecture and the unglamorous parts of shipping software.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main id="top">
      <section className="blog-hero">
        <div className="container">
          <p className="mono-label rise" style={{ '--i': 0 } as React.CSSProperties}>
            Blog · Notes from the field
          </p>
          <h1 className="rise split" style={{ '--i': 1 } as React.CSSProperties}>
            Writing about code that has to last.
          </h1>
          <p className="lede rise" style={{ '--i': 2 } as React.CSSProperties}>
            Occasional, practical posts on monorepos, frontend architecture and the unglamorous parts of shipping software.
          </p>
        </div>
      </section>

      <section className="section blog-list-wrap">
        <div className="container">
          <div className="section-head reveal">
            <h2>All posts</h2>
            <span className="count">{String(posts.length).padStart(2, '0')}</span>
          </div>
          <div className="work-list reveal">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="work-row"
                style={{ textDecoration: 'none' }}
              >
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <div className="work-main">
                  <h3>{post.title}</h3>
                  <p className="desc">{post.description}</p>
                </div>
                <div className="work-side">
                  <span className="mono-label accent">{post.tag}</span>
                  <span className="post-row-date">
                    {new Date(post.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })} · {post.readingTime}
                  </span>
                </div>
                <span className="arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
