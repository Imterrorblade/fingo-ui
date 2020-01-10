## 样式引入
fingo-ui中有非常好用并且已于维护的常用样式，避免您在开发过程中频繁编写繁琐的css，你只需简单的引入就可以了。

### 一般引入
fingo-ui中有打包好的css文件，如果您不需要更改，直接引入就行。

```javascript
import 'fingo-ui-lib/lib/styles/index.css'
```

### 配置默认样式
fingo-ui还支持你配置你的样式，以覆盖默认的样式。首先你需要创建一个scss 文件，例如：var.scss。然后根据您个人的需要修改其中的默认配置。然后在引入 'fingo-ui-lib/packages/styles/src/index.scss'。

默认配置如下：
```scss
/* 请在变量后面加上 default，以便外部引用时可以替换*/
$statusColors: (
  'primary': '#409eff',
  'success': '#67c23a',
  'warning': '#e6a23c',
  'danger': '#f56c6c',
  'info': '#909399',
) !default;

$textColors: (
  'main': '#303133',
  'secondary': '#606266',
  'muted': '#909399',
  'note': '#c0c4cc'
) !default;

$colors: (
  'blue': '#0083EE',
  'orange': '#FFCC33',
  'green': '#30CC77',
  'red': '#F34C4D',
  'purple': '#6363FF'
) !default;

$fill: (
    'blue': '#0083EE',
    'orange': '#FFCC33',
    'green': '#30CC77',
    'red': '#F34C4D',
    'purple': '#6363FF'
) !default;

$gradient: (
  'black': 'linear-gradient(132deg,rgba(26,32,47,1) 0%,rgba(14,17,26,1) 100%);',
  'green': 'linear-gradient(133deg,rgba(38,191,189,1) 0%,rgba(0,225,181,1) 100%);'
)!default;

$stepSize: (
  'padding': 4px,
  'margin': 4px,
) !default;

$direction: (
  a: (top, right, bottom, left),
  x: (left, right),
  y: (top, bottom),
  t: top,
  b: bottom,
  l: left,
  r: right
)
!default
```

然后引入fingo-ui 中的scss 文件重新编译

```javascript
@import 'fingo-ui-lib/packages/styles/src/index.scss';

```