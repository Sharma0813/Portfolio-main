export default function Footer(){
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} Aman Sharma. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-brand-700" href="https://github.com/">GitHub</a>
          <a className="hover:text-brand-700" href="https://www.linkedin.com/">LinkedIn</a>
          <a className="hover:text-brand-700" href="mailto:aman@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
