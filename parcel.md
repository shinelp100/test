#### 开发环境命令
```html
cd到相应目录下运行：

    parcel parcel.html
```

#### 生产环境命令
```text
build 到对应的生产环境的目录
--out-file 修改发布后入口文件名
--public-url 设置公共的目录
-d 发不到指定的目录
--open 在浏览器中打开


parcel build parcel.html --out-file index.html --public-url ./ -d dist/parcel
```