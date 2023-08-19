import { type Plugin } from "postcss";
declare const plugin: {
    (opts?: {}): Plugin;
    postcss: boolean;
};
export default plugin;
