import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CyWTEkuW.js","_app/immutable/chunks/DICiqEks.js","_app/immutable/chunks/BQuvKRSg.js","_app/immutable/chunks/CkUQX3MZ.js","_app/immutable/chunks/BSr6WNAr.js","_app/immutable/chunks/Of4x40wU.js","_app/immutable/chunks/CHWo3uog.js","_app/immutable/chunks/B3NkkuVD.js","_app/immutable/chunks/qmo8-0ju.js"];
export const stylesheets = ["_app/immutable/assets/0.D6JEYVO5.css"];
export const fonts = [];
