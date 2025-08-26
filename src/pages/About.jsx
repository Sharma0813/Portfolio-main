export default function About(){
  return (
    <section className="container py-16">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4 text-gray-700">
            I’m Aman Sharma, Passionate Full-Stack Developer | Turning ideas into polished, production-ready apps.
            I craft delightful digital experiences with modern tech — where strong code meets smooth user experience.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['React & Next.js', 95],
              ['Node.js & Express', 90],
              ['MongoDB & SQL', 85],
              ['Tailwind & UI', 92],
            ].map(([label, pct]) => (
              <div key={label} className="card p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{label}</span>
                  <span className="text-sm text-gray-600">{pct}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-brand-600" style={{ width: pct + '%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="card p-6">
          <h2 className="text-lg font-semibold">Quick Facts</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Based in India 🇮🇳</li>
            <li>Currently working with Indian Railways while building exciting tech on the side.</li>
            <li>3+ years of experience</li>
            <li>Open to freelance & full‑time roles</li>
            <li>Code is not just logic, it’s an extension of your thinking.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
