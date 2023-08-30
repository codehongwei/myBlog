github 自动化打包部署仓库代码，此示例是发布 vitepress 搭建的个人博客。

## 第一步

使用 vitepress 搭建好项目后，在 config.js 中加入 base 选项，此选项的名字要和 github 的仓库名字保持一致。如： 仓库名：myBlog。base：'/myBlog/'
将代码上传到 github

## 第二步

在 workflow 中如果需要修改仓库，那么需要有对仓库的写权限。我们需要在仓库的设置中给 workflow 添加写权限。
进入 Settings > Actions > General > Workflow permissions，勾选 Read and write permissions，然后保存。

[![pPavDy9.png](https://s1.ax1x.com/2023/08/29/pPavDy9.png)](https://imgse.com/i/pPavDy9)

## 第三步

<span style="color: red;font-weight: 700;">重要配置: </span>根目录下创建 .github/config/deploy.yml 层级。

![image.png](https://p.sda1.dev/12/60187e5afa34d62fa7b16791dc5c881a/image.png)

```yml
  name: 自动化部署
on: # 监听 main 分支上的 push 事件
push:
  branches:
    - master
jobs:
build-and-deploy:
  runs-on: ubuntu-latest # 构建环境使用 ubuntu
  steps:
    - name: Checkout # 将代码拉到虚拟机
      uses: actions/checkout@v2.3.1
      with:
        persist-credentials: false

    - name: Install pnpm # 安装pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 6.0.2

    - name: Install and Build # 下载依赖 打包项目
      run: |
        pnpm install
        pnpm docs:build

    - name: Deploy # 部署
      uses: JamesIves/github-pages-deploy-action@v4.3.3
      with:
        branch: gh-pages # 部署后提交到的分支, 会新增一个gh-pages的分支用作部署使用
        folder: dist # 这里填打包好的目录名称
```

## 第四步
选择部署的分支点击save
[![设置部署分支](https://s1.ax1x.com/2023/08/29/pPdAm8I.md.png)](https://imgse.com/i/pPdAm8I)
在下面Custom domain填写自己的域名, 可以是github账号 + github.io。如：codehongwei.github.io

## 第五步
每次在推送代码到master分支后，则会自动打包部署新的代码。链接地址在settings > pages 中可以看到部署后的地址

![image.png](https://p.sda1.dev/12/36232ee1525e901bf00f5e727a55de70/image.png)
