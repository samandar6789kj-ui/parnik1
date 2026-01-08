import { component$ } from '@builder.io/qwik';

export const Stats = component$(() => {
  const statsData = [
    { label: 'Bitgan Loyihalar', val: '250+' },
    { label: 'Yillik Hosildorlik', val: '98%' },
    { label: 'Tejalgan Suv', val: '70%' },
    { label: 'Mamnun Mijozlar', val: '180+' },
  ];

  return (
    <section class="py-20 border-y border-[#2e7d32]/10 bg-[#06170b] relative overflow-hidden">
      {/* Fon uchun nozik barg nuri effekti */}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1b5e20]/5 via-transparent to-transparent opacity-50"></div>
      
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((s, index) => (
            <div key={index} class="text-center group">
              {/* Raqamlar */}
              <div class="text-3xl md:text-5xl font-black text-[#4caf50] mb-3 transition-transform duration-300 group-hover:scale-110">
                {s.val}
              </div>
              
              {/* Chiziqcha (separator) */}
              <div class="mx-auto w-8 h-1 bg-[#2e7d32]/20 rounded-full mb-3 group-hover:w-12 group-hover:bg-[#4caf50]/50 transition-all duration-300"></div>
              
              {/* Tavsif */}
              <div class="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c8e6c9]/40 font-black leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});