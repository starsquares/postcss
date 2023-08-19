import postcss from "postcss";

import plugin from "../src/index";
import { expect, it } from "@jest/globals";
async function run(input: any, output: any, opts = {}) {
  let result = await postcss([await plugin(opts)]).process(input, {
    from: undefined,
  } as any);
  await expect(result.css).toEqual(output);
  await expect(result.warnings()).toHaveLength(0);
}
//test 1
it("plugin", async () => {
  await run(
    `a{ 
      @apply glass rounded {
        padding: 12px;
      }
    }`,
    `a{ 
      background-color: rgba(255,255,255,0.5); 
      border-radius: 5px; 
      box-shadow: 0 0 10px rgba(0,0,0,0.5); 
      padding: 12px
    }`,
    {}
  );
});
