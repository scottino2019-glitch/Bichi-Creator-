import { useRef, useEffect, useState } from 'react';
import { Copy, ClipboardCheck, Sparkles, RefreshCw, Scissors, Braces, Wand2 } from 'lucide-react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
  selectedExampleName: string;
}

export default function CodeEditor({ value, onChange, onReset, selectedExampleName }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [lineCount, setLineCount] = useState(1);

  // Sync scroll of line numbers gutter with textarea
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Keep track of line numbers count
  useEffect(() => {
    const lines = value.split('\n').length;
    setLineCount(lines || 1);
  }, [value]);

  const copyCode = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Insert a custom helper tag at cursor position
  const insertCodeAtCursor = (codeSnippet: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const currentVal = textarea.value;

    const updatedVal =
      currentVal.substring(0, startPos) +
      codeSnippet +
      currentVal.substring(endPos, currentVal.length);

    onChange(updatedVal);

    // Reposition cursor after snippet insertion
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = startPos + codeSnippet.length;
      textarea.selectionEnd = startPos + codeSnippet.length;
    }, 50);
  };

  // Simple HTML beautifier script to indent correctly
  const formatCode = () => {
    let formatted = '';
    let pad = 0;
    const tokens = value
      .replace(/>\s*</g, '><') // remove empty spaces between tags
      .replace(/</g, '\n<')
      .split('\n');

    tokens.forEach((token) => {
      if (!token.trim()) return;

      if (token.match(/^\/\s*/)) {
        // Comment
      } else if (token.match(/^<\/\w+/)) {
        // Closing tag
        pad -= 2;
      }

      formatted += ' '.repeat(Math.max(0, pad)) + token + '\n';

      if (token.match(/^<\w[^>]*[^\/]>$/) && !token.match(/^<(input|br|img|hr|meta|link)/)) {
        // Opening tag (excluding self-closing)
        pad += 2;
      }
    });

    onChange(formatted.trim());
  };

  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 rounded-none border-4 border-black shadow-[6px_6px_0px_#000000] overflow-hidden" id="bichi-editor-pane">
      {/* Editor top utilities */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-4 border-black bg-black px-4 py-3.5 gap-2">
        <div className="flex items-center space-x-2">
          <Braces className="w-4 h-4 text-[#E0FF00]" />
          <span className="text-xs font-black uppercase tracking-wider text-white">
            Editor Sorgente <span className="text-[#E0FF00] font-mono">[{selectedExampleName}]</span>
          </span>
        </div>

        {/* Dynamic Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={formatCode}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider bg-white hover:bg-[#E0FF00] text-black border-2 border-black rounded-none shadow-[2px_2px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_#000000] transition"
            title="Auto-indenta e formatta l'HTML"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>Formatta</span>
          </button>

          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider bg-white hover:bg-[#E0FF00] text-black border-2 border-black rounded-none shadow-[2px_2px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_#000000] transition"
            title="Ripristina all'originale"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Iniziale</span>
          </button>

          <button
            onClick={copyCode}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider border-2 border-black rounded-none transition ${copied ? 'bg-emerald-400 text-black shadow-[2px_2px_0px_#000000]' : 'bg-[#E0FF00] text-black hover:bg-white shadow-[2px_2px_0px_#000000]'}`}
          >
            {copied ? (
              <>
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copia codice</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Helper quick injection drawer */}
      <div className="px-3.5 py-2.5 bg-[#F4F4F1] border-b-4 border-black flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-black text-black uppercase tracking-wider mr-1 select-none flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-black" /> Iniezione Rapida:
        </span>
        <button
          onClick={() => insertCodeAtCursor('<div class="w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse filter blur-[1px]"></div>')}
          className="text-[10px] font-bold bg-white border-2 border-black hover:bg-[#E0FF00] text-black px-2.5 py-1 rounded-none shadow-[1.5px_1.5px_0px_#000000] transition"
        >
          🌸 Gote Rosse
        </button>
        <button
          onClick={() => insertCodeAtCursor('<div class="w-24 h-1 bg-black/10 rounded-full filter blur-[1px] transform scale-x-50"></div>')}
          className="text-[10px] font-bold bg-white border-2 border-black hover:bg-[#E0FF00] text-black px-2.5 py-1 rounded-none shadow-[1.5px_1.5px_0px_#000000] transition"
        >
          🕳️ Ombra Bassa
        </button>
        <button
          onClick={() => insertCodeAtCursor('<div class="w-1.5 h-12 bg-slate-950 rounded-full rotate-[-15deg]"></div>')}
          className="text-[10px] font-bold bg-white border-2 border-black hover:bg-[#E0FF00] text-black px-2.5 py-1 rounded-none shadow-[1.5px_1.5px_0px_#000000] transition"
        >
          📍 Antenna
        </button>
        <button
          onClick={() => insertCodeAtCursor('<div class="w-12 h-6 border-b-4 border-black rounded-b-full"></div>')}
          className="text-[10px] font-bold bg-white border-2 border-black hover:bg-[#E0FF00] text-black px-2.5 py-1 rounded-none shadow-[1.5px_1.5px_0px_#000000] transition"
        >
          👄 Bocca Fiera
        </button>
        <button
          onClick={() => insertCodeAtCursor('animate-bounce duration-700')}
          className="text-[10px] font-bold bg-white border-2 border-black hover:bg-[#E0FF00] text-black px-2.5 py-1 rounded-none shadow-[1.5px_1.5px_0px_#000000] transition font-mono"
        >
          🚀 Bounce Fast
        </button>
      </div>

      {/* Editor Body */}
      <div className="flex-1 flex overflow-hidden min-h-[350px]">
        {/* Line Numbers Gutter */}
        <div
          ref={lineNumbersRef}
          className="w-11 bg-black select-none text-right pr-2 py-4 font-mono text-xs text-[#E0FF00]/40 overflow-hidden text-clip border-r-2 border-black"
        >
          {lineNumbers.map((num) => (
            <div key={num} className="h-6 leading-6">
              {num}
            </div>
          ))}
        </div>

        {/* Text Input Block */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={handleScroll}
          className="flex-1 bg-slate-950 text-white p-4 font-mono text-xs leading-6 resize-none focus:outline-none overflow-y-auto whitespace-pre selection:bg-[#E0FF00] selection:text-black"
          placeholder="Scrivi il tuo codice HTML qui usando Tailwind..."
          spellCheck={false}
          id="bichi-textarea"
        />
      </div>

      {/* Interactive Footer metrics details */}
      <div className="px-4 py-2 bg-black border-t-2 border-black text-[#E0FF00] font-mono text-[9px] font-black uppercase tracking-wider flex justify-between select-none">
        <span>Caratteri: {value.length}</span>
        <span>Righe: {lineCount}</span>
      </div>
    </div>
  );
}
