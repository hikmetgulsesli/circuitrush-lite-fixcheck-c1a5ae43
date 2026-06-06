// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - CircuitRush Lite FixCheck
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Bolt, HeartPulse, RotateCcw, Settings } from "lucide-react";


export type GameSettingsCircuitrushLiteFixcheckActionId = "monitor-heart-1" | "bolt-2" | "settings-3" | "reset-preferences-4" | "return-to-game-5" | "save-and-close-6" | "privacy-prot-1" | "sys-regs-2";

export interface GameSettingsCircuitrushLiteFixcheckProps {
  actions?: Partial<Record<GameSettingsCircuitrushLiteFixcheckActionId, () => void>>;

}

export function GameSettingsCircuitrushLiteFixcheck({ actions }: GameSettingsCircuitrushLiteFixcheckProps) {
  return (
    <>
      {/* Blurred Gameplay Background Canvas */}
      <div className="fixed inset-0 z-0 bg-cover bg-center opacity-40 blur-sm" data-alt="A high-speed, futuristic arcade racing game environment captured in mid-action. Neon cyan and electric yellow energy trails streak across a dark, geometric grid landscape. The scene is illuminated by harsh, directional light-mode lighting that creates stark shadows, contrasting deeply with the vibrant neon accents. The visual style is intensely cyber-industrial, emphasizing speed, technological complexity, and raw mechanical power." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYqWU2bBZZ7NKFOwGFbIgA79D7_9sNeS0g6R_XXStPuxmhlqfgepFqI4Thd0QgVH0ryzLMFtgk3OmrqNGEQRkYicu2XNt7j6WrPNFjeBAS_KZS050g6vAvs2fcP7bAtvg2TZKeTfzjpqrcUiCnE37jPtoymbkG73agJJs3lNqhJs4E8q1u-wIPxMOBg8QYJcNPuPgs5ZXIi8usbY_Gl0Kok9ObZM4dyP4L1fOtdxDpV3GDoGT2lJK8R5nw0JXyijwAdi-av4ducw0')"}}>
      </div>
      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 bg-grid-pattern"></div>
      {/* Scanlines */}
      <div className="fixed inset-0 z-0 scanlines opacity-50"></div>
      {/* Heavy Tint to ensure readability */}
      <div className="fixed inset-0 z-0 bg-background/80"></div>
      {/* TopAppBar (From JSON) */}
      <header className="fixed top-0 w-full h-16 bg-surface-container-low dark:bg-surface-container-low border-b border-outline-variant flex justify-between items-center px-margin-desktop w-full z-50">
      <div className="font-display-lg text-display-lg tracking-tighter text-primary-fixed-dim uppercase">
                  CIRCUIT_RUSH
              </div>
      <div className="flex items-center gap-6">
      <button className="text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors p-2 rounded-none flex items-center justify-center" type="button" aria-label="Monitor Heart" data-action-id="monitor-heart-1" onClick={actions?.["monitor-heart-1"]}>
      <HeartPulse aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors p-2 rounded-none flex items-center justify-center" type="button" aria-label="Bolt" data-action-id="bolt-2" onClick={actions?.["bolt-2"]}>
      <Bolt aria-hidden={true} focusable="false" />
      </button>
      {/* Active State Navigation */}
      <button className="text-primary hover:bg-primary/10 transition-colors p-2 rounded-none flex items-center justify-center ring-1 ring-primary shadow-[0_0_10px_rgba(219,252,255,0.4)]" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings data-weight="fill" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Area (Overlay Canvas) */}
      <main className="flex-1 flex items-center justify-center pt-24 pb-16 z-10 relative px-margin-mobile md:px-margin-desktop w-full h-full overflow-y-auto">
      {/* Settings Panel */}
      <div className="w-full max-w-[640px] bg-surface-container/80 backdrop-blur-xl border border-outline-variant shadow-[0_0_20px_rgba(0,219,233,0.05)] relative flex flex-col">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary-fixed-dim"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary-fixed-dim"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary-fixed-dim"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary-fixed-dim"></div>
      {/* Header */}
      <div className="px-8 py-6 border-b border-outline-variant bg-surface-container-high/50 flex justify-between items-center">
      <h1 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
      <span className="text-primary-fixed-dim mr-2">//</span>SYS_CONFIG
                      </h1>
      <div className="font-code-sm text-code-sm text-outline px-2 py-1 border border-outline-variant bg-surface-container-lowest">
                          NODE: LOCAL
                      </div>
      </div>
      {/* Body */}
      <div className="p-8 flex flex-col gap-10">
      {/* Performance Section */}
      <section className="flex flex-col gap-4">
      <h2 className="font-label-caps text-label-caps text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-2 uppercase tracking-widest">
                              Performance Params
                          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Difficulty */}
      <div className="flex flex-col gap-2">
      <label className="font-code-sm text-code-sm text-on-surface-variant uppercase">Difficulty Rating</label>
      <div className="flex border border-outline-variant p-1 bg-surface-container-lowest w-full">
      <input className="cyber-radio" id="diff-casual" name="difficulty" type="radio" />
      <label className="cyber-radio-label font-label-caps text-label-caps uppercase" htmlFor="diff-casual">Casual</label>
      <input defaultChecked={true} className="cyber-radio" id="diff-standard" name="difficulty" type="radio" />
      <label className="cyber-radio-label font-label-caps text-label-caps uppercase border-l border-r border-outline-variant" htmlFor="diff-standard">Standard</label>
      <input className="cyber-radio" id="diff-overload" name="difficulty" type="radio" />
      <label className="cyber-radio-label font-label-caps text-label-caps uppercase" htmlFor="diff-overload">Overload</label>
      </div>
      </div>
      {/* Game Speed */}
      <div className="flex flex-col gap-2">
      <label className="font-code-sm text-code-sm text-on-surface-variant uppercase">Cycle Rate (Speed)</label>
      <div className="flex border border-outline-variant p-1 bg-surface-container-lowest w-full">
      <input defaultChecked={true} className="cyber-radio" id="speed-1" name="speed" type="radio" />
      <label className="cyber-radio-label font-label-caps text-label-caps uppercase" htmlFor="speed-1">1.0x</label>
      <input className="cyber-radio" id="speed-15" name="speed" type="radio" />
      <label className="cyber-radio-label font-label-caps text-label-caps uppercase border-l border-r border-outline-variant" htmlFor="speed-15">1.5x</label>
      <input className="cyber-radio" id="speed-2" name="speed" type="radio" />
      <label className="cyber-radio-label font-label-caps text-label-caps uppercase" htmlFor="speed-2">2.0x</label>
      </div>
      </div>
      </div>
      </section>
      <hr className="border-outline-variant opacity-50" />
      {/* Audio Section */}
      <section className="flex flex-col gap-4">
      <h2 className="font-label-caps text-label-caps text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-2 uppercase tracking-widest">
                              Audio Output
                          </h2>
      <div className="flex flex-col gap-4 bg-surface-container-lowest p-4 border border-outline-variant">
      <div className="flex justify-between items-center">
      <div className="flex flex-col">
      <span className="font-code-sm text-code-sm text-on-surface uppercase">Master Music</span>
      <span className="font-code-sm text-code-sm text-outline text-[10px]">BGM Synth Tracks</span>
      </div>
      <input aria-label="Toggle Music" defaultChecked={true} className="cyber-toggle" type="checkbox" />
      </div>
      <div className="h-px bg-outline-variant opacity-30 w-full"></div>
      <div className="flex justify-between items-center">
      <div className="flex flex-col">
      <span className="font-code-sm text-code-sm text-on-surface uppercase">Sound Effects</span>
      <span className="font-code-sm text-code-sm text-outline text-[10px]">UI &amp; Collision Audio</span>
      </div>
      <input aria-label="Toggle Sound Effects" defaultChecked={true} className="cyber-toggle" type="checkbox" />
      </div>
      </div>
      </section>
      <hr className="border-outline-variant opacity-50" />
      {/* Input Help */}
      <section className="flex flex-col gap-4">
      <h2 className="font-label-caps text-label-caps text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-2 uppercase tracking-widest">
                              Input Matrices
                          </h2>
      <div className="grid grid-cols-2 gap-4">
      <div className="bg-surface-container-lowest p-3 border border-outline-variant flex justify-between items-center">
      <span className="font-code-sm text-code-sm text-on-surface-variant">MOVE_UP</span>
      <div className="flex gap-2">
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface">W</span>
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface flex items-center justify-center"><ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-3 border border-outline-variant flex justify-between items-center">
      <span className="font-code-sm text-code-sm text-on-surface-variant">MOVE_DOWN</span>
      <div className="flex gap-2">
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface">S</span>
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface flex items-center justify-center"><ArrowDown className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-3 border border-outline-variant flex justify-between items-center">
      <span className="font-code-sm text-code-sm text-on-surface-variant">MOVE_LEFT</span>
      <div className="flex gap-2">
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface">A</span>
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface flex items-center justify-center"><ArrowLeft className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-3 border border-outline-variant flex justify-between items-center">
      <span className="font-code-sm text-code-sm text-on-surface-variant">MOVE_RIGHT</span>
      <div className="flex gap-2">
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface">D</span>
      <span className="font-label-caps text-label-caps px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface flex items-center justify-center"><ArrowRight className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <div className="px-8 py-6 border-t border-outline-variant bg-surface-container flex flex-col md:flex-row justify-between items-center gap-4">
      <button className="font-label-caps text-label-caps text-error hover:text-error-container hover:underline transition-colors uppercase flex items-center gap-2" type="button" data-action-id="reset-preferences-4" onClick={actions?.["reset-preferences-4"]}>
      <RotateCcw className="text-[16px]" aria-hidden={true} focusable="false" />
                          Reset Preferences
                      </button>
      <div className="flex gap-4 w-full md:w-auto">
      <button className="flex-1 md:flex-none font-label-caps text-label-caps text-primary border border-primary px-6 py-3 uppercase hover:bg-primary/10 transition-colors" type="button" data-action-id="return-to-game-5" onClick={actions?.["return-to-game-5"]}>
                              Return to Game
                          </button>
      <button className="flex-1 md:flex-none font-label-caps text-label-caps bg-primary text-on-primary-fixed border border-primary px-6 py-3 uppercase hover:bg-primary-fixed-dim transition-colors shadow-[0_0_10px_rgba(0,219,233,0.3)]" type="button" data-action-id="save-and-close-6" onClick={actions?.["save-and-close-6"]}>
                              Save &amp; Close
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/* Footer (From JSON) */}
      <footer className="fixed bottom-4 right-4 bg-transparent flex gap-gutter items-center z-50">
      <div className="font-label-caps text-label-caps text-outline">
                  © 2024 CIRCUIT_RUSH LITE // CORE_VER_1.0.2
              </div>
      <div className="flex gap-4">
      <a className="font-code-sm text-code-sm text-outline hover:text-primary-fixed cursor-pointer opacity-80 hover:opacity-100 transition-colors uppercase" href="#" data-action-id="privacy-prot-1" onClick={(event) => { event.preventDefault(); actions?.["privacy-prot-1"]?.(); }}>PRIVACY_PROT</a>
      <a className="font-code-sm text-code-sm text-outline hover:text-primary-fixed cursor-pointer opacity-80 hover:opacity-100 transition-colors uppercase" href="#" data-action-id="sys-regs-2" onClick={(event) => { event.preventDefault(); actions?.["sys-regs-2"]?.(); }}>SYS_REGS</a>
      </div>
      </footer>
    </>
  );
}
