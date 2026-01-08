import { component$, useSignal } from '@builder.io/qwik';
import { Hero } from './Hero';

export const Navbar = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <>
     {/* 1. NAVBAR */}
          <div class="fixed top-4 left-0 right-0 z-50 px-4">
            <nav class="mx-auto max-w-6xl rounded-2xl border border-[#2e7d32]/30 bg-[#0a1f13]/80 px-6 py-3 backdrop-blur-xl shadow-2xl">
              <div class="flex items-center justify-between">
                <a href="/" class="flex items-center gap-2 group">
                  <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#388e3c] font-black text-white transition-transform group-hover:rotate-12">B</div>
                  <span class="text-xl font-bold tracking-tight text-white">BARG<span class="text-[#4caf50]">AGRO</span></span>
                </a>
    
                <ul class="hidden items-center gap-8 md:flex">
                  {['Xizmatlar', 'Texnologiya', 'Loyihalar', 'Aloqa'].map((item) => (
                    <li>
                      <a href={`#${item.toLowerCase()}`} class="text-sm font-medium text-[#c8e6c9]/60 hover:text-[#81c784] transition-colors uppercase tracking-widest">{item}</a>
                    </li>
                  ))}
                </ul>
    
                <button class="hidden rounded-xl bg-[#2e7d32] px-6 py-2 text-sm font-bold text-white hover:bg-[#388e3c] transition-all border border-[#4caf50]/20 md:block">
                  Bog'lanish
                </button>
    
                <button onClick$={() => (isMenuOpen.value = !isMenuOpen.value)} class="text-[#81c784] md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen.value ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
    
          <Hero/>
    
    </>
  );
});