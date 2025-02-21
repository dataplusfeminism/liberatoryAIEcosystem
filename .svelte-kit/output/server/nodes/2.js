

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1BQzhZcA.js","_app/immutable/chunks/DICiqEks.js","_app/immutable/chunks/BQuvKRSg.js","_app/immutable/chunks/CkUQX3MZ.js"];
export const stylesheets = ["_app/immutable/assets/2.CWJLWhkx.css"];
export const fonts = [];
