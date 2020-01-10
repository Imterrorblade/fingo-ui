## flex 布局

::: tip
示例中用到的ma-1，pa-10，bg--primary等辅助类在其他目录下查询。
:::

### 基本用法
flex类的简单用法

::: demo 

```html
<template>
<div class="flex">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div>
</template>

```
:::

### flex主轴方向 
.flex-{val},  val可取值为 row, column, row-reverse, column-reverse。

::: demo 
```html
<div class="flex-row">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--warning"></div>
  <div class="ma-1 pa-10 bg--danger"></div>
</div>
<div class="flex-column">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--warning"></div>
  <div class="ma-1 pa-10 bg--danger"></div>
</div>
<div class="flex-row-reverse">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--warning"></div>
  <div class="ma-1 pa-10 bg--danger"></div>
</div>
<div class="flex-column-reverse">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--warning"></div>
  <div class="ma-1 pa-10 bg--danger"></div>
</div>
```
:::

### flex 主轴对齐
.justify-{val}, val可取的值为：start, end, center, around, between, evenly 

::: demo

```html
<div class="bg--muted mb-5 justify-start">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div> 
<div class="bg--muted mb-5 justify-center">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div>
<div class="bg--muted mb-5 justify-end">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div>
<div class="bg--muted mb-5 justify-between">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div>
<div class="bg--muted mb-5 justify-around">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div>
<div class="bg--muted mb-5 justify-evenly">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div>
```
:::

### flex 交叉轴方向
.align-{val}, val可取值为: start, end, center, baseline, stretch

::: demo 
```html
<div class="bg--muted mb-5 align-start" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div> 
<div class="bg--muted mb-5 align-end" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div> 
<div class="bg--muted mb-5 align-center" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div> 
<div class="bg--muted mb-5 align-baseline" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div> 
<div class="bg--muted mb-5 align-stretch" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
</div> 
 
```
:::

### flex align-self
.align-self-{val}, 某个单独item对齐方向，val可取值为: start, end, center, baseline, stretch式

::: demo 
```html
<div class="bg--muted mb-5 align-start" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary align-self-start"></div>
</div> 
<div class="bg--muted mb-5 align-start" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary align-self-end"></div>
</div> 
<div class="bg--muted mb-5 align-start" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary align-self-center"></div>
</div> 
<div class="bg--muted mb-5 align-start" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary align-self-baseline"></div>
</div> 
<div class="bg--muted mb-5 align-start" style="height: 150px;">
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary"></div>
  <div class="ma-1 pa-10 bg--primary align-self-stretch"></div>
</div> 
 
```
:::