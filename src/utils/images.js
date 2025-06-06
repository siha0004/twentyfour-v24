// Denne fil er lavet af chatGPT

/**
 * Konverterer en import.meta.glob map til lookup på filnavn.
 */
export function buildImageLookup(glob) {
  return Object.entries(glob).reduce((acc, [path, mod]) => {
    const filename = path.split("/").pop();
    acc[filename] = mod.default;
    return acc;
  }, {});
}

/**
 * Returnerer et billede fra et lookup map baseret på filsti.
 * Fx "/src/assets/images/foo.webp" => lookup["foo.webp"]
 */
export function getImageFromPath(path, images) {
  if (!path) return undefined;
  const filename = path.split("/").pop();
  return images[filename];
}
