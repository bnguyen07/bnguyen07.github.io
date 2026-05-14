'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import { Section } from './Section';
import { GithubIcon } from './Icons';

export default function Projects() {
  const visibleProjects = projects.filter(project => !project.hidden);

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all overflow-hidden shadow-xl"
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden border-b border-zinc-800">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t: string) => (
              <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
          {project.featured && (
            <span className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.summary}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-800/50">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="View Source">
              <GithubIcon size={18} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="View Live">
              <ExternalLink size={18} />
            </a>
          )}
          {project.article && (
            <a href={project.article} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="Read Article">
              <FileText size={18} />
            </a>
          )}
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto text-zinc-500 hover:text-white flex items-center gap-1 text-xs font-medium transition-colors"
          >
            {isExpanded ? 'Show less' : 'Details'}
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/30 mt-6">
                <p>{project.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="bg-zinc-800/50 px-2 py-1 rounded text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

