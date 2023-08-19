import { readFileSync, writeFileSync } from "fs";
import { AtRule, type atRule } from "postcss";
import repository from "./repository";
import { resolve } from "path";
const search = async (name: string): Promise<any> => {
  const path = resolve(process.cwd(), "./.starsquares/" + name + ".json");
  try {
    const file = readFileSync(path, "utf-8");
    return { err: null, data: JSON.parse(file) };
  } catch (err) {
    return { err: err, data: null };
  }
};
export default search;
