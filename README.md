# typescript-ratio
统计 某一个文件夹下 /\.tsx?$/ 在 /\.[jt]sx?$/ 下的占比  

现在在项目中正在启用 Typescript 重构 把原先的 js 和 jsx 使用 ts 重写  
为了查看使用 Typescript 在项目中的占比 有了这个小脚本  
而且 赶上 deno 1.0 的出现，试试用它来写是个什么感觉

## 用法
1. 安装 deno [详见官网安装教程](https://deno.land/#installation)
2. 运行脚本
```bash
deno run \
--allow-net \
--allow-read \
https://raw.githubusercontent.com/ninesunsabiu/typescript-ratio/master/tsRatio.ts \
${DIR_PATH}
```
P.S. *如果 raw.githubusercontent.com 无法访问 请善用搜索引擎解决问题*
