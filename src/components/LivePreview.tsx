import { useEffect, useState } from 'react';
import { Eye, ShieldAlert, Layers } from 'lucide-react';

interface LivePreviewProps {
  html: string;
  background: 'grid' | 'dots' | 'white' | 'slate' | 'cyber';
  scale: number;
}

export default function LivePreview({ html, background, scale }: LivePreviewProps) {
  const [renderingError, setRenderingError] = useState<string | null>(null);
  const [iframeKey, setIframeKey] = useState(0);

  // Define background style class
  const getBgClass = () => {
    switch (background) {
      case 'grid':
        return 'bg-[#F4F4F1] bg-[linear-gradient(to_right,#dedede_2px,transparent_2px),linear-gradient(to_bottom,#dedede_2px,transparent_2px)] bg-[size:24px_24px] border-4 border-black rounded-none shadow-[4px_4px_0px_#000000]';
      case 'dots':
        return 'bg-[#F4F4F1] bg-[radial-gradient(#1a1a1a_2px,transparent_2px)] [background-size:20px_20px] border-4 border-black rounded-none shadow-[4px_4px_0px_#000000]';
      case 'white':
        return 'bg-white border-4 border-black rounded-none shadow-[4px_4px_0px_#000000]';
      case 'slate':
        return 'bg-[#1e293b] border-4 border-black rounded-none shadow-[4px_4px_0px_#000000]';
      case 'cyber':
        return 'bg-gradient-to-tr from-indigo-950 via-slate-950 to-purple-950 border-4 border-black rounded-none shadow-[4px_4px_0px_#000000]';
      default:
        return 'bg-white border-4 border-black rounded-none';
    }
  };

  // Listen to iframe sandbox status and error messages via postMessage
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data) {
        if (event.data.type === 'bichi-render-error') {
          setRenderingError(event.data.message);
        } else if (event.data.type === 'bichi-render-success') {
          setRenderingError(null);
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Safe sandboxed boilerplate with Tailwind CDN inside srcDoc
  const boilerplate = `
    <!DOCTYPE html>
    <html lang="it">
      <head>
        <meta charset="UTF-8">
        <script src="https://cdn.tailwindcss.com?plugins=aspect-ratio"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                animation: {
                  'spin-slow': 'spin 12s linear infinite',
                  'wiggle': 'wiggle 1s ease-in-out infinite',
                },
                keyframes: {
                  wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                  }
                }
              }
            }
          };

          // Capture unhandled errors inside the sandboxed iframe and report back to parent
          window.addEventListener('error', (event) => {
            window.parent.postMessage({ type: 'bichi-render-error', message: event.message }, '*');
          });

          // Report successful mount
          document.addEventListener('DOMContentLoaded', () => {
            window.parent.postMessage({ type: 'bichi-render-success' }, '*');
          });
        </script>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: transparent !important;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          /* Webkit scrollbar stylings inside sandbox */
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div id="wrapper" style="display:contents;">${html}</div>
      </body>
    </html>
  `;

  return (
    <div className="flex flex-col h-full bg-white border-4 border-black rounded-none shadow-[6px_6px_0px_#000000] overflow-hidden" id="live-preview-container">
      {/* Control / Info Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#F4F4F1] border-b-4 border-black">
        <div className="flex items-center space-x-2">
          <span className="flex h-3 w-3 rounded-none border border-black bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-black text-black tracking-wider uppercase">Live Render Stage</span>
        </div>
        
        {/* Dimensions info */}
        <div className="flex items-center space-x-4 text-[10px] text-black/60 font-mono font-black uppercase">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-black" />
            Tailwind CDN Active
          </span>
          <span className="border-l-2 border-black pl-4">scale: {Math.round(scale * 100)}%</span>
        </div>
      </div>

      {/* Render Stage */}
      <div className="flex-1 relative overflow-auto p-8 flex items-center justify-center bg-[#F4F4F1]">
        <div 
          className={`relative w-full max-w-lg h-96 transition-all duration-300 ${getBgClass()}`}
          style={{ transform: `scale(${scale})` }}
        >
          {/* Main Visual Frame */}
          <iframe
            key={iframeKey}
            id="rendering-sandbox-iframe"
            title="Bicho Preview Sandbox"
            className="w-full h-full border-none pointer-events-auto"
            sandbox="allow-scripts"
            srcDoc={boilerplate}
          />

          {/* Interactive scale/background helper marker */}
          <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 border-2 border-black bg-black text-[9px] font-mono text-white/90 shadow select-none uppercase font-black tracking-wider">
            Canvas: {background}
          </div>
        </div>

        {/* Informative Overlay if HTML is empty */}
        {!html.trim() && (
          <div className="absolute inset-0 bg-white shadow-inner flex flex-col items-center justify-center p-6 text-center z-10 border-4 border-black">
            <p className="text-black font-black uppercase tracking-wide text-xs max-w-xs leading-relaxed">
              Il codice editor è vuoto. Scrivi un tag HTML o seleziona un esempio per iniziare!
            </p>
          </div>
        )}

        {/* Error notification */}
        {renderingError && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-100 border-4 border-black rounded-none p-3.5 flex items-start gap-2.5 text-black font-bold animate-bounce shadow-[3px_3px_0px_#000000]">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <div className="text-xs font-mono">
              <span className="font-black uppercase block mb-0.5">Errore di Sintassi:</span> {renderingError}
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Interaction Overlay/Hint */}
      <div className="px-4 py-3 bg-white border-t-4 border-black text-[10px] font-black uppercase text-black select-none flex items-center justify-between">
        <div className="flex items-center gap-1.5 leading-none">
          <Eye className="w-4 h-4 text-black shrink-0" />
          <span>Supporta interazioni hover e movimenti animati.</span>
        </div>
        <button 
          onClick={() => {
            // Safe clean refresh of the entire sandboxed frame
            setIframeKey(k => k + 1);
          }}
          className="text-[10px] font-black uppercase tracking-wider text-black bg-[#E0FF00] border-2 border-black hover:bg-black hover:text-white px-2.5 py-1 transition shadow-[1.5px_1.5px_0px_#000000]"
        >
          Reset View
        </button>
      </div>
    </div>
  );
}
