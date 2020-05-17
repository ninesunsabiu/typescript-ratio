# typescript-ratio
统计 某一个文件夹下 /\.tsx?$/ 在 /\.[jt]sx?$/ 下的占比  

现在在项目中正在启用 Typescript 重构 把原先的 js 和 jsx 使用 ts 重写  
为了查看使用 Typescript 在项目中的占比 有了这个小脚本  
而且 赶上 deno 1.0 的出现，试试用它来写是个什么感觉

## 用法
1. 安装 deno [详见官网安装教程](https://deno.land/#installation)
2. $ deno run --allow-read tsRatio.ts ${DIR_PATH}  
*${DIR_PATH} 更换为你需要统计的目录 一般为项目中 src 目录*
3. 你可以看见
```bash
$ deno run --allow-read tsRatio.ts ./src
Typescript rate is 41%, Javascript count is 1540, Typescript count is 1090
```