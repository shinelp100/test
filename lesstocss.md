### 安装node、npm
[下载地址](http://nodejs.cn/download/)
```text
直接下载对应系统node直接安装
node -v 

npm -v 

查看安装的版本信息说明安装成功
```

### 安装 less 及其插件

```text
//全局安装less、less压缩插件
npm install less less-plugin-clean -g

```

### 执行命令
```text
//重要提示：编译的目录是到对应的文件目录下 如：文件在d:work/demo/index.less  需要cd到d:work/demo下执行命令
lessc index.less index.min.less --clean-css="advanced"
```
