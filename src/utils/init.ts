import { readdirSync, mkdir, mkdirSync, readFileSync } from "fs";
import repository from "./repository";
import { resolve } from "path";
import shell from "shelljs";
const init = async () => {
  try {
    const dir = await readFileSync(
      resolve(process.cwd() + ".starsquares/package.json"),
      "utf8"
    );
    if (dir) {
      const version = JSON.parse(dir).version;
      const res = await fetch(
        "https://raw.githubusercontent.com/Khandaker-Sadzzad/postcss-starzad-data/main/package.json"
      );
      const data = await res.json();
      if (version !== data.version) {
        shell.cd(process.cwd());
        shell.rm("-rf", ".starsquares");
        shell.exec(`git clone ${repository()} .starsquares`);
      }
    }
  } catch (err) {
    shell.cd(process.cwd());
    shell.rm("-rf", ".starsquares");
    shell.exec(`git clone ${repository()} .starsquares`);
  }
};
export default init;
