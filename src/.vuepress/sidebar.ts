import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "功能",
      icon: "laptop-code",
      prefix: "help/",
      link: "help/",
      children: "structure",
    },
    {
      text: "配置",
      icon: "book",
      prefix: "config/",
      children: "structure",
    },
    {
      text: "教程",
      icon: "person-chalkboard",
      prefix: "tutorial/",
      children: "structure",
    },
  ],
});
