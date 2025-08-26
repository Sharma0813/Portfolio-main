import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="container py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold tracking-tight md:text-5xl"
            >
              Building Performant, Elegant Web Experiences.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-gray-600"
            >
              I’m a Full‑Stack Developer specializing in React, Node.js and cloud‑ready apps. Explore my case studies to see how I ship business results.
            </motion.p>
            <div className="mt-8 flex gap-3">
              <NavLink to="/projects" className="btn btn-primary">View Projects</NavLink>
              <NavLink to="/contact" className="btn btn-outline">Contact Me</NavLink>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-soft"
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-brand-100">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" alt="Hero" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm text-gray-600">
              <div className="card p-3"><span className="block text-2xl font-semibold text-gray-900">30+</span> Projects</div>
              <div className="card p-3"><span className="block text-2xl font-semibold text-gray-900">10+</span>Tech Skills</div>
              <div className="card p-3"><span className="block text-2xl font-semibold text-gray-900">3 Years</span> Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.200),transparent)]"></div>
    </section>
  )
}
