'use client';

import React from 'react';
import { motion } from 'motion/react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: ['Social Media Marketing', 'Website Development', 'Email Marketing', 'Content Creation', 'UI/UX Design', 'SEO'],
    Company: ['About Us', 'Our Team', 'Case Studies', 'Careers', 'Press'],
    Resources: ['Blog', 'Newsletter', 'Free Audit', 'Pricing', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="relative bg-[#121212] text-neutral-200 overflow-hidden">

      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">

        {/* Top row: brand + links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-14 border-b border-neutral-800">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/v-media-logo.png"
                alt="V-Media logo"
                className="w-8 h-8 object-contain mix-blend-screen"
              />
              <span className="font-display font-black text-lg tracking-tight text-white">V-Media</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed font-display max-w-[200px]">
              Tactical digital marketing engineered to convert.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { label: 'Twitter/X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z' },
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 hover:text-white hover:border-neutral-500 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors font-display"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 pb-0">
          <p className="text-xs text-neutral-600 font-mono">
            © {currentYear} V-Media Digital Marketing Solutions. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700 font-mono">
            Built with Next.js · Powered by V-Media
          </p>
        </div>
      </div>

      {/* ── Giant wordmark at the very bottom ── */}
      <div className="w-full overflow-hidden select-none pointer-events-none pb-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center font-display font-black uppercase leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(5rem, 18vw, 20rem)',
            color: 'transparent',
            WebkitTextStroke: '1px #2a2a2a',
            letterSpacing: '-0.04em',
          }}
        >
          V-MEDIA
        </motion.p>
      </div>

    </footer>
  );
}
