import { arraySidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export const others = arraySidebar([
    "",
    {
        text: "游戏开发",
        link: "game/",
        prefix: "game/",
        children: "structure",
    },
    {
        text: "绘画",
        link: "draw/",
        prefix: "draw/",
        children: "structure",
    },
    {
        text: "Live2D",
        link: "live2d/",
        prefix: "live2d/",
        children: "structure",
    },
]);
