'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, FileText, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import { Section } from './Section';
import { GithubIcon } from './Icons';

export default function Projects() {
  const visibleProjects = projects.filter(project => !project.hidden);
  const [lightboxProject, setLightboxProject] = useState<any | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxProject || !lightboxProject.screenshots) return;
    const len = lightboxProject.screenshots.length;
    setLightboxIndex((lightboxIndex - 1 + len) % len);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxProject || !lightboxProject.screenshots) return;
    const len = lightboxProject.screenshots.length;
    setLightboxIndex((lightboxIndex + 1) % len);
  };

  const currentImage = lightboxProject?.screenshots?.[lightboxIndex];

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
            onShowImage={(proj, imgIdx) => {
              setLightboxProject(proj);
              setLightboxIndex(imgIdx);
            }} 
          />
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxProject && currentImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md cursor-zoom-out select-none"
            onClick={() => setLightboxProject(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/80 p-3 rounded-full border border-zinc-800 transition-all z-50 cursor-pointer shadow-lg hover:scale-105"
              onClick={() => setLightboxProject(null)}
              title="Close Gallery"
            >
              <X size={20} />
            </button>

            {/* Navigation buttons: only show if multiple screenshots */}
            {lightboxProject.screenshots.length > 1 && (
              <>
                <button 
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 p-4 rounded-full border border-zinc-800 transition-all z-50 cursor-pointer shadow-xl backdrop-blur-md hover:scale-110"
                  onClick={handlePrev}
                  title="Previous Screenshot"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 p-4 rounded-full border border-zinc-800 transition-all z-50 cursor-pointer shadow-xl backdrop-blur-md hover:scale-110"
                  onClick={handleNext}
                  title="Next Screenshot"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main Image View */}
            <motion.div 
              key={lightboxIndex} // Force smooth fade transition when changing image
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            >
              <Image 
                src={currentImage} 
                alt={`${lightboxProject.title} screenshot ${lightboxIndex + 1}`}
                fill
                className="object-contain rounded-lg shadow-2xl"
                unoptimized
              />
            </motion.div>
            
            {/* Image Indicator Tag */}
            <div className="absolute bottom-6 bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-zinc-400 shadow-md">
              {lightboxIndex + 1} / {lightboxProject.screenshots.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function ProjectCard({ project, index, onShowImage }: { project: any, index: number, onShowImage: (proj: any, imgIdx: number) => void }) {
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
              <div className="pt-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/30 mt-6 space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Description</h4>
                  <p className="whitespace-pre-line">{project.details}</p>
                </div>
                
                {project.screenshots && project.screenshots.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-3">Project Gallery</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {project.screenshots.map((shot: string, sIdx: number) => (
                        <div 
                          key={sIdx} 
                          className="group/img relative aspect-video rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all cursor-zoom-in bg-zinc-950"
                          onClick={() => onShowImage(project, sIdx)}
                        >
                          <Image 
                            src={shot} 
                            alt={`${project.title} screenshot ${sIdx + 1}`}
                            fill
                            className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-3 font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                      <span key={t} className="bg-zinc-800/50 px-2 py-1 rounded text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

