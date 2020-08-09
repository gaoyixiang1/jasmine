### Step 1  初始化npm
***
`npm init -y`
按照默认值创建Package.json项目管理文件

### Step 2  安装各种npm包
***

安装Karma

`npm install karma --save-dev`

安装Karma-cli(命令行界面)

`npm install karma-cli -g`

安装karma-coverage(生成代码覆盖率)

`npm install karma-coverage`

安装Karma-jasmine(适配jasmine测试框架)

`npm install karma-jasmine --save-dev`

安装jasmine-core(官方提供的jasmine核心文件)

`npm install jasmine-core --save-dev`

安装chrome-launcher(使用chrome的启动器)

`npm install karma-chrome-launcher --save-dev`

### Step 3 初始化配置文件
***
`karma init`

![回车使用默认配置即可](https://upload-images.jianshu.io/upload_images/7167628-a074cd7aa7fb7111.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### Step 4 运行Karma
***
`karma start`

终端自动打开chrome浏览器

![打开chrome后的界面](https://upload-images.jianshu.io/upload_images/7167628-f656852694897a2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后就可以开始写测试啦ε=ε=ε=(\~￣▽￣)\~

### 参考资料
***
[Karma +Jasmine+ require JS进行单元测试并生成测试报告、代码覆盖率报告](https://www.cnblogs.com/xiaxianfei/p/5600242.html)

[搭建基于Karma和Jasmine的前端单元测试](https://www.jianshu.com/p/a7ffb564734e)
