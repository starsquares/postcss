//module.exports in typescript
import { Declaration, type Plugin } from "postcss";
import search from "./utils/search";
import init from "./utils/init";
import getcss from "./utils/getcss";
const plugin = (opts = {}) => {
  return {
    postcssPlugin: "@starsquares/postcss",
    async Once() {
      await init();
    },
    AtRule: {
      apply: async (atRule) => {
        if (atRule.parent?.type === "root")
          return console.error("apply can't be placed on root");
        try {
          const css = await getcss(atRule);
          const style: Declaration[] = [];
          const decls = await Object.entries(css);
          decls.forEach((decl) => {
            atRule.parent?.nodes
              .find((node) => node.type === "decl" && node.prop === decl[0])
              ?.remove();
            style.push(new Declaration({ prop: decl[0], value: decl[1] }));
          });

          atRule.replaceWith(style);
        } catch (err) {
          console.log(err);
        } finally {
        }
      },
    },
    OnceExit(root) {
      // console.log(root.toString());
    },
  } as Plugin;
};
plugin.postcss = true;
export default plugin;
// export const postcss = true;
