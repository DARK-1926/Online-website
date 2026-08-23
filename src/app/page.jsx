import Header from './components/home/header/header';
import ProgrammesGrid from './components/home/ProgrammesGrid';

export default function OnlineMTechLandingPage() {
  return (
    <div className="font-sans bg-[#fafafa] text-slate-900 min-h-screen flex flex-col">
      <Header />
      <div style={{marginTop: '70px'}}></div>
      <main className="flex-grow flex items-center justify-center py-20">
        <ProgrammesGrid />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#041b39] py-12 text-center text-sm text-slate-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-base font-semibold text-white">Indian Institute of Information Technology, Dharwad</p>
          <p className="text-slate-400">Ittegatti Road, Near Sattur Colony, Dharwad, Karnataka 580009</p>
          <div className="mt-8 border-t border-slate-700/50 pt-8">
            <p>© {new Date().getFullYear()} IIIT Dharwad. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
