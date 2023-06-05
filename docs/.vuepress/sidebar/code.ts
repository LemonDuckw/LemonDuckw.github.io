import { arraySidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export const code = arraySidebar([
  "",
  {
    text: "设计模式",
    link: "designer/",
    prefix: "designer/",
    children: "structure",
  },
  {
    text: "CSS",
    link: "CSS/",
    prefix: "CSS/",
    children: "structure",
  },
  {
    text: "ES6",
    link: "ES6/",
    prefix: "ES6/",
    children: "structure",
  },
  {
    text: "JS",
    link: "JS/",
    prefix: "JS/",
    children: "structure",
  },
  {
    text: "面试",
    link: "interview/",
    prefix: "interview/",
    children: "structure",
  },
]);
