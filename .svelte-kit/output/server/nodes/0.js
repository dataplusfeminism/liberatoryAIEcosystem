import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CqGQmskX.js","_app/immutable/chunks/BxnEYVgG.js","_app/immutable/chunks/ozmvPLTn.js","_app/immutable/chunks/CVWbLrV6.js","_app/immutable/chunks/CVfSQObj.js","_app/immutable/chunks/BCXclPKh.js","_app/immutable/chunks/CxHVo3CS.js","_app/immutable/chunks/BN2ErSJW.js"];
export const stylesheets = ["_app/immutable/assets/0.D6JEYVO5.css"];
export const fonts = [];
