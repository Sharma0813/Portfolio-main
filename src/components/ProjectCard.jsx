import { NavLink } from 'react-router-dom'

export default function ProjectCard({project}){
  return (
    <NavLink to={`/projects/${project.slug}`} className="card overflow-hidden hover:shadow-lg transition block">
      <img className="h-48 w-full object-cover" src={project.cover} alt={project.title} />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{project.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-700">{t}</span>
          ))}
        </div>
      </div>
    </NavLink>
  )
}
