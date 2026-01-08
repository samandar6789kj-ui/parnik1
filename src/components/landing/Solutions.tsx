import { component$ } from '@builder.io/qwik';

export const Solutions = component$(() => {
  const items = [
    { 
      title: 'Gidroponika', 
      icon: '🌱', 
      desc: 'Minimal maydonda maksimal hosil olish uchun tuproqsiz texnologiya. Suv va ozuqa moddalarini 90% gacha tejaydi.' 
    },
    { 
      title: 'Iqlim Nazorati', 
      icon: '🌡️', 
      desc: 'Harorat, namlik va CO2 darajasini avtomatik boshqarish tizimlari. Har qanday ob-havoda barqaror hosil.' 
    },
    { 
      title: 'Aqlli Yoritish', 
      icon: '💡', 
      desc: 'Fotosintez jarayonini tezlashtiruvchi maxsus spektrli LEDlar. O\'simliklarning o\'sish tezligini 40% ga oshiradi.' 
    }
  ];

  return (
    <section id="xizmatlar" class="py-32 bg-[#040d06] relative overflow-hidden">
      {/* Fon bezagi */}
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#1b5e20_0%,_transparent_70%)] opacity-5 pointer-events-none"></div>

      <div class="mx-auto max-w-6xl px-6 relative z-10">
        <div class="mb-20 text-center">
          <span class="text-[#4caf50] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Imkoniyatlar</span>
          <h2 class="text-4xl font-black text-white md:text-6xl tracking-tighter mb-4 italic">
            Bizning <span class="text-[#4caf50]">Yechimlar</span>
          </h2>
          <div class="mx-auto h-1.5 w-24 bg-gradient-to-r from-transparent via-[#4caf50] to-transparent rounded-full"></div>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          {items.map((i, index) => (
            <div 
              key={index} 
              class="group relative rounded-[2.5rem] border border-[#2e7d32]/20 bg-[#0a1f13]/40 p-10 transition-all duration-500 hover:bg-[#0a1f13]/80 hover:border-[#4caf50]/40 hover:-translate-y-2 overflow-hidden"
            >
              {/* Karta ichidagi nur effekti */}
              <div class="absolute -right-10 -top-10 h-32 w-32 bg-[#4caf50]/5 blur-3xl group-hover:bg-[#4caf50]/20 transition-all"></div>
              
              <div class="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#1b5e20]/20 text-5xl shadow-inner transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                {i.icon}
              </div>
              
              <h3 class="mb-4 text-2xl font-black text-white tracking-tight uppercase italic group-hover:text-[#81c784] transition-colors">
                {i.title}
              </h3>
              
              <p class="text-[#c8e6c9]/50 leading-relaxed font-medium">
                {i.desc}
              </p>

              {/* Pastki dekorativ chiziq */}
              <div class="mt-8 h-1 w-0 bg-[#4caf50] transition-all duration-500 group-hover:w-full rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});