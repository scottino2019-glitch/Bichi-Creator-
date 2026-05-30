import { useState } from 'react';
import { Sparkles, HelpCircle, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

interface Snippet {
  label: string;
  code: string;
  desc: string;
}

export default function Cheatsheet({ onInsertCode }: { onInsertCode: (code: string) => void }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>('shapes');

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const sections = [
    {
      id: 'shapes',
      title: 'Forme e Corpi (Shapes)',
      emoji: '🎈',
      snippets: [
        {
          label: 'Cerchio Perfetto',
          code: '<div class="w-24 h-24 bg-rose-400 rounded-full"></div>',
          desc: 'Per corpi sferici o occhi.'
        },
        {
          label: 'Forma a Goccia/Uovo',
          code: '<div class="w-28 h-36 bg-emerald-400 rounded-[50%_50%_40%_40%]"></div>',
          desc: 'Stile ovetto o slime.'
        },
        {
          label: 'Fagiolo / Jelly',
          code: '<div class="w-36 h-28 bg-violet-400 rounded-[60%_30%_60%_30%]"></div>',
          desc: 'Arrotondato asimmetrico organico.'
        },
        {
          label: 'Ovale Allungato',
          code: '<div class="w-16 h-48 bg-amber-400 rounded-[50px_50px_30px_30px]"></div>',
          desc: 'Ideale per bichi alti o gambe.'
        }
      ]
    },
    {
      id: 'eyes',
      title: 'Occhi e Sguardi (Eyes)',
      emoji: '👁️',
      snippets: [
        {
          label: 'Occhio Simpatico',
          code: `<div class="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-slate-900">
  <div class="w-4 h-4 bg-slate-950 rounded-full relative">
    <div class="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
  </div>
</div>`,
          desc: 'Occhio classico con riflesso di luce.'
        },
        {
          label: 'Occhio Strizzato / Felice',
          code: '<div class="w-8 h-4 border-t-4 border-slate-900 rounded-t-full"></div>',
          desc: 'Espressione sorridente o rilassata.'
        },
        {
          label: 'Occhio Spietato / Mezzo Chiuso',
          code: `<div class="w-10 h-10 bg-white rounded-full border-2 border-slate-900 overflow-hidden relative">
  <div class="absolute top-0 inset-x-0 h-4 bg-slate-900/10 border-b border-slate-400"></div>
  <div class="w-4 h-4 bg-slate-950 rounded-full mx-auto mt-2"></div>
</div>`,
          desc: 'Sguardo assonnato o leggermente scettico.'
        }
      ]
    },
    {
      id: 'mouth',
      title: 'Espressioni e Bocche (Mouths)',
      emoji: '👄',
      snippets: [
        {
          label: 'Sorriso Arrotondato',
          code: '<div class="w-8 h-4 border-b-4 border-slate-900 rounded-b-full"></div>',
          desc: 'Un caldo sorriso felice.'
        },
        {
          label: 'Bocca Sorpresa / Tonda',
          code: '<div class="w-4 h-4 bg-slate-950 rounded-full border border-slate-800"></div>',
          desc: 'Un cerchio nero stupito.'
        },
        {
          label: 'Dente Buffo',
          code: `<div class="w-12 h-6 bg-slate-950 rounded-b-full flex items-start justify-center overflow-hidden">
  <div class="w-3 h-3 bg-white rounded-b"></div>
</div>`,
          desc: 'Bocca scura con un simpatico dentino sporgente.'
        }
      ]
    },
    {
      id: 'anims',
      title: 'Effetti e Animazioni (Animations)',
      emoji: '⚡',
      snippets: [
        {
          label: 'Salto Allegro (Bounce)',
          code: 'animate-bounce',
          desc: 'Fa rimbalzare l\'intero elemento su e giù.'
        },
        {
          label: 'Pulsazione Bagliore (Pulse)',
          code: 'animate-pulse',
          desc: 'Dissolvenza fluida, eccellente per antenne o code.'
        },
        {
          label: 'Rotazione Perpetua (Spin)',
          code: 'animate-[spin_8s_linear_infinite]',
          desc: 'Per ali, eliche o anelli orbitanti.'
        },
        {
          label: 'Fluttuazione (Bounce Lento)',
          code: 'animate-[bounce_3s_infinite_alternate]',
          desc: 'Oscillazione verticale molto morbida per fluttuazione.'
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-none border-4 border-black p-5 mt-4 shadow-[6px_6px_0px_#000000]">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-black" />
        <h3 className="text-sm font-black uppercase tracking-wider text-black">Guida e Trucchetti</h3>
      </div>
      <p className="text-xs text-black/70 mb-4 leading-normal font-medium">
        I bichi sono fatti interamente di tag HTML e classi Tailwind CSS. Clicca su un trucchetto o inseriscilo direttamente nell'editor!
      </p>

      <div className="space-y-3">
        {sections.map((section) => {
          const isOpen = activeSection === section.id;
          return (
            <div key={section.id} className="border-2 border-black rounded-none overflow-hidden bg-white shadow-[2px_2px_0px_#000000]">
              <button
                onClick={() => setActiveSection(isOpen ? null : section.id)}
                className="w-full px-4 py-3 bg-[#F4F4F1] border-b-2 border-black flex items-center justify-between text-left hover:bg-[#E0FF00] transition"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{section.emoji}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-black">{section.title}</span>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-black" /> : <ChevronDown className="w-4 h-4 text-black" />}
              </button>

              {isOpen && (
                <div className="p-3 divide-y-2 divide-black/10 bg-white">
                  {section.snippets.map((snip, sIdx) => {
                    const uniqueId = `snip-${section.id}-${sIdx}`;
                    const globalIdx = section.id.charCodeAt(0) + sIdx;
                    return (
                      <div key={uniqueId} className="py-2.5 first:pt-0 last:pb-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[11px] font-black uppercase text-black tracking-tight">{snip.label}</span>
                          <div className="flex items-center space-x-1.5">
                            <button
                              onClick={() => onInsertCode(snip.code)}
                              className="text-[10px] bg-[#E0FF00] hover:bg-black hover:text-white text-black px-2 py-0.5 rounded-none border border-black transition font-bold uppercase tracking-wider"
                            >
                              Inserisci
                            </button>
                            <button
                              onClick={() => copyToClipboard(snip.code, globalIdx)}
                              className="p-1 border border-black hover:bg-black hover:text-white rounded-none text-black transition"
                              title="Copia codice"
                            >
                              {copiedIndex === globalIdx ? (
                                <Check className="w-3 h-3 text-emerald-500" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-[10px] text-black/60 mb-2 font-medium">{snip.desc}</p>
                        <pre className="text-[10px] bg-black text-[#E0FF00] p-2.5 rounded-none font-mono overflow-x-auto whitespace-pre border border-black">
                          {snip.code}
                        </pre>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tailwind quick cheat alert */}
      <div className="mt-4 p-3.5 bg-[#E0FF00]/10 rounded-none border-2 border-black text-[11px] text-black leading-relaxed shadow-[3px_3px_0px_#000000]">
        <span className="font-black uppercase tracking-wider text-black block mb-1">💡 Consiglio Pro:</span>
        <p className="font-medium text-black/80">
          Per creare labbra, spigoli o ovali asimmetrici divertenti per il corpo, usa le forme personalizzate di Tailwind con <code className="font-mono bg-white border border-black px-1">rounded-[angoli]</code> come: <code className="bg-white border border-black px-1 font-mono">rounded-[60%_40%_50%_50%]</code>. Puoi modificare ciascuno degli 8 valori per dare un look gelatinoso unico!
        </p>
      </div>
    </div>
  );
}
