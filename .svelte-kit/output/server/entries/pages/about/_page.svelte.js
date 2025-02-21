import { h as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<h1>About Page</h1> <a${attr("href", `${stringify(base)}/about`)}>About my site</a>`;
}
export {
  _page as default
};
