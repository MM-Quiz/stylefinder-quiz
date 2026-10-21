/**
 * Mary Michele's word choices, enforced on the generated text.
 *
 * The prompt asks for these too, but the model can still slip, and a
 * Blueprint goes straight to the client. Replacing them here guarantees it.
 */

const REPLACEMENTS: ReadonlyArray<[RegExp, string]> = [
  [/mother tongue/gi, 'native language'],
  [/dusk and metal/gi, 'rich hues and metallics'],
];

/** Match the casing of the phrase being replaced: lower, Capitalized, or Title Case. */
function matchCase(found: string, replacement: string): string {
  // Title Case leaves short words like "and" lowercase, so two capitalized
  // words is enough to call it a title.
  const capitalized = found.split(' ').filter((w) => /^[A-Z]/.test(w)).length;
  if (capitalized > 1) {
    return replacement.replace(/\b([a-z])(\w{3,})/g, (_, c, rest) => c.toUpperCase() + rest);
  }
  if (/^[A-Z]/.test(found)) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

export function applyHouseStyle(markdown: string): string {
  return REPLACEMENTS.reduce(
    (text, [pattern, replacement]) =>
      text.replace(pattern, (found) => matchCase(found, replacement)),
    markdown,
  );
}
