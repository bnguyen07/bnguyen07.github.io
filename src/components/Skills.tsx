'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { Section } from './Section';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-sm uppercase tracking-widest font-bold text-zinc-500 mb-6">Core Stack</h3>
          <div className="flex flex-wrap gap-2">
            {skills.core.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} index={index} variant="core" />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm uppercase tracking-widest font-bold text-zinc-500 mb-6">Currently Expanding Into</h3>
          <div className="flex flex-wrap gap-2">
            {skills.expanding.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} index={index} variant="expanding" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillBadge({ skill, index, variant }: { skill: string, index: number, variant: 'core' | 'expanding' }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
        variant === 'core' 
          ? 'border-zinc-800 bg-zinc-900/50 text-zinc-300' 
          : 'border-blue-900/30 bg-blue-900/10 text-blue-300'
      }`}
    >
      {skill}
    </motion.span>
  );
}
