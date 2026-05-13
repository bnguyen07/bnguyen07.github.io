'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[60%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[40%] h-[60%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Headshot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8 group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900">
              <Image 
                src="/headshot.jpg" 
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">
            {personalInfo.role}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span> <span className="inline-block animate-bounce-slow">👋</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Building enterprise-grade applications with 10+ years of expertise. 
            Specializing in .NET, Angular, and high-performance system architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
            >
              Get in Touch <ArrowRight size={18} />
            </motion.a>
            
            <div className="flex items-center gap-2">
              <a 
                href={personalInfo.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-zinc-400 hover:text-white"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href={personalInfo.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-zinc-400 hover:text-white"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-zinc-400 hover:text-white"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-sm"
      >
        <span>Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </div>
  );
}
