export default function Contact(){
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thanks! This demo saves to nowhere yet. Swap this with your backend or EmailJS.')
  }
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Let’s work together</h1>
      <p className="mt-2 text-gray-600">Tell me about your project and I’ll get back within 24 hours.</p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
        <input className="card p-3 outline-none" placeholder="Your name" required />
        <input className="card p-3 outline-none" placeholder="Email" type="email" required />
        <input className="card p-3 outline-none md:col-span-2" placeholder="Company (optional)" />
        <textarea className="card p-3 outline-none md:col-span-2" placeholder="What are you building?" rows="6" required />
        <button className="btn btn-primary md:col-span-2" type="submit">Send message</button>
      </form>
    </section>
  )
}
