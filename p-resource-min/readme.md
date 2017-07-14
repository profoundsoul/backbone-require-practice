# Min/Uglify Resource(js/css/image)

## 安装node环境

安装node6+及npm相关环境

## 全局安装gulp

```
npm install gulp -g
```

## 安装依赖包

```
npm install
```

## 配置project文件

+ jsroot设置js的根目录，自动扫描该目录下js文件。数据类型：String或Array
+ cssroot设置css根目录，自动扫描该目录下css文件。数据类型：String或Array
+ imageroot设置image根目录，自动扫描该目录下图片文件。数据类型：String或Array
+ imagebackuproot 为image图片备份根目录
+ backupjs设置否备份js文件，会备份生成后缀为.source.js文件
+ backupcss设置是否备份css文件，会备份生成后缀为.source.css文件
+ backupimage设置是否备份图片文件

## task说明

```shell
# 打包js
gulp minjs

# 打包css
gulp mincss

# 打包image
gulp minimage

# 打包js和css
gulp

# 打包js/css/image
gulp all

```