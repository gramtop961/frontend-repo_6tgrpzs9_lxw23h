import { Image as ImageIcon, ExternalLink } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Sunset vibes',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'City lights',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Calm waters',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Cozy moments',
    src: 'https://images.unsplash.com/photo-1514790193030-c89d266d5a9d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Nature walk',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Mountain air',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop',
  },
];

export default function MediaGrid() {
  return (
    <section id="media" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Featured Media</h2>
          <a
            href="https://www.facebook.com/profile.php?id=100090216309382"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-500"
          >
            View more <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <figure key={item.id} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src={item.src}
                alt={item.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="p-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">{item.title}</span>
                <span className="text-slate-400"><ImageIcon size={18} /></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
