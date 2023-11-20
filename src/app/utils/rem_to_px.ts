export function convertRemToPixels(rem=1) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
