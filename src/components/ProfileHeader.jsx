import { ExternalLink, MapPin, Calendar, Star } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 relative">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop"
              alt="Profile avatar"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Facebook Profile Showcase
            </h1>
            <p className="mt-2 text-slate-600 max-w-2xl">
              A clean, modern landing page that highlights a Facebook profile with quick links, a short bio, and a media grid.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-slate-500" /> Global</span>
              <span className="inline-flex items-center gap-2"><Calendar size={16} className="text-slate-500" /> Since 2023</span>
              <span className="inline-flex items-center gap-2"><Star size={16} className="text-amber-500" /> Community Highlights</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100090216309382"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                Visit Facebook Profile <ExternalLink size={16} />
              </a>
              <a
                href="#media"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Explore Media
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
