import Header from './components/home/header/header';
import ProgrammesGrid from './components/home/ProgrammesGrid';

export default function OnlineMTechLandingPage() {
  return (
    <div className="font-sans bg-[#fafafa] text-slate-900 min-h-screen flex flex-col">
      <Header />
      <div style={{marginTop: '100px'}}></div>
      <main className="flex-grow">
        <ProgrammesGrid />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#041b39] py-4 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p><span className="font-medium text-slate-300">Indian Institute of Information Technology, Dharwad</span> | Ittegatti Road, Karnataka 580009</p>
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
