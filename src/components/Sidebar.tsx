import { useState, FormEvent } from 'react';
import { BichoExample, SavedBicho } from '../types';
import { bichiExamples } from '../data';
import { Sparkles, Save, BookOpen, Trash2, ArrowRightCircle, Plus, FileCode, CheckCircle } from 'lucide-react';

interface SidebarProps {
  currentHtml: string;
  onSelectExample: (example: BichoExample) => void;
  activeExampleId: string;
  savedBichi: SavedBicho[];
  onSaveBicho: (name: string, html: string) => void;
  onLoadSavedBicho: (saved: SavedBicho) => void;
  onDeleteBicho: (id: string) => void;
}

export default function Sidebar({
  currentHtml,
  onSelectExample,
  activeExampleId,
  savedBichi,
  onSaveBicho,
  onLoadSavedBicho,
  onDeleteBicho,
}: SidebarProps) {
  const [newBichoName, setNewBichoName] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'presets' | 'saved'>('presets');

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    if (!newBichoName.trim()) return;

    onSaveBicho(newBichoName.trim(), currentHtml);
    setNewBichoName('');
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile':
        return 'bg-emerald-250 text-black border-black';
      case 'Intermedio':
        return 'bg-amber-250 text-black border-black';
      case 'Avanzato':
        return 'bg-pink-250 text-black border-black';
      default:
        return 'bg-white text-black border-black';
    }
  };

  // Helper to trigger direct download of the current animaletto as standalone single HTML file!
  const downloadBichoFile = (name: string, htmlCode: string) => {
    const fullHtml = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #F4F4F1;
      background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
      background-size: 20px 20px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    }
  </style>
</head>
<body>
  <div class="p-6 text-center bg-white rounded-none border-4 border-black shadow-[8px_8px_0px_#000000] mb-8 font-black uppercase tracking-tight text-black max-w-sm w-full">
    <h1 class="text-2xl italic inline-block mr-2 uppercase">Bichi.Lab</h1>
    <div class="text-xs font-mono mt-1 text-black/60">${name} // Standalone</div>
  </div>
  
  <div class="relative scale-125">
    ${htmlCode}
  </div>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.toLowerCase().replace(/\s+/g, '_')}_bicho.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col bg-white border-4 border-black rounded-none shadow-[6px_6px_0px_#000000] overflow-hidden h-full" id="bichi-sidebar-pane">
      
      {/* Navigation tabs */}
      <div className="flex border-b-4 border-black bg-[#F4F4F1]">
        <button
          onClick={() => setActiveTab('presets')}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-black uppercase tracking-wider border-r-2 border-black transition-all ${activeTab === 'presets' ? 'bg-[#E0FF00] text-black font-extrabold' : 'text-black/60 hover:text-black hover:bg-white/40'}`}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span>Libreria ({bichiExamples.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'saved' ? 'bg-[#E0FF00] text-black font-extrabold' : 'text-black/60 hover:text-black hover:bg-white/40'}`}
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>Salvati ({savedBichi.length})</span>
        </button>
      </div>

      {/* Pane Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {activeTab === 'presets' ? (
          <div className="space-y-3">
            <p className="text-[10px] text-black/40 font-black uppercase tracking-widest leading-none select-none">
              SPECDIMENS CATALOG:
            </p>
            {bichiExamples.map((example) => {
              const isActive = activeExampleId === example.id;
              return (
                <div
                  key={example.id}
                  onClick={() => onSelectExample(example)}
                  className={`group relative p-4 rounded-none border-2 cursor-pointer transition text-left flex flex-col justify-between ${isActive ? 'bg-[#E0FF00] border-black text-black shadow-[3px_3px_0px_#000000]' : 'bg-white border-black/10 hover:border-black hover:shadow-[3px_3px_0px_#000000]'}`}
                >
                  <div className="flex items-start justify-between gap-1.5 mb-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl select-none">{example.emoji}</span>
                      <h4 className={`text-xs font-black uppercase tracking-tight group-hover:italic ${isActive ? 'text-black font-black' : 'text-slate-805'}`}>
                        {example.name}
                      </h4>
                    </div>
                    <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded-none border-2 border-black ${getDifficultyBadge(example.difficulty)}`}>
                      {example.difficulty}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-800 leading-tight font-medium line-clamp-2">
                    {example.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {example.tags.map((tg) => (
                      <span key={tg} className="text-[9px] bg-black text-white px-2 py-0.2 font-mono uppercase tracking-wider font-bold">
                        #{tg}
                      </span>
                    ))}
                  </div>

                  <ArrowRightCircle 
                    className={`absolute bottom-3 right-3 w-4.5 h-4.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${isActive ? 'text-black opacity-100' : 'text-slate-500'}`} 
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {/* Save Current Bicho form */}
            <form onSubmit={handleSave} className="bg-white border-2 border-black p-4 rounded-none shadow-[4px_4px_0px_#000000] space-y-3">
              <label className="block text-[9px] font-black text-black/50 uppercase tracking-widest">
                Salva bicho corrente
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newBichoName}
                  onChange={(e) => setNewBichoName(e.target.value)}
                  placeholder="Nome dell'animaletto..."
                  className="flex-1 bg-white border-2 border-black rounded-none px-2.5 py-1.5 text-xs text-black placeholder-slate-400 font-mono tracking-tight focus:outline-none focus:bg-[#E0FF00]/10"
                />
                <button
                  type="submit"
                  className="bg-[#E0FF00] hover:bg-black hover:text-white text-black rounded-none border-2 border-black p-2 transition shrink-0 font-black text-xs"
                  title="Salva in memoria"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {saveSuccess && (
                <div className="flex items-center gap-1.5 text-[10px] text-black font-black uppercase tracking-wider bg-[#E0FF00] border-2 border-black py-1.5 px-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-black" />
                  <span>Salvato con successo!</span>
                </div>
              )}
            </form>

            <p className="text-[10px] text-black/50 font-black uppercase tracking-widest pt-1">
              SPECDIMENS SALVATI DA TE:
            </p>

            {savedBichi.length === 0 ? (
              <div className="text-center py-10 bg-slate-50/50 border-2 border-dashed border-black/30 rounded-none">
                <p className="text-xs text-black/40 leading-relaxed font-bold uppercase tracking-tight">
                  Nessun bicho personalizzato ancora salvato.<br />Usa il box per bloccarne uno!
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedBichi.map((bicho) => (
                  <div
                    key={bicho.id}
                    className="group bg-white border-2 border-black p-3.5 rounded-none flex items-center justify-between hover:bg-[#F4F4F1] hover:shadow-[3px_3px_0px_#000000] transition gap-2"
                  >
                    <div 
                      onClick={() => onLoadSavedBicho(bicho)}
                      className="flex-1 cursor-pointer text-left"
                    >
                      <h4 className="text-xs font-black uppercase tracking-tight text-black hover:italic transition">
                        👾 {bicho.name}
                      </h4>
                      <p className="text-[10px] font-mono text-black/50 mt-1">
                        Ora: {new Date(bicho.updatedAt).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={() => downloadBichoFile(bicho.name, bicho.html)}
                        className="p-1.5 border border-black hover:bg-[#E0FF00] rounded-none text-black transition-colors"
                        title="Scarica file HTML"
                      >
                        <FileCode className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDeleteBicho(bicho.id)}
                        className="p-1.5 border border-black hover:bg-red-500 hover:text-white rounded-none text-black transition-colors"
                        title="Elimina"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Standalone Export current bicho floating banner */}
      <div className="p-4.5 bg-[#F4F4F1] border-t-4 border-black flex items-center justify-between gap-1 select-none">
        <div className="text-[10px] text-black font-black uppercase tracking-wide">
          Blueprint Standalone:
        </div>
        <button
          onClick={() => downloadBichoFile(activeExampleId === 'custom' ? 'Custom_Bicho' : activeExampleId, currentHtml)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black uppercase text-black bg-[#E0FF00] border-2 border-black hover:bg-black hover:text-white hover:italic rounded-none transition shadow-[2.5px_2.5px_0px_#000000]"
        >
          <FileCode className="w-3.5 h-3.5" />
          <span>Esporta HTML</span>
        </button>
      </div>
    </div>
  );
}
