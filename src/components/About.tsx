'use client';

import { motion } from 'framer-motion';
import { personalInfo, education, certifications } from '@/data/portfolio';
import { Section } from './Section';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg text-zinc-300 leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <GraduationCap size={18} className="text-blue-400" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <div className="text-sm font-semibold text-white">{edu.degree}</div>
                    <div className="text-xs text-zinc-500">{edu.school} • {edu.period}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Award size={18} className="text-purple-400" />
                Certifications
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <div className="text-sm font-semibold text-white">{cert.name}</div>
                    <div className="text-xs text-zinc-500">ID: {cert.id} • {cert.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-950 h-full flex flex-col justify-center">
            <h4 className="text-sm uppercase tracking-widest font-bold text-zinc-500 mb-4">Quick Contact</h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-zinc-500 mb-1">Email</div>
                <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-blue-400 transition-colors underline underline-offset-4 decoration-zinc-800">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-1">Location</div>
                <div className="text-white">{personalInfo.location}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-1">Social</div>
                <div className="flex gap-4 pt-2">
                  <a href={personalInfo.links.github} className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
                  <a href={personalInfo.links.linkedin} className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
