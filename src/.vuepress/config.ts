import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  lang: "zh-CN",
  title: "白厄QBOT文档",
  description: "白厄QQBOT文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
