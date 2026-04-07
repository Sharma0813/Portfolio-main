
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-xl transition ${
    isActive
      ? "bg-brand-100 text-brand-800"
      : "text-gray-700 hover:bg-gray-100"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            AS
          </span>
          <span className="text-lg">Aman Sharma</span>
        </NavLink>

        <div className="hidden gap-1 md:flex">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/AMAN_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
          >
            Download CV
          </a>

          <NavLink to="/contact" className="btn btn-primary text-sm">
            Hire Me
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

