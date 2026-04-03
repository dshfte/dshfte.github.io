// Rollover image swap (Murach-style rollover technique)
// Swaps the image source on hover/focus and restores on mouseout/blur.
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("img[data-hover]");
  imgs.forEach((img) => {
    const hoverSrc = img.getAttribute("data-hover");
    if (!hoverSrc) return;

    // Preload hover image
    const pre = new Image();
    pre.src = hoverSrc;

    const original = img.getAttribute("src");

    const swapIn = () => { img.setAttribute("src", hoverSrc); };
    const swapOut = () => { img.setAttribute("src", original); };

    img.addEventListener("mouseover", swapIn);
    img.addEventListener("focus", swapIn);
    img.addEventListener("mouseout", swapOut);
    img.addEventListener("blur", swapOut);

    // keyboard accessibility
    img.setAttribute("tabindex", "0");
  });

  // Attempt to autoplay audio (may be blocked by browser policy)
  const bg = document.getElementById("bg_audio");
  if (bg) {
    const tryPlay = () => {
      bg.play().catch(() => {
        // Autoplay may be blocked until user interacts; try once on first click/tap.
        const once = () => {
          bg.play().catch(() => {});
          window.removeEventListener("click", once);
          window.removeEventListener("touchstart", once);
        };
        window.addEventListener("click", once);
        window.addEventListener("touchstart", once);
      });
    };
    tryPlay();
  }
});
