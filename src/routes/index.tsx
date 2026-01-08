import { component$,  } from '@builder.io/qwik';
import { Navbar } from '~/components/landing/Navbar';
import { Stats } from '~/components/landing/stats';
import { Footer } from '~/components/landing/Footer';
import { Solutions } from '~/components/landing/Solutions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Hero } from '~/components/landing/Hero';


export default component$(() => {


  return (
    <div class="min-h-screen bg-[#040d06] font-sans text-[#e8f5e9]/90 selection:bg-[#4caf50]/30">
      
     <Navbar/>

     <Solutions/>


     <Stats/>
     
     
     <Footer/>

    </div>
  );
});