
import Header from './components/home/header/header';
import ProgrammesGrid from './components/home/ProgrammesGrid';

// ProgrammesGrid now handles the programmes and animation

export default function OnlineMTechLandingPage() {
  return (
    <div className="font-roboto bg-[#010611] text-white min-h-screen">
      <Header />
      <div style={{marginTop: '110px'}}></div>
      <ProgrammesGrid />
      <footer className="border-t border-white/10 bg-[#01050d] py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Indian Institute of Information Technology, Dharwad. All Rights Reserved.
      </footer>
    </div>
  );
}
