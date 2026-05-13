import { personalInfo } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's build something extraordinary.</h2>
            <p className="text-zinc-400">
              Currently open to senior software engineering opportunities and collaborations on enterprise or AI-driven projects.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-2xl md:text-3xl font-medium hover:text-blue-400 transition-colors underline underline-offset-8 decoration-zinc-800"
            >
              {personalInfo.email}
            </a>
            <div className="flex gap-6">
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:scale-110 transition-all">
                <GithubIcon size={24} />
              </a>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:scale-110 transition-all">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
