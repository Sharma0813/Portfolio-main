import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Project(){
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if(!project){
    return <section className="container py-16">Project not found.</section>
  }

  return (
    <section className="container py-16">
      <Link to="/projects" className="text-brand-700 hover:underline">← Back to projects</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <img className="w-full rounded-2xl border border-gray-100 object-cover" src={project.cover} alt={project.title} />
          <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>
          <p className="mt-2 text-gray-700">{project.details}</p>

          {project.gallery?.length > 0 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((g, idx) => (
                <img key={idx} className="w-full rounded-xl border border-gray-100 object-cover" src={g} alt={`Gallery ${idx+1}`} />
              ))}
            </div>
          )}
        </div>

        <aside className="card p-6">
          <h2 className="text-lg font-semibold">Overview</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><strong>Timeline:</strong> {project.timeline}</li>
            <li><strong>Tech:</strong> {project.tech.join(', ')}</li>
          </ul>
          <h3 className="mt-4 font-semibold">Impact</h3>
          <ul className="mt-2 list-inside list-disc text-sm text-gray-700">
            {project.impact.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  )
}
