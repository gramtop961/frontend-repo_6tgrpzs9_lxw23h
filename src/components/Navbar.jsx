import { Menu, X, ExternalLink, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Media', href: '#media' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"><User size={18} /></span>
          <span>Profile</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/profile.php?id=100090216309382"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-md transition-colors"
          >
            View on Facebook <ExternalLink size={16} />
          </a>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href="https://www.facebook.com/profile.php?id=100090216309382"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-md"
              onClick={() => setOpen(false)}
            >
              View on Facebook <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
