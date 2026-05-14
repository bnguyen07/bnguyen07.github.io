'use client';

import { motion } from 'framer-motion';
import { 
  Cloud, 
  Database, 
  Layers, 
  Lock, 
  MessageSquare, 
  Zap, 
  Container,
  Activity
} from 'lucide-react';
import { architectureTech } from '@/data/portfolio';
import { Section } from './Section';

const iconMap: Record<string, any> = {
  Docker: Container,
  Kubernetes: Activity,
  Cloud: Cloud,
  Database: Database,
  Lock: Lock,
  MessageSquare: MessageSquare,
  Zap: Zap,
  Layers: Layers,
};

export default function TechStack() {
  return (
    <Section id="architecture" title="Architecture & Tech Stack">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {architectureTech.map((tech, index) => {
          const Icon = iconMap[tech.icon] || Layers;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(39, 39, 42, 0.8)' }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-all">
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-zinc-200">{tech.name}</h3>
              <div className="mt-2 w-8 h-1 bg-zinc-800 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-300 rounded-full" />
            </motion.div>
          );
        })}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-zinc-800 text-center"
      >
        <p className="text-zinc-400 max-w-2xl mx-auto italic">
          "Expertise in building distributed, resilient systems that scale. From container orchestration with Kubernetes to event-driven architectures and secure cloud deployments."
        </p>
      </motion.div>
    </Section>
  );
}
