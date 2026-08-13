import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPost } from '@/content/posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  return { title: post?.title ?? 'Post' }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <article>
      <p style={{ marginBottom: '0.5rem' }}>
        <Link href="/blog">← All blog posts</Link>
      </p>
      <h1>{post.title}</h1>
      <p className="muted" style={{ fontSize: 'var(--step--1)' }}>
        <time dateTime={post.date}>{post.date}</time>
      </p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
