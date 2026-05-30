import { BichoExample } from './types';

export const bichiExamples: BichoExample[] = [
  {
    id: 'gigio',
    name: 'Gigio il Rimbalzino',
    emoji: '🟣',
    description: 'Un simpatico animaletto di gelatina viola che non smette mai di saltellare allegro!',
    difficulty: 'Facile',
    tags: ['Rimbalzo', 'Occhi Grandi', 'Simpatico'],
    html: `<div class="flex flex-col items-center justify-center min-h-[300px] w-full p-6 select-none">
  <!-- Bouncing Shadow -->
  <div class="w-32 h-3 bg-slate-900/10 rounded-full blur-[2px] mb-2 animate-pulse transition-all duration-300 transform scale-x-75"></div>

  <!-- Body Container with bounce animation -->
  <div class="relative w-48 h-40 bg-gradient-to-br from-violet-400 to-indigo-600 rounded-[60%_60%_40%_40%] shadow-lg shadow-indigo-500/20 flex flex-col items-center justify-center animate-bounce duration-1000">
    
    <!-- Rosy Cheeks (Blush) -->
    <div class="absolute inset-x-6 top-20 flex justify-between px-2">
      <div class="w-6 h-3 bg-pink-400 rounded-full opacity-60 blur-[1px] animate-pulse"></div>
      <div class="w-6 h-3 bg-pink-400 rounded-full opacity-60 blur-[1px] animate-pulse"></div>
    </div>

    <!-- Antennas with spheres -->
    <div class="absolute -top-6 left-1/4">
      <div class="w-2.5 h-10 bg-indigo-600 rounded-full transform -rotate-12 flex flex-col items-center justify-start">
        <div class="w-5 h-5 bg-pink-400 rounded-full -mt-4 shadow-md shadow-pink-400/40 animate-pulse"></div>
      </div>
    </div>
    <div class="absolute -top-6 right-1/4">
      <div class="w-2.5 h-10 bg-indigo-600 rounded-full transform rotate-12 flex flex-col items-center justify-start">
        <div class="w-5 h-5 bg-pink-400 rounded-full -mt-4 shadow-md shadow-pink-400/40 animate-pulse"></div>
      </div>
    </div>

    <!-- Face Elements -->
    <div class="flex flex-col items-center space-y-3 z-10">
      <!-- Big Eyes Wrapper -->
      <div class="flex space-x-6">
        <!-- Left Eye -->
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center border-3 border-indigo-950 shadow-inner">
          <div class="w-6 h-6 bg-indigo-950 rounded-full relative flex items-center justify-center animate-ping duration-[3000ms] [animation-iteration-count:1] shrink-0">
            <!-- Glint -->
            <div class="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
            <div class="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        <!-- Right Eye (Slight tracker look) -->
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center border-3 border-indigo-950 shadow-inner">
          <div class="w-6 h-6 bg-indigo-950 rounded-full relative flex items-center justify-center shrink-0">
            <!-- Glint -->
            <div class="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
            <div class="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Cute smiling mouth -->
      <div class="w-8 h-4 border-b-4 border-indigo-900 rounded-b-full"></div>
    </div>

    <!-- Feet underneath -->
    <div class="absolute -bottom-3 w-full flex justify-around px-10">
      <div class="w-10 h-5 bg-indigo-800 border-2 border-indigo-950 rounded-full transform hover:scale-y-110 transition-transform origin-top"></div>
      <div class="w-10 h-5 bg-indigo-800 border-2 border-indigo-950 rounded-full transform hover:scale-y-110 transition-transform origin-top"></div>
    </div>

  </div>
</div>`
  },
  {
    id: 'kiko',
    name: 'Kiko la Lucciola',
    emoji: '🟢',
    description: 'Un piccolo insetto notturno verde smeraldo con ali traslucide e coda che si illumina.',
    difficulty: 'Intermedio',
    tags: ['Bagliore', 'Ali Traslucide', 'Hover Effects'],
    html: `<div class="flex flex-col items-center justify-center min-h-[300px] w-full p-4 select-none">
  <!-- Glowing aura behind -->
  <div class="absolute w-44 h-44 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none animate-pulse"></div>

  <div class="relative flex flex-col items-center">
    
    <!-- Wings (Absolute positioned, hovering) -->
    <div class="absolute -top-10 -left-12 w-20 h-16 bg-white/20 border border-white/40 rounded-[100%_0%_100%_50%] origin-bottom-right rotate-[-20deg] backdrop-blur-[1px] animate-[pulse_1.5s_infinite_alternate]"></div>
    <div class="absolute -top-10 -right-12 w-20 h-16 bg-white/20 border border-white/40 rounded-[0%_100%_50%_100%] origin-bottom-left rotate-[20deg] backdrop-blur-[1px] animate-[pulse_1.5s_infinite_alternate_0.2s]"></div>

    <!-- Body -->
    <div class="relative w-28 h-36 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-[50%_50%_45%_45%] border-3 border-teal-950 shadow-lg flex flex-col items-center justify-center animate-[bounce_2.5s_infinite]">
      
      <!-- Glowing Antenna -->
      <div class="absolute -top-10 left-4 w-1.5 h-10 bg-teal-900 rounded-full origin-bottom rotate-[-15deg]">
        <div class="absolute -top-3.5 -left-1.5 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
        <div class="absolute -top-3.5 -left-1.5 w-4 h-4 bg-yellow-300 rounded-full border border-teal-950"></div>
      </div>
      <div class="absolute -top-10 right-4 w-1.5 h-10 bg-teal-900 rounded-full origin-bottom rotate-[15deg]">
        <div class="absolute -top-3.5 -left-1.5 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
        <div class="absolute -top-3.5 -left-1.5 w-4 h-4 bg-yellow-300 rounded-full border border-teal-950"></div>
      </div>

      <!-- Eyes showing surprise -->
      <div class="flex space-x-3 mt-4">
        <!-- Eye 1 -->
        <div class="w-9 h-9 bg-teal-950 rounded-full flex items-center justify-center border-2 border-teal-400">
          <div class="w-2.5 h-2.5 bg-yellow-300 rounded-full relative">
            <div class="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        <!-- Eye 2 -->
        <div class="w-9 h-9 bg-teal-950 rounded-full flex items-center justify-center border-2 border-teal-400">
          <div class="w-2.5 h-2.5 bg-yellow-300 rounded-full relative">
            <div class="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Rosy cheeks -->
      <div class="flex justify-between w-16 px-1 mt-1">
        <div class="w-3.5 h-2 bg-rose-400 rounded-full opacity-60"></div>
        <div class="w-3.5 h-2 bg-rose-400 rounded-full opacity-60"></div>
      </div>

      <!-- Small mouth -->
      <div class="w-3 h-3 bg-teal-950 border-2 border-teal-900 rounded-full mt-2 animate-bounce"></div>

      <!-- Glowing firefly abdomen-top border -->
      <div class="absolute -bottom-1.5 w-14 h-5 bg-emerald-400/80 rounded-full blur-[1px] shadow-lg shadow-emerald-400/80 animate-pulse flex items-center justify-center">
        <!-- Bright center -->
        <div class="w-10 h-3 bg-yellow-100 rounded-full filter blur-[0.5px]"></div>
      </div>
    </div>

    <!-- Small wiggling legs -->
    <div class="flex space-x-12 mt-1 px-4">
      <div class="w-4 h-5 border-l-3 border-b-3 border-teal-900 rounded-bl-lg transform origin-top animate-[spin_0.8s_infinite_alternate]"></div>
      <div class="w-4 h-5 border-r-3 border-b-3 border-teal-900 rounded-br-lg transform origin-top animate-[spin_0.8s_infinite_alternate_0.2s]"></div>
    </div>

  </div>
</div>`
  },
  {
    id: 'otto',
    name: "Otto l'Ottopode",
    emoji: '🐙',
    description: 'Un polipetto scienziato degli abissi con occhiali buffi e tentacoli fluttuanti.',
    difficulty: 'Avanzato',
    tags: ['Tentacoli', 'Occhiali', 'Neon-Style'],
    html: `<div class="flex flex-col items-center justify-center min-h-[300px] w-full p-4 select-none">
  <!-- Bubbles floating up -->
  <div class="absolute -left-2 top-1/4 w-3 h-3 bg-cyan-300/40 border border-cyan-300/60 rounded-full animate-[bounce_4s_infinite]"></div>
  <div class="absolute right-4 top-10 w-2.5 h-2.5 bg-cyan-300/30 border border-cyan-300/50 rounded-full animate-[bounce_3s_infinite_0.5s]"></div>
  <div class="absolute right-12 bottom-12 w-4 h-4 bg-cyan-300/20 border border-cyan-300/40 rounded-full animate-[bounce_5s_infinite_1s]"></div>

  <div class="relative flex flex-col items-center">
    
    <!-- Main Body and Head -->
    <div class="relative w-40 h-36 bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 rounded-[50%_50%_35%_35%] border-3 border-sky-950 shadow-xl flex flex-col items-center justify-center z-10 animate-[bounce_3s_infinite_alternate]">
      
      <!-- Nerd Glasses -->
      <div class="absolute top-10 flex space-x-0 z-20">
        <!-- Glasses Frame 1 -->
        <div class="w-14 h-14 border-4 border-amber-400 bg-sky-200/20 rounded-full flex items-center justify-center shadow shadow-amber-400/50 relative">
          <!-- Glass Bridge -->
          <div class="absolute -right-2 top-5 w-4 h-2.5 bg-amber-400"></div>
          <!-- Pupil -->
          <div class="w-5 h-5 bg-sky-950 rounded-full ml-1 relative">
            <div class="w-1.5 h-1.5 bg-white rounded-full absolute top-1 left-1"></div>
            <div class="w-1 h-1 bg-white rounded-full absolute bottom-1 right-1"></div>
          </div>
        </div>
        
        <!-- Glasses Frame 2 -->
        <div class="w-14 h-14 border-4 border-amber-400 bg-sky-200/20 rounded-full flex items-center justify-center shadow shadow-amber-400/50">
          <!-- Pupil -->
          <div class="w-5 h-5 bg-sky-950 rounded-full -ml-1 relative">
            <div class="w-1.5 h-1.5 bg-white rounded-full absolute top-1 left-1"></div>
            <div class="w-1 h-1 bg-white rounded-full absolute bottom-1 right-1"></div>
          </div>
        </div>
      </div>

      <!-- Cute blush and happy mouth -->
      <div class="absolute bottom-6 flex flex-col items-center space-y-1">
        <div class="flex justify-between w-16 px-1">
          <div class="w-4 h-2 bg-pink-400/60 rounded-full"></div>
          <div class="w-4 h-2 bg-pink-400/60 rounded-full"></div>
        </div>
        <!-- Little blushing shy smile -->
        <div class="w-6 h-3 border-b-3 border-sky-950 rounded-b-full"></div>
      </div>

      <!-- Head Spot Details -->
      <div class="absolute top-3 left-6 w-3 h-3 bg-sky-300 rounded-full opacity-60"></div>
      <div class="absolute top-5 left-10 w-2 h-2 bg-sky-300 rounded-full opacity-60"></div>
      <div class="absolute top-4 right-8 w-4 h-4 bg-sky-300 rounded-full opacity-50"></div>
    </div>

    <!-- 6 Floating Tentacles behind / below body -->
    <div class="flex space-x-1 -mt-4 z-0 justify-center">
      <!-- Tentacle 1 -->
      <div class="w-5 h-14 bg-gradient-to-b from-sky-500 to-blue-700 border-2 border-sky-950 rounded-b-full origin-top -mt-1 rotate-[-25deg] animate-[spin_1.5s_infinite_alternate]"></div>
      <!-- Tentacle 2 -->
      <div class="w-5 h-16 bg-gradient-to-b from-sky-500 to-blue-700 border-2 border-sky-950 rounded-b-full origin-top rotate-[-12deg] animate-[spin_1.8s_infinite_alternate_0.2s]"></div>
      <!-- Tentacle 3 -->
      <div class="w-5 h-18 bg-gradient-to-b from-sky-500 to-blue-700 border-2 border-sky-950 rounded-b-full origin-top rotate-0 animate-[spin_2s_infinite_alternate_0.4s]"></div>
      <!-- Tentacle 4 -->
      <div class="w-5 h-18 bg-gradient-to-b from-sky-500 to-blue-700 border-2 border-sky-950 rounded-b-full origin-top rotate-0 animate-[spin_1.7s_infinite_alternate_0.1s]"></div>
      <!-- Tentacle 5 -->
      <div class="w-5 h-16 bg-gradient-to-b from-sky-500 to-blue-700 border-2 border-sky-950 rounded-b-full origin-top rotate-[12deg] animate-[spin_2.2s_infinite_alternate_0.3s]"></div>
      <!-- Tentacle 6 -->
      <div class="w-5 h-14 bg-gradient-to-b from-sky-500 to-blue-700 border-2 border-sky-950 rounded-b-full origin-top -mt-1 rotate-[25deg] animate-[spin_1.4s_infinite_alternate_0.5s]"></div>
    </div>

  </div>
</div>`
  },
  {
    id: 'zorco',
    name: 'Zorco lo Spilungone',
    emoji: '🦒',
    description: 'Un mostriciattolo giallo/arancione molto alto con ben tre occhi e zampette lunghe.',
    difficulty: 'Intermedio',
    tags: ['Tre Occhi', 'Alto', 'Divertente'],
    html: `<div class="flex flex-col items-center justify-center min-h-[300px] w-full p-6 select-none">
  <div class="relative flex flex-col items-center">
    
    <!-- Tall Body (gongolo body shape) -->
    <div class="relative w-28 h-56 bg-gradient-to-b from-amber-300 via-orange-400 to-amber-500 rounded-[50px_50px_35px_35px] border-3 border-amber-950 shadow-md flex flex-col items-center justify-start py-6 space-y-4 animate-[pulse_2s_infinite_alternate]">
      
      <!-- Top Crown / Spikes -->
      <div class="absolute -top-4 flex space-x-2">
        <div class="w-3 h-5 bg-orange-500 border-2 border-amber-950 rounded-t-full transform -rotate-12"></div>
        <div class="w-3.5 h-6 bg-orange-500 border-2 border-amber-950 rounded-t-full"></div>
        <div class="w-3 h-5 bg-orange-500 border-2 border-amber-950 rounded-t-full transform rotate-12"></div>
      </div>

      <!-- Tree Eyes Stack -->
      <div class="flex flex-col items-center space-y-1.5 pt-2">
        <!-- Eye 1 (Top) -->
        <div class="w-9 h-9 bg-white rounded-full border-2 border-amber-950 flex items-center justify-center relative shadow-sm">
          <div class="w-3.5 h-3.5 bg-amber-950 rounded-full animate-[ping_3s_infinite]">
            <div class="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        <!-- Eye 2 (Middle, looking left) -->
        <div class="w-9 h-9 bg-white rounded-full border-2 border-amber-950 flex items-center justify-center relative shadow-sm">
          <div class="w-3.5 h-3.5 bg-amber-950 rounded-full absolute left-2">
            <div class="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        <!-- Eye 3 (Bottom, looking right) -->
        <div class="w-9 h-9 bg-white rounded-full border-2 border-amber-950 flex items-center justify-center relative shadow-sm">
          <div class="w-3.5 h-3.5 bg-amber-950 rounded-full absolute right-2">
            <div class="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Silly teeth-exposing mouth -->
      <div class="w-14 h-7 bg-amber-950 border-2 border-amber-900 rounded-b-full flex items-start justify-center pt-0 overflow-hidden relative">
        <!-- Tooth 1 -->
        <div class="w-3 h-3 bg-white rounded-b-sm border-x border-b border-amber-950"></div>
        <!-- Tooth 2 -->
        <div class="w-3 h-2.5 bg-white rounded-b-sm border-x border-b border-amber-950"></div>
      </div>

      <!-- Belly Patch -->
      <div class="w-18 h-18 bg-amber-100 rounded-full border border-amber-900/30 flex items-center justify-center">
        <div class="w-3 h-3 bg-orange-400 rounded-full opacity-40"></div>
      </div>

    </div>

    <!-- Long Wobbly Legs -->
    <div class="flex space-x-12 -mt-2.5 z-0">
      <!-- Left Leg -->
      <div class="w-4 h-20 bg-orange-500 border-2 border-amber-950 rounded-b-lg origin-top rotate-[-5deg] flex flex-col justify-end">
        <div class="w-8 h-4 bg-amber-950 rounded-full -ml-2 border border-x-amber-950"></div>
      </div>
      <!-- Right Leg -->
      <div class="w-4 h-20 bg-orange-500 border-2 border-amber-950 rounded-b-lg origin-top rotate-[5deg] flex flex-col justify-end">
        <div class="w-8 h-4 bg-amber-950 rounded-full -ml-2 border border-x-amber-950"></div>
      </div>
    </div>

  </div>
</div>`
  },
  {
    id: 'blinky',
    name: 'Blinky il Vegliante',
    emoji: '👁️',
    description: 'Un droide futuristico a forma di occhio gigante con un anello orbitante.',
    difficulty: 'Avanzato',
    tags: ['Cyberpunk', 'Orbita', 'Luci Neon'],
    html: `<div class="flex flex-col items-center justify-center min-h-[300px] w-full p-6 select-none">
  <!-- Interactive Sci-fi Ring -->
  <div class="relative w-56 h-56 flex items-center justify-center">
    
    <!-- Rotating Ring Background -->
    <div class="absolute w-52 h-20 border-4 border border-cyan-400/40 border-dotted rounded-full animate-[spin_10s_linear_infinite] transform -rotate-12"></div>
    <div class="absolute w-56 h-12 border-2 border border-violet-400/30 rounded-full animate-[spin_15s_linear_infinite] transform rotate-45"></div>

    <!-- Floating energy nodes -->
    <div class="absolute left-6 top-8 w-4 h-4 bg-violet-400 rounded-full animate-ping filter blur-[1px]"></div>
    <div class="absolute right-10 bottom-6 w-3 h-3 bg-cyan-400 rounded-full animate-pulse filter blur-[1px]"></div>

    <!-- Main sphere body -->
    <div class="absolute w-36 h-36 bg-gradient-to-br from-slate-700 via-slate-800 to-indigo-950 border-4 border-slate-900 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/20 z-10 animate-[bounce_4s_infinite]">
      
      <!-- Central giant digital eye -->
      <div class="w-24 h-24 bg-slate-950 border border-indigo-500/30 rounded-full flex items-center justify-center relative overflow-hidden">
        
        <!-- Radar Grid effect in eyeball -->
        <div class="absolute inset-0 bg-[radial-gradient(circle,_transparent_30%,_rgba(6,182,212,0.15)_31%,_transparent_32%)] bg-[scale:14px_14px]"></div>
        
        <!-- Pupil (Neon Cyan Core) -->
        <div class="relative w-12 h-12 bg-cyan-500/80 rounded-full flex items-center justify-center filter drop-shadow-[0_0_10px_#06b6d4] animate-pulse">
          <!-- Inner Core -->
          <div class="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <!-- Scanning laser line -->
        <div class="absolute inset-x-0 h-0.5 bg-red-400/60 filter blur-[0.5px] animate-[pulse_1s_infinite_alternate]"></div>
      </div>

      <!-- Metallic armor plates indicators -->
      <div class="absolute top-2 left-6 w-2 h-1 bg-cyan-400 rounded-full"></div>
      <div class="absolute top-2 right-6 w-2 h-1 bg-cyan-400 rounded-full"></div>
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-violet-400 rounded-full"></div>

    </div>

    <!-- Anti-gravity jets -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div class="w-6 h-3 bg-slate-900 rounded-full border border-slate-700"></div>
      <div class="w-3.5 h-6 bg-gradient-to-t from-transparent via-cyan-400/50 to-cyan-400 rounded-full filter blur-[1px] transform animate-pulse"></div>
    </div>

  </div>
</div>`
  },
  {
    id: 'nuvola',
    name: 'Nuvola la Fluttuante',
    emoji: '☁️',
    description: 'Una nuvoletta magica rosa pastello con orecchie da coniglio e stelle luminose.',
    difficulty: 'Facile',
    tags: ['Magico', 'Pastello', 'Kawaii'],
    html: `<div class="flex flex-col items-center justify-center min-h-[300px] w-full p-4 select-none">
  <div class="relative flex flex-col items-center animate-[bounce_5s_infinite_ease-in-out]">
    
    <!-- Sparkles (Kawaii stars) -->
    <div class="absolute -top-6 -left-6 text-xl animate-[pulse_1.5s_infinite]">✨</div>
    <div class="absolute -bottom-2 -right-4 text-lg animate-[pulse_2s_infinite]">🌟</div>

    <!-- Rabbit Ears -->
    <div class="absolute -top-12 left-10 flex space-x-12 z-0">
      <!-- Left Ear -->
      <div class="w-6 h-18 bg-pink-100 border-2 border-pink-300 rounded-t-full transform -rotate-12 flex items-center justify-center">
        <div class="w-3 h-12 bg-pink-300/40 rounded-t-full"></div>
      </div>
      <!-- Right Ear -->
      <div class="w-6 h-18 bg-pink-100 border-2 border-pink-300 rounded-t-full transform rotate-12 flex items-center justify-center">
        <div class="w-3 h-12 bg-pink-300/40 rounded-t-full"></div>
      </div>
    </div>

    <!-- Fluffy Cloud Body -->
    <div class="relative w-52 h-32 bg-gradient-to-b from-pink-100 via-rose-100 to-rose-200 border-2 border-pink-300/80 rounded-full shadow-lg shadow-pink-200/50 flex flex-col items-center justify-center z-10">
      
      <!-- Supplementary Fluff Balls -->
      <div class="absolute -top-4 left-6 w-16 h-16 bg-pink-100 border-t-2 border-l border-pink-300/60 rounded-full"></div>
      <div class="absolute -top-6 right-8 w-20 h-20 bg-pink-100 border-t-2 border-r border-pink-300/60 rounded-full"></div>
      <div class="absolute -bottom-1 -left-2 w-14 h-14 bg-rose-200/80 rounded-full -z-10"></div>
      <div class="absolute -bottom-1 -right-2 w-14 h-14 bg-rose-200/80 rounded-full -z-10"></div>

      <!-- Blushing Cheeks -->
      <div class="absolute inset-x-8 bottom-10 flex justify-between">
        <div class="w-5 h-5 bg-rose-300/60 rounded-full filter blur-[1px]"></div>
        <div class="w-5 h-5 bg-rose-300/60 rounded-full filter blur-[1px]"></div>
      </div>

      <!-- Closed Happy Eyes -->
      <div class="flex space-x-8 mt-2 z-10">
        <!-- Curved Eye Left -->
        <div class="w-8 h-4 border-t-3 border-pink-700 rounded-t-full transform rotate-12"></div>
        <!-- Curved Eye Right -->
        <div class="w-8 h-4 border-t-3 border-pink-700 rounded-t-full transform -rotate-12"></div>
      </div>

      <!-- Tiny Mouth -->
      <div class="w-4 h-3 bg-pink-700 rounded-b-full mt-2 z-10"></div>
    </div>

    <!-- Small angel-like wings on sides -->
    <div class="absolute left-[-24px] top-10 w-10 h-10 bg-white border border-pink-200 rounded-[100%_0%_50%_50%] origin-right rotate-[15deg] animate-[pulse_2s_infinite]"></div>
    <div class="absolute right-[-24px] top-10 w-10 h-10 bg-white border border-pink-200 rounded-[0%_100%_50%_50%] origin-left rotate-[-15deg] animate-[pulse_2s_infinite_0.5s]"></div>

  </div>
</div>`
  }
];
