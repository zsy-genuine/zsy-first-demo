##git 的安装与使用 
1. 安装 命令或者右键 git bash here
2. 初始用户名和邮箱(第一次安装)
设置用户名   
git config --global user.name "username" 
设置邮箱
git config --global user.email "55343581@qq.com"
3. 初始化git仓库，在你作为仓库的文件夹下面(一个文件夹只能用一次)
git init 
4. 添加文件到仓库
 <!-- 单个文件 -->
git add 文件.后缀名  
git add index.html 
<!-- 所有文件 -->
git add -A   -A表示all 添加所有文件
git add .
5. 提交文件到本地仓库
git commit -m'提交的内容'
例子：git commit -m'列表的内容更改'
6. git 添加远程仓库地址
git remote add origin  https://github.com/ruanye/first.git
查看远程仓库地址 git remote -v
7. 把项目提交的远程仓库
git push origin master 
<!-- 修改之后 -->
1. git add -A
2. git commit -m'注释修改或添加的内容'
3. git push origin master 



 


Git 安装和使用：

    1.首先先检查下电脑是否安装有 git。
    在终端输入 \$ git。如下图显示，就是已安装。
    如未安装，会提示“The program 'git' is currently not installed.”。

    2.在 mac 电脑上安装 git 有两种方式：
    一是通过安装 homebrew，然后通过 homebrew 安装 Git，具体方法请参考 homebrew 的文档： https://brew.sh/index_zh-cn。
    二是通过安装 Xcode 软件，Xcode 集成了 Git。（当然如果用不到 Xcode 软件的，建议通过第一种方式）。

    3.安装完成后，就是开始登录 git 了。
    1、设置你的名字： $ git config --global user.name "name"
    2、设置你的邮箱：$ git config --global user.email "email@qq.com"
    注意 git config 命令的--global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。

    4.首先创建一个仓库。
    （1）先在电脑上指定一个位置。 $ cd xxx     xxx表示文件夹路径。
    （2）创建仓库。 $ git init
    注：可能我们会发现当前目录下多了一个.git的目录，这个目录是Git来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把Git仓库给破坏了。

    5.添加文件。
    添加全部文件：$ git add .
    或者 添加指定文件： $ git add "test.rtf"
    注：(git add .)   add后面带一个空格再加点

    6.提交。
    $ git commit -m "xxx"
    注：xxx一定要写，不能为空字符。（-m后面一般输入的是本次提交的说明）

    7.查看状态。（可以查看到哪个文件自上次提交后的修改情况）
    $ git status
    如图：说明 test.rtf 文件有修改。

    8.查看修改内容。
    $ git diff test.rtf

    9.再次提交。
    步骤：
    1、先添加：$ git add "test.rtf"
    2、在提交：$ git commit -m "新增天气文字"

    10.查看提交记录。
    $ git log

    11.版本回退。如果我们在使用过程中，想退到之前的某一版本。
    回退到上一个版本：$ git reset --hard HEAD^
    回退到某一版本：$ git reset --hard bf4dc99...

    12.删除文件。
    $ git rm test.rtf
    $ git commit -m "删除文件"

<!-- 修改之后只运行下面三个既可以了 -->

git add -A
git commit -m'注释修改或添加的内容'
git push origin master



