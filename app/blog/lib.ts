import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export type PostMeta = {
  title: string
  slug: string
  type: 'Notes' | 'Field Guide'
  excerpt: string
  publishedAt: string
  updatedAt: string
  author: string
  readingMinutes: number
  tags: string[]
  hero: string
  heroAlt: string
}

export type Post = PostMeta & { html: string; raw: string }

const POSTS_DIR = path.join(process.cwd(), 'app', 'blog', 'posts')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPostMeta(slug: string): PostMeta | null {
  const file = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data } = matter(raw)
  return normaliseMeta(slug, data)
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  const meta = normaliseMeta(slug, data)
  if (!meta) return null
  const html = (await remark().use(remarkHtml, { sanitize: false }).process(content)).toString()
  return { ...meta, html, raw: content }
}

function normaliseMeta(slug: string, data: Record<string, unknown>): PostMeta | null {
  if (typeof data.title !== 'string') return null
  return {
    title: data.title,
    slug: typeof data.slug === 'string' ? data.slug : slug,
    type: (data.type as PostMeta['type']) === 'Field Guide' ? 'Field Guide' : 'Notes',
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    publishedAt: typeof data.publishedAt === 'string' ? data.publishedAt : '',
    updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : '',
    author: typeof data.author === 'string' ? data.author : 'Elec Reid',
    readingMinutes: typeof data.readingMinutes === 'number' ? data.readingMinutes : 5,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    hero: typeof data.hero === 'string' ? data.hero : '/images/haven-dsc05653.jpg',
    heroAlt: typeof data.heroAlt === 'string' ? data.heroAlt : '',
  }
}

export function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}
