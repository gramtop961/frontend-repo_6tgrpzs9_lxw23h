export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">About This Profile</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              This page curates public highlights and a tasteful gallery inspired by the linked Facebook profile. It is designed to be fast, responsive, and visually engaging, offering a focused snapshot without the distractions of a full social feed.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The layout uses clean typography, soft gradients, and a card-based grid to make content easy to skim. It looks great on phones, tablets, and large screens.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-slate-500">Platform</dt>
                <dd className="mt-1 font-medium text-slate-900">Facebook</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Category</dt>
                <dd className="mt-1 font-medium text-slate-900">Personal/Profile</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Focus</dt>
                <dd className="mt-1 font-medium text-slate-900">Highlights & Media</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Style</dt>
                <dd className="mt-1 font-medium text-slate-900">Minimal, Elegant</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
