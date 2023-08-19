import { AtRule } from "postcss";
import search from "./search";

export default async (atRule: AtRule): Promise<PGCss> => {
  const css: PGCss = {};
  const params = atRule.params.split(" ");

  try {
    await params.forEach(async (name) => {
      const res = await search(name);
      if (res.err) return console.log(name + " not found");
      const data: [string, string][] = Object.entries(res.data.css);
      await data.forEach((decls) => {
        css[decls[0]] = decls[1];
      });
    });
    await atRule.walkDecls((decl) => {
      const prop = decl.prop;
      const value = decl.value;
      css[prop] = value;
    });
  } catch (err) {
    console.log(err);
  } finally {
    return css;
  }
};
