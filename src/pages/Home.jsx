import Hero from '../components/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { NavLink } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <Hero />
      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured Case Studies</h2>
            <p className="text-gray-600">Deep dives into shipped projects and business outcomes.</p>
          </div>
          <NavLink to="/projects" className="btn btn-outline">See all</NavLink>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0,3).map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section className="bg-gray-50">
  <div className="container grid gap-8 py-16 md:grid-cols-3">
    {[
      ['⚡ Speed', 'Optimized React apps with blazing-fast load times, lazy loading, and smooth UI.'],
      ['🎨 Creativity', 'Crafting unique UI/UX with animations, dark mode, and interactive experiences.'],
      ['🚀 Growth', 'Scalable full-stack apps built with MERN, deployed on cloud platforms for real users.'],
    ].map(([title, desc]) => (
      <div
        key={title}
        className="rounded-2xl shadow-md p-6 bg-white hover:shadow-xl transition"
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    ))}
  </div>
</section>

    </>
  )
}
