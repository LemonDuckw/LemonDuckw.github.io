import { navbar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "主页", icon: "home", link: "/" },
  {
    text: "学习笔记",
    icon: "edit",
    children: [
      {
        text: "Markdown语法",
        icon: "markdown",
        prefix: "/markdown",
        children: [{ text: "Markdown语法", icon: "markdown", link: "", activeMatch: "^/markdown/$" }],
      },
      {
        text: "代码练习",
        icon: "code",
        prefix: "/code",
        children: [{ text: "代码练习", icon: "code", link: "", activeMatch: "^/code/$" }],
      },
      {
        text: "开发笔记",
        icon: "note",
        prefix: "/exploitation/",
        children: [
          //{ text: "开发笔记", icon: "code", link: "", activeMatch: "^/code/$" },
          {
            text: "设计模式",
            icon: "css",
            link: "designer/",
            activeMatch: "^/exploitation/designer/$",
          },
          {
            text: "ES6",
            icon: "es6",
            link: "ES6/",
            activeMatch: "^/exploitation/ES6/$",
          },
          {
            text: "JS",
            icon: "javascript",
            link: "JS/",
            activeMatch: "^/exploitation/JS/$",
          },
          {
            text: "CSS",
            icon: "css",
            link: "CSS/",
            activeMatch: "^/exploitation/CSS/$",
          },
          {
            text: "面试",
            icon: "article",
            link: "interview/",
            activeMatch: "^/exploitation/interview/$",
          },
        ],
      },
      {
        text: "其他",
        icon: "others",
        prefix: "/others/",
        children: [
          { text: "游戏开发",
            icon: "play",
            link: "game/",
            activeMatch: "^/others/game/$"
          },
          {
            text: "绘画",
            icon: "palette",
            link: "draw/",
            activeMatch: "^/others/game/$",
          },
          {
            text: "Live2D",
            icon: "state",
            link: "live2d/",
            activeMatch: "^/others/live2d/$",
          },
        ],
      },
    ],
  },
  {
    text: "日记",
    icon: "note",
    link: "/diary/",
    activeMatch: "^/diary/",
  },
  {
    text: "随笔",
    icon: "flower",
    prefix: "/random/",
    children:[
      {
        text: "生活",
        icon: "strong",
        link: "life/",
        activeMatch: "^/random/life/$",
      },
      {
        text: "突发奇想",
        icon: "style",
        link: "think/",
        activeMatch: "^/random/think/$",
      },
    ],
  },

]);
