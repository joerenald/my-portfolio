import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);

        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className={`
          max-w-7xl mx-auto
          rounded-2xl
          border border-white/10
          transition-all duration-500
          before:absolute
before:bottom-0
before:left-0
before:right-0
before:h-px
before:bg-gradient-to-r
before:from-transparent
before:via-blue-500/40
before:to-transparent
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              : "bg-black/20 backdrop-blur-md"
          }
        `}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
w-11 h-11
rounded-xl
bg-gradient-to-r
from-blue-500
via-purple-500
to-pink-500
flex items-center justify-center
font-bold text-white
shadow-lg
hover:scale-110
hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
transition-all duration-300
"
            >
              JR
            </div>

            <div>
              <h1 className="font-bold text-white">
                Joe Renald A
              </h1>

              <p className="text-xs text-gray-400">
               MCA • AI Developer
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative
                  px-4
                  py-2
                  rounded-xl
                  transition-all
                  duration-300
                  ${
                    active === link.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {active === link.id && (
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-500/20
                      via-purple-500/20
                      to-pink-500/20
                      border
                      border-white/10
                    "
                  />
                )}

                <span className="relative z-10">
                  {link.label}
                </span>
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/my-portfolio/joe_resume.pdf"
              download
              className="
                ml-3
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-blue-500
                to-indigo-600
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                transition
              "
            >
              <Download size={16} />
              Resume
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
  lg:hidden
  p-3
  rounded-xl
  bg-white/5
  border border-white/10
  backdrop-blur-md
  hover:bg-white/10
  transition-all
"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ${
              open
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
  className="
    mx-4 mb-4
    p-4
    rounded-2xl
    bg-black/40
    backdrop-blur-xl
    border border-white/10
    flex flex-col gap-3
  "
>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
               className={`
  py-3
  px-4
  rounded-xl
  transition
  ${
    active === link.id
      ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 text-white"
      : "bg-white/5 hover:bg-white/10 text-gray-300"
  }
`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/my-portfolio/joe_resume.pdf"
              download
              className="
                mt-2
                flex
                justify-center
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-gradient-to-r
                from-blue-500
                to-indigo-600
                font-semibold
              "
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}