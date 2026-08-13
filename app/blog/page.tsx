import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostsByCategory } from '@/content/posts'
import styles from './blog.module.css'

export const metadata: Metadata = { title: 'Blog Posts' }

export default function BlogPosts() {
  const posts = getPostsByCategory('blog')

  return (
    <section>
      <h1>Blog Posts</h1>
      <p className="lede">
        Essays and reflections on data science, causal reasoning, and the
        questions worth asking about work and purpose.
      </p>
      <ul className={styles.list}>
        {posts.map((p) => (
          <li key={p.slug} className={styles.item}>
            <Link href={`/blog/${p.slug}`} className={styles.title}>
              {p.title}
            </Link>
            <p className={styles.desc}>{p.excerpt}</p>
            <p className={styles.meta}>
              <time dateTime={p.date}>{p.date}</time>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
