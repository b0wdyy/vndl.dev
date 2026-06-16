import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type PostMeta = {
  slug: string
  title: string
  date: string
  tag: string
  description: string
  cover: string
  readingTime: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  return files
    .map((file) => {
      const slug = file.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tag: data.tag as string,
        description: data.description as string,
        cover: data.cover as string,
        readingTime: `${Math.ceil(rt.minutes)} min`,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const file = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)
  return {
    meta: {
      slug,
      title: data.title as string,
      date: data.date as string,
      tag: data.tag as string,
      description: data.description as string,
      cover: data.cover as string,
      readingTime: `${Math.ceil(rt.minutes)} min`,
    },
    content,
  }
}
