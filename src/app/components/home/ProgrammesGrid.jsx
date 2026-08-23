'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import bgImage from "../../assets/IIIT DWD.jpeg";

const programmes = [
  {
    title: "Online M.Tech in DSAI",
    description: "Gain practical knowledge in Data Science and Artificial Intelligence from world-class faculty.",
    href: "https://onlinedsai.iiitdwd.ac.in",
    isActive: true,
  },
  {
    title: "Online M.Tech in Quantum",
    description: "Build advanced expertise in Quantum Technology and prepare for the future of computing.",
    href: "#",
    isActive: false,
  }
];

function Card({ programme }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Calculate rotation (-5 to 5 degrees)
    const x = (clientY - top - height / 2) / 20;
    const y = -(clientX - left - width / 2) / 20;
    
    mouseX.set(y);
    mouseY.set(x);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: mouseY,
        rotateY: mouseX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
    >
      <div 
        className="p-10 pb-8 flex-grow"
        style={{ transform: "translateZ(30px)" }}
      >
        <span
          className={`inline-block mb-6 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${programme.isActive ? 'bg-blue-100/80 text-blue-800' : 'bg-slate-200/80 text-slate-500'}`}
        >
          {programme.isActive ? 'Admissions Open' : 'Coming Soon'}
        </span>
        <h3 className="text-3xl font-bold text-[#041b39] mb-4 leading-tight">{programme.title}</h3>
        <p className="text-base text-slate-700 leading-relaxed font-medium">{programme.description}</p>
      </div>
      <div 
        className="bg-slate-50/80 px-10 py-6 border-t border-slate-200/50 mt-auto"
        style={{ transform: "translateZ(20px)" }}
      >
        <Link
          className={`inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-bold transition-all w-fit shadow-md ${
            programme.isActive 
            ? 'bg-[#041b39] text-white hover:bg-[#062956] hover:-translate-y-1 hover:shadow-xl' 
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
          href={programme.href}
          target={programme.isActive ? '_blank' : undefined}
          rel={programme.isActive ? 'noopener noreferrer' : undefined}
        >
          {programme.isActive ? 'Explore Programme' : 'Currently Unavailable'}
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProgrammesGrid() {
  return (
    <section id="programmes" className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
      {/* Background Image Banner */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage} 
          alt="IIIT Dharwad Campus" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-100"
        />
        {/* Dark overlay to make cards and text visible and clean */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041b39]/90 via-[#041b39]/80 to-[#041b39]/95 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-16" style={{ perspective: "1000px" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6 drop-shadow-lg"
          >
            Our Academic Programmes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 font-medium max-w-2xl mx-auto drop-shadow-md"
          >
            Elevate your career with our industry-aligned online degrees from an Institute of National Importance.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2" style={{ perspective: "1500px" }}>
          {programmes.map((programme) => (
            <Card key={programme.title} programme={programme} />
          ))}
        </div>
      </div>
    </section>
  );
}
