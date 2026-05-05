// Client-side deterrent only. NOT real security — bundle is always public.
// Disables right-click, common devtools shortcuts, and tries to detect devtools.

export function enableSourceProtection() {
  if (typeof window === "undefined") return;
  if (import.meta.env.DEV) return; // keep dev experience usable

  // Block right-click
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  // Block common shortcuts: F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S
  window.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    if (
      e.key === "F12" ||
      (ctrl && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
      (ctrl && (k === "u" || k === "s"))
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Block text selection / drag of images
  document.addEventListener("dragstart", (e) => e.preventDefault());

  // Console warning
  const style = "color:#fff;background:#c0392b;font-size:18px;padding:8px 12px;border-radius:4px;";
  // eslint-disable-next-line no-console
  console.log("%cStop!", style + "font-size:32px;");
  // eslint-disable-next-line no-console
  console.log(
    "%cThis is a browser feature intended for developers. Pasting code here can compromise your account.",
    "color:#c0392b;font-size:14px;",
  );

  // Devtools detection (size-diff heuristic — not reliable, but a deterrent)
  const threshold = 160;
  let warned = false;
  const check = () => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if (widthDiff || heightDiff) {
      if (!warned) {
        warned = true;
        document.body.style.filter = "blur(8px)";
        document.body.style.pointerEvents = "none";
      }
    } else if (warned) {
      warned = false;
      document.body.style.filter = "";
      document.body.style.pointerEvents = "";
    }
  };
  setInterval(check, 1000);
}
