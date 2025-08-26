import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects(){
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Projects & Case Studies</h1>
      <p className="mt-2 text-gray-600">A curated selection of full‑stack builds and UI work.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  )
}
