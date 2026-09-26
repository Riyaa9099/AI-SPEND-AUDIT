export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md py-8 px-4 text-center text-xs text-zinc-500 mt-16">
      <div className="max-w-4xl mx-auto space-y-2">
        <p className="text-zinc-400 font-medium">
          AI Spend Audit — Track, optimize, and save on AI subscriptions
        </p>
        <p className="text-zinc-500 text-[11px] pt-1">
          Data is saved locally in your browser (LocalStorage). No login required.
        </p>
      </div>
    </footer>
  );
}
