---
title: Markdown基本语法
date: 2023-05-17
isOriginal: true
category:
  - markdown
tag:
  - 学习笔记
---
::: info
整理了一些经常使用的基础Markdown语法。
:::

## Markdown标题语法

要创建标题，请在单词或短语前面添加井号（`#`）。`#`的数量代表了标题的级别。

| Markdown语法 | HTML | 预览效果 |
| --- | --- | --- |
| `# Heading level 1` | `<h1>Heading level 1</h1>` | <h1>Heading level 1</h1> |
| `# Heading level 2` | `<h2>Heading level 2</h2>` | <h2>Heading level 2</h2> |
| `# Heading level 3` | `<h3>Heading level 3</h3>` | <h3>Heading level 3</h3> |
| `# Heading level 4` | `<h4>Heading level 4</h4>` | <h4>Heading level 4</h4> |
| `# Heading level 5` | `<h5>Heading level 5</h5>` | <h5>Heading level 5</h5> |
| `# Heading level 6` | `<h6>Heading level 6</h6>` | <h6>Heading level 6</h6> |

::: warning
不同的 Markdown 应用程序处理`#`和标题之间的空格方式并不一致。为了兼容考虑，请用一个空格在`#`和标题之间进行分隔。
:::

## Markdown段落语法

要创建段落，请使用空白行将一行或多行文本进行分隔。

| Markdown语法 | HTML | 预览效果 |
| --- | --- | --- |
|`I really like using Markdown.`<br><br>`I think I'll use it to format all of my documents from now on.`|`<p>I really like using Markdown.</p>`<br><br>`<p>I think I'll use it to format all of my documents from now on.</p>`|<p>I really like using Markdown.</p><p>I think I'll use it to format all of my documents from now on.</p>|

## Markdown换行语法

在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(`<br>`)。

:::warning
几乎每个 Markdown 应用程序都支持两个或多个空格进行换行，称为`结尾空格（trailing whitespace)`的方式，但这是有争议的，因为很难在编辑器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其它方式来换行。幸运的是，几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的`<br>`标签。

为了兼容性，请在行尾添加“结尾空格”或 HTML 的`<br>`标签来实现换行。
:::

| Markdown语法 | HTML | 预览效果 |
| --- | --- | --- |
|`This is the first line.`<br>`And this is the second line.`|`<p>This is the first line.</p><br>`<br>`<p>And this is the second line.</p>`|This is the first line.<br>And this is the second line.|

## Markdown强调语法

### 粗体

要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。

| Markdown语法 | HTML | 预览效果 |
| --- | --- | --- |
|`I just love **bold text**.`|`I just love <strong>bold text</strong>.`|I just love **bold text**.|
|`Love**is**bold.`|`Love<strong>is</strong>bold`|Love**is**bold.|

### 斜体

要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。

| Markdown语法 | HTML | 预览效果 |
| --- | --- | --- |
|`Italicized text is the *cat's meow*.`|`Italicized text is the <em>cat's meow</em>.`|Italicized text is the *cat's meow*.|
|`A*cat*meow`|`A<em>cat</em>meow`|A*cat*meow|

## Markdown引用语法

要创建块引用，请在段落前添加一个`>`符号。

```text:no-line-numbers
> Dorothy followed her through many of the beautiful rooms in her castle.
```


## Markdown列表语法

## Markdown代码语法

## Markdown分割线语法

## Markdown链接语法

## Markdown图片语法

## Markdown转义字符语法

## Markdown内嵌HTML标签
