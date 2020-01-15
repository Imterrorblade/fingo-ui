## spacing 边距设置

### 基本用法
.m{diraction}-{num} .p{diraction}-{num}, m 代表margin， p代表pading， diraction为方向设置，取之为：a, x, y, t, b, l, 对应不同的方向。
num 取之范围， 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, 12, auto ,基础值为4px，在此基础上乘以对应的数字。

#### 方向对应关系
```js
a: top, bottom, left, right;
x: left, right,
y: top, bottom,
t: top,
b: bottom,
l: left,
r: right

```

#### 数值对应关系

```js
0: 0,
1: 4px,
2: 8px,
3: 12px,
4: 16px,
5: 20px,
6: 24px,
7: 28px,
8: 32px
9: 36px,
10: 40px,
11: 44px,
12: 48px,
n1: -4px,
n2: -8px,
n3: -12px,
n4: -16px,
n5: -20px,
n6: -24px,
n7: -28px,
n8: -32px
n9: -36px,
n10: -40px,
n11: -44px,
nj12: -48px,
auto: auto,
```

#### margin 示例演示

:::demo
```html
<div class="bg--muted pa-4">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-8">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-12">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-10 pt-0">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-10 pl-0">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-10 pr-0">
  <div class="bg--primary" style="height:100px"></div>
</div>
```
:::

#### padding 示例演示

:::demo
```html
<div class="bg--muted pa-4">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-8">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-12">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-10 pt-0">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-10 pl-0">
  <div class="bg--primary" style="height:100px"></div>
</div>
<div class="bg--muted mt-10 pa-10 pr-0">
  <div class="bg--primary" style="height:100px"></div>
</div>
```
:::
