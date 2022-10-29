进入git bash界面然后：
第一步，
git config --global --list
验证邮箱与GitHub注册时输入的是否一致，没有没关系

第二步
通过
git config --global user.name "guojie"
git config --global user.email "guo.jie2@iwhalecloud.com"
（这里得名字和邮箱都是注册github时用的）设置全局用户名和邮箱。

第三步，
ssh-keygen -t rsa -C "guo.jie2@iwhalecloud.com"
一路回车，在出现选择时输入Y，再一路回车直到生成密钥。会在/Users/***/路径下生成一个.ssh文件夹，密钥就存储在其中。

第四步，到git仓库，添加秘钥，

点github上你的头像--->Settings-->SSH and GPG Keys--New SSH Key-->Title(随便填)-->Key(这里复制/Users/***/.ssh/id_rsa.pub的内容)-->点击Add SSH key

第五步，ssh -T git@github.com 测试一下通不通，通了显示successfully的信息

即可正常使用。
不通就是
ssh-agent -s
ssh-add ~/.ssh/id_rsa 操作这两步。



ssh://git@git-nj.iwhalecloud.com:52422/gzlcdpdev/lcdp-editor.git