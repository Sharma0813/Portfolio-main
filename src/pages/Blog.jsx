import { posts } from '../data/posts.js'

export default function Blog(){
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-gray-600">Notes on shipping, performance and UI craft.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {posts.map(p => (
          <article key={p.slug} className="card p-5">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</p>
            <p className="mt-2 text-gray-700">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
