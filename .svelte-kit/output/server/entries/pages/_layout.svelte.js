import { e as ensure_array_like, c as pop, p as push, d as slot, f as bind_props } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
function Nav($$payload) {
  let pages = [
    { name: "About", url: "about" },
    { name: "Workshops", url: "workshops" },
    { name: "Template", url: "template" },
    { name: "Author", url: "author" },
    { name: "Case study", url: "casestudy" }
  ];
  const each_array = ensure_array_like(pages);
  $$payload.out += `<nav class="flex items-center svelte-11tyw0t"><div class="flex">Liberatory AI Ecosystem <a${attr("href", "/.")}><img src="/illustrations/logo.png" class="me-3 h-6 sm:h-9 logo" alt="Project Logo"></a></div> <div><ul class="nav-links svelte-11tyw0t"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<li><a${attr("href", "/" + link.url)} class="svelte-11tyw0t">${escape_html(link.name)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></nav>`;
}
function Footer($$payload, $$props) {
  push();
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer class="svelte-1gvokb9"><p>© ${escape_html(year)} My Website. All Rights Reserved.</p></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  let segment = $$props["segment"];
  Nav($$payload);
  $$payload.out += `<!----> <div><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  bind_props($$props, { segment });
}
export {
  _layout as default
};
