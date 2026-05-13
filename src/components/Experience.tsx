'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Section } from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-[-48px] before:w-[1px] before:bg-zinc-800 last:before:hidden"
          >
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-600 border border-zinc-900" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Briefcase size={18} className="text-zinc-500" />
                {item.role}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {item.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-lg font-medium text-zinc-300">{item.company}</span>
            </div>

            <ul className="space-y-3">
              {item.tasks.map((task, i) => (
                <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-700 flex-shrink-0" />
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
