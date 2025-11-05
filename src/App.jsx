import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import AboutSection from './components/AboutSection';
import MediaGrid from './components/MediaGrid';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <ProfileHeader />
        <AboutSection />
        <MediaGrid />
      </main>
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Profile Showcase. All rights reserved.</p>
          <a
            href="https://www.facebook.com/profile.php?id=100090216309382"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900"
          >
            Visit the Facebook profile
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
