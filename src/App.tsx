/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BichoExample, SavedBicho } from './types';
import { bichiExamples } from './data';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import LivePreview from './components/LivePreview';
import Cheatsheet from './components/Cheatsheet';
import { 
  Sparkles, 
  Settings, 
  Layers, 
  HelpCircle, 
  Github, 
  CheckCircle, 
  Code2, 
  Grid3X3, 
  Eye, 
  BookOpen
} from 'lucide-react';

export default function App() {
  const [activeExample, setActiveExample] = useState<BichoExample>(bichiExamples[0]);
  const [editorCode, setEditorCode] = useState<string>(bichiExamples[0].html);
  
  // Local storage lists
  const [savedBichi, setSavedBichi] = useState<SavedBicho[]>([]);

  // Workspace configurations
  const [previewBg, setPreviewBg] = useState<'grid' | 'dots' | 'white' | 'slate' | 'cyber'>('grid');
  const [previewScale, setPreviewScale] = useState<number>(1);
  const [notification, setNotification] = useState<string | null>(null);

  // Load saved bichi from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('bichi_saved_designs');
      if (stored) {
        setSavedBichi(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Impossibile caricare i bichi salvati', e);
    }
  }, []);

  // Set active preset example
  const handleSelectExample = (example: BichoExample) => {
    setActiveExample(example);
    setEditorCode(example.html);
    triggerNotification(`Caricato preset: ${example.name}`);
  };

  // Reset actual code to current example original template
  const handleResetToPresetOriginal = () => {
    setEditorCode(activeExample.html);
    triggerNotification(`Ripristinato all'originale di: ${activeExample.name}`);
  };

  // Insert a custom code block into the current editor code
  const handleInsertCodeSnippet = (snippet: string) => {
    // A nice append helper that adds snippet inside the editor code
    // Try to inject before the last closing </div> if possible, or append beautifully
    const trimmed = editorCode.trim();
    if (trimmed.endsWith('</div>')) {
      const lastIndex = trimmed.lastIndexOf('</div>');
      const updated = trimmed.substring(0, lastIndex) + '\n  ' + snippet + '\n' + trimmed.substring(lastIndex);
      setEditorCode(updated);
    } else {
      setEditorCode(prev => prev + '\n' + snippet);
    }
    triggerNotification('Frammento di codice inserito nell\'animale!');
  };

  // Save new custom critter design
  const handleSaveBicho = (name: string, html: string) => {
    const newBicho: SavedBicho = {
      id: `saved-${Date.now()}`,
      name,
      html,
      updatedAt: new Date().toISOString()
    };

    const updated = [newBicho, ...savedBichi];
    setSavedBichi(updated);
    localStorage.setItem('bichi_saved_designs', JSON.stringify(updated));
    
    // Also make this newly saved bicho the active virtual example!
    setActiveExample({
      id: newBicho.id,
      name: newBicho.name,
      emoji: '👾',
      description: 'Disegno personalizzato salvato in locale.',
      difficulty: 'Intermedio',
      tags: ['Personalizzato'],
      html: newBicho.html
    });
    
    triggerNotification(`Salvataggio completato: "${name}"`);
  };

  // Load user saved design
  const handleLoadSavedBicho = (saved: SavedBicho) => {
    setActiveExample({
      id: saved.id,
      name: saved.name,
      emoji: '👾',
      description: 'Il tuo disegno personalizzato.',
      difficulty: 'Intermedio',
      tags: ['Personalizzato'],
      html: saved.html
    });
    setEditorCode(saved.html);
    triggerNotification(`Caricato bicho: ${saved.name}`);
  };

  // Delete saved design
  const handleDeleteBicho = (id: string) => {
    const filtered = savedBichi.filter(b => b.id !== id);
    setSavedBichi(filtered);
    localStorage.setItem('bichi_saved_designs', JSON.stringify(filtered));

    if (activeExample.id === id) {
      setActiveExample(bichiExamples[0]);
      setEditorCode(bichiExamples[0].html);
    }
    triggerNotification('Animale eliminato dalla memoria.');
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(prev => prev === msg ? null : prev);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F1] text-[#1A1A1A] flex flex-col font-sans p-4 md:p-8" id="bichi-root-layout">
      
      {/* Heavy Brutalist Wrapper Shell */}
      <div className="flex-1 flex flex-col bg-white border-4 md:border-8 border-black shadow-[10px_10px_0px_#000000] overflow-hidden">
        
        {/* Visual Navigation Header */}
        <header className="bg-white border-b-4 border-black px-6 py-4 flex flex-col lmd:flex-row items-center justify-between gap-4 sticky top-0 z-50" id="bichi-header">
          
          {/* Brand identity banner */}
          <div className="flex items-center space-x-3.5 text-center sm:text-left">
            <div className="relative flex items-center justify-center w-12 h-12 bg-[#E0FF00] rounded-none border-2 border-black shadow-[3px_3px_0px_#000000] overflow-hidden shrink-0">
              <span className="text-3xl select-none animate-[wiggle_1.5s_ease-in-out_infinite]">👾</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-black tracking-tighter uppercase italic text-black leading-none">Bichi.Lab</h1>
                <span className="px-2 py-0.5 border-2 border-black bg-[#E0FF00] text-[10px] font-black uppercase tracking-wider font-mono shadow-[1px_1px_0px_#000000] select-none">Puro HTML + Tailwind</span>
              </div>
              <p className="text-xs text-black/70 font-semibold tracking-tight mt-1">Progetta e anima simpatici animaletti scrivendo codice puro, senza scelte preimpostate o IA.</p>
            </div>
          </div>

          {/* Global Action Tools */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Quick interactive canvas helpers */}
            <div className="flex items-center bg-white border-2 border-black shadow-[2.5px_2.5px_0px_#000000]">
              <button
                onClick={() => setPreviewBg('grid')}
                className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider transition ${previewBg === 'grid' ? 'bg-[#E0FF00] text-black border-r-2 border-black' : 'text-black/60 hover:text-black border-r-2 border-black'}`}
                title="Sfondo quadretti"
              >
                Grid
              </button>
              <button
                onClick={() => setPreviewBg('dots')}
                className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider transition ${previewBg === 'dots' ? 'bg-[#E0FF00] text-black' : 'text-black/60 hover:text-black'}`}
                title="Sfondo puntinato"
              >
                Dots
              </button>
              <button
                onClick={() => setPreviewBg('slate')}
                className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider border-l-2 border-black transition ${previewBg === 'slate' ? 'bg-[#E0FF00] text-black' : 'text-black/60 hover:text-black'}`}
                title="Sfondo Slate"
              >
                Slate
              </button>
              <button
                onClick={() => setPreviewBg('cyber')}
                className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider border-l-2 border-black transition ${previewBg === 'cyber' ? 'bg-[#E0FF00] text-black' : 'text-black/60 hover:text-black'}`}
                title="Sfondo Cyberpunk"
              >
                Cyber
              </button>
            </div>

            {/* Scale Controller */}
            <div className="flex items-center space-x-1 bg-white p-1 border-2 border-black shadow-[2.5px_2.5px_0px_#000000]">
              <span className="text-[10px] font-black uppercase tracking-widest px-1">zoom:</span>
              <button
                onClick={() => setPreviewScale(p => Math.max(0.6, p - 0.1))}
                className="px-2 py-0.5 text-xs font-black bg-white hover:bg-[#E0FF00] text-black border border-black transition"
                title="Riduci zoom"
              >
                -
              </button>
              <span className="px-2 text-xs font-mono font-bold text-black select-none">
                {Math.round(previewScale * 100)}%
              </span>
              <button
                onClick={() => setPreviewScale(p => Math.min(1.4, p + 0.1))}
                className="px-2 py-0.5 text-xs font-black bg-white hover:bg-[#E0FF00] text-black border border-black transition"
                title="Aumenta zoom"
              >
                +
              </button>
            </div>
          </div>

        </header>

        {/* Main Sandbox Workspace Grid */}
        <main className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-[#F4F4F1]" id="bichi-workspace">
          
          {/* Left Side: Preset catalog, Saved designs, and code-helpers cheatsheet */}
          <div className="lg:col-span-4 flex flex-col border-b-4 lg:border-b-0 lg:border-r-4 border-black p-5 gap-5 overflow-y-auto">
            
            <Sidebar
              currentHtml={editorCode}
              onSelectExample={handleSelectExample}
              activeExampleId={activeExample.id}
              savedBichi={savedBichi}
              onSaveBicho={handleSaveBicho}
              onLoadSavedBicho={handleLoadSavedBicho}
              onDeleteBicho={handleDeleteBicho}
            />

            <Cheatsheet onInsertCode={handleInsertCodeSnippet} />

          </div>

          {/* Right Side: Interactive split playground containing editor and live viewport */}
          <div className="lg:col-span-8 flex flex-col gap-0 h-full">
            
            {/* Top Live Preview viewport */}
            <div className="h-[430px]">
              <LivePreview
                html={editorCode}
                background={previewBg}
                scale={previewScale}
              />
            </div>

            {/* Code Editor block */}
            <div className="flex-1 border-t-4 border-black">
              <CodeEditor
                value={editorCode}
                onChange={setEditorCode}
                onReset={handleResetToPresetOriginal}
                selectedExampleName={activeExample.name}
              />
            </div>

          </div>

        </main>

        {/* Footer Bar */}
        <footer className="h-10 border-t-4 border-black bg-white flex items-center justify-between px-6 text-[10px] font-black uppercase tracking-widest select-none shrink-0" id="bichi-footer">
          <div>Engine: TW-V4.0 // Pure HTML + Tailwind // No AI // Bichi Sandbox</div>
          <div className="flex gap-4">
            <span>Tutti i dati sono memorizzati in locale</span>
            <span className="text-red-500 font-bold animate-pulse">LIVE ENVIRONMENT</span>
          </div>
        </footer>

      </div>

      {/* Toast Notice banner built with heavy brutalist box shadow */}
      {notification && (
        <div className="fixed bottom-10 right-10 bg-[#E0FF00] text-black border-4 border-black text-xs font-black uppercase py-3 px-5 rounded-none shadow-[6px_6px_0px_#000000] z-50 flex items-center gap-2 animate-bounce">
          <span>✨</span>
          <span>{notification}</span>
        </div>
      )}

    </div>
  );
}
