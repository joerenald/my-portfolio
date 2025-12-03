import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full z-40 transition-all ${
        scrolled ? 'backdrop-blur-md bg-black/40 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center font-bold text-black">
            JR
          </div>
          <div>
            <div className="text-sm font-semibold">Joe Renald A</div>
            <div className="text-xs text-gray-300">BSc Computer Science</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative py-2 ${
                active === l.id ? 'text-blue-300' : 'text-gray-300 hover:text-white'
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
              )}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-4 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-500"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-md px-6 pb-6">
          <div className="flex flex-col gap-3 mt-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="py-3 text-gray-200 border-b border-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold inline-block"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
