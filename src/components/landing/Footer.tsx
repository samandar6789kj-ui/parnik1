import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer id="aloqa" class="py-24 px-6 border-t border-[#2e7d32]/10 bg-[#040d06]">
      <div class="mx-auto max-w-6xl">
        
        {/* Call to Action (CTA) Card */}
        <div class="rounded-[3rem] bg-gradient-to-br from-[#1b5e20] via-[#0a1f13] to-[#040d06] p-12 md:p-20 text-center mb-20 border border-[#2e7d32]/20 relative overflow-hidden group">
          {/* Bezakli nurlar */}
          <div class="absolute -right-20 -top-20 h-80 w-80 bg-[#4caf50]/10 blur-[100px] rounded-full group-hover:bg-[#4caf50]/20 transition-all duration-700"></div>
          <div class="absolute -left-20 -bottom-20 h-80 w-80 bg-[#1b5e20]/20 blur-[100px] rounded-full"></div>

          <div class="relative z-10">
            <h2 class="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter italic leading-tight">
              Keyingi qadamni <br/> <span class="text-[#81c784]">birga tashlaymiz</span>
            </h2>
            <p class="text-[#c8e6c9]/60 mb-10 max-w-xl mx-auto text-lg md:text-xl font-medium">
              Sizning g'oyangizni real, yashil va daromadli biznesga aylantirish vaqti keldi. Mutaxassislarimiz sizga yordam beradi.
            </p>
            <button class="group relative inline-flex items-center justify-center rounded-full bg-[#f1f8f1] px-12 py-5 text-xl font-black text-[#1b5e20] transition-all hover:scale-105 hover:bg-white active:scale-95 shadow-[0_20px_50px_rgba(46,125,50,0.3)]">
              Bepul konsultatsiya
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div class="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-[#2e7d32]/10 pt-10">
          {/* Logo Section */}
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 bg-[#388e3c] rounded-xl flex items-center justify-center font-black text-white shadow-lg">B</div>
            <div>
              <span class="font-black text-white tracking-widest text-sm uppercase block">Barg Agro</span>
              <span class="text-[#c8e6c9]/30 text-[10px] uppercase tracking-[0.3em] font-bold">Smart Greenhouse</span>
            </div>
          </div>

          {/* Copyright */}
          <p class="text-[#c8e6c9]/30 text-xs font-bold uppercase tracking-widest order-3 md:order-2">
            © 2026 Barcha huquqlar himoyalangan
          </p>

          {/* Social Links */}
          <div class="flex gap-8 order-2 md:order-3">
            {['Telegram', 'Instagram', 'YouTube'].map((social) => (
              <a 
                key={social}
                href="#" 
                class="text-sm font-bold text-[#c8e6c9]/40 hover:text-[#4caf50] transition-colors uppercase tracking-widest"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
});