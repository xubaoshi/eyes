# 说明

## 编辑器

### vscode

#### 1.代码格式化

wpy-beautify

#### 2.代码高亮

Vetur

setting.json 配置

``` json
"files.associations": {
    "*.vue": "vue",
    "*.wpy": "vue",
    "*.wxml": "html",
    "*.wxss": "css"
},
"emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
}
```

#### 3.vetur 会对 .user 的修饰符标注红色波浪线提示错误

setting.json 配置

``` json
"vetur.validation.template": false,
```

## 注意事项

### 微信小程序在手机上只有打开调试模式的时候才显示界面

服务器的域名没有设置   [参考链接](https://blog.csdn.net/wzlhlhhh/article/details/80512100)

### 获取 openId ，sessionKey , unionId

调用 `wepy.login()` 获取 code , 调用后端借口传递 code 获取

### 小程序中的图片要用绝对路径否则无法显示
