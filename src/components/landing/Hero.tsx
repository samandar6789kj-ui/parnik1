import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
  return (
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 px-6 bg-[#040d06]">
      
      {/* Orqa fondagi barg rangidagi gradient nurlar */}
      <div 
        class="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#1b5e20]/20 blur-[120px]" 
        aria-hidden="true"
      ></div>
      <div 
        class="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#388e3c]/10 blur-[120px]" 
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto max-w-5xl text-center">
        {/* Yuqori kichik yozuv */}
        <span class="mb-6 inline-block rounded-full border border-[#4caf50]/20 bg-[#4caf50]/5 px-5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#81c784]">
          Tabiat va Texnologiya Uyg'unligi
        </span>

        {/* Asosiy Sarlavha */}
        <h1 class="mb-8 text-5xl font-black leading-[1.1] text-white md:text-8xl tracking-tighter">
          Har bir bargda <br />
          <span class="bg-gradient-to-r from-[#a5d6a7] via-[#4caf50] to-[#5e1b1b] bg-clip-text text-transparent italic">
            hayot nafasi
          </span>
        </h1>

        {/* Ta'rif matni */}
        <p class="mx-auto mb-12 max-w-2xl text-lg md:text-xl text-[#c8e6c9]/50 leading-relaxed font-medium">
          Bizning aqlli issiqxonalarimiz o'simliklarning tabiiy ehtiyojlarini zamonaviy avtomatika bilan birlashtiradi. 
        </p>

        {/* Tugmalar to'plami */}
        <div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button 
            class="group w-full rounded-2xl bg-[#2e7d32] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#388e3c] hover:shadow-[0_0_40px_rgba(46,125,50,0.4)] hover:-translate-y-1 sm:w-auto active:scale-95"
          >
            Loyihani boshlash
          </button>
          
          <button 
            class="w-full rounded-2xl border border-[#2e7d32]/40 bg-[#1b5e20]/10 px-10 py-5 text-lg font-bold text-[#c8e6c9] backdrop-blur-md transition-all hover:bg-[#1b5e20]/30 hover:border-[#4caf50]/40 sm:w-auto active:scale-95"
          >
           <a href=""> Katalog yuklash</a>
          </button>
        </div>
      </div>

      {/* Pastki qismdagi dekorativ element (ixtiyoriy) */}
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6  w-6 text-[#4caf50]/30" 
          fill="none" 
          viewBox="0   0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
});