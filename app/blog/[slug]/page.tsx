import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { getMDXComponents } from '@/components/blog/mdx-components'
import { getAllPosts, getPost } from '@/lib/posts'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getPost(slug)
    return {
      title: `${meta.title} · Bodhi Vandael`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        images: meta.cover ? [{ url: meta.cover }] : [],
      },
    }
  } catch {
    return {}
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  let post: ReturnType<typeof getPost>
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  const { meta, content } = post

  return (
    <main id="top">
      <section className="blog-hero">
        <div className="container">
          <Link href="/blog" className="blog-back rise" style={{ '--i': 0 } as React.CSSProperties}>
            ← Blog
          </Link>
          <p className="mono-label rise" style={{ '--i': 1 } as React.CSSProperties}>
            {meta.tag}
          </p>
          <h1 className="rise" style={{ '--i': 2 } as React.CSSProperties}>
            {meta.title}
          </h1>
          <div className="blog-meta rise" style={{ '--i': 3 } as React.CSSProperties}>
            <span className="mono-label">
              {new Date(meta.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="mono-label">·</span>
            <span className="mono-label">{meta.readingTime} read</span>
          </div>
        </div>
      </section>

      {meta.cover && (
        <div className="container">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
            <Image
              src={meta.cover}
              alt={`Cover for ${meta.title}`}
              fill
              className="blog-cover"
              style={{ objectFit: 'cover', borderRadius: '14px' }}
              priority
            />
          </div>
        </div>
      )}

      <div
        className="container"
        style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-10)' }}
      >
        <article className="prose">
          <MDXRemote
            source={content}
            components={getMDXComponents()}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypePrettyCode, { theme: 'github-dark', keepBackground: false }],
                ],
              },
            }}
          />
        </article>
      </div>
    </main>
  )
}
