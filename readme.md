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

