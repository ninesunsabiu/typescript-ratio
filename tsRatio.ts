import { walk, WalkOptions } from "https://deno.land/std@v0.51.0/fs/walk.ts";

const walkOptions: WalkOptions = {
  match: [/\.[jt]sx?$/],
  skip: [
    /node_modules|public|script/,
    /config\/(jest\/|.*\.js)/,
    /webpack\.config/,
  ],
};

async function tsRatio() {
  let tsCount = 0;
  let jsCount = 0;
  try {
    const dirPath = Deno.args[0];
    if (!(await Deno.lstat(dirPath)).isDirectory) {
      throw new Error("need directory path as first arg");
    }
    for await (const entry of walk(dirPath, walkOptions)) {
      if (entry.path.match(/\.tsx?$/)) {
        tsCount++;
      } else {
        jsCount++;
      }
    }
    (tsCount + jsCount) &&
      console.log(
        "Typescript rate is %o%, Javascript count is %d, Typescript count is %d",
        Number(Number(tsCount / (jsCount + tsCount)).toFixed(2)) * 100,
        jsCount,
        tsCount,
      );
  } catch (error) {
    console.log(error);
  }
}

tsRatio();
