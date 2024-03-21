# hui-homepage
## 介绍
本项目旨在搭建一个静态的个人主页系统（简历），通过简单的配置可以快速建站

## 预览

## 配置
```yaml
userInfo:
  # avatar 配置之后 使用avatar ，否则使用根目录下的 avatar.png
  avatar: ''
  userName: '用户名称'
  # 为空不显示信息
  qualifications: '学历信息'
  email: '邮箱地址'
  phone: '手机号'
  birthday: '出生日期'
  description: '过去无可挽回，未来可以改变'
  # 个人社交账号
  account:
    - name: 'Github'
      icon: 'github'
      url: 'https://github.com/hui3215'
    - name: 'Gitee'
      icon: 'gitee'
      url: 'https://gitee.com/MchBlog'
    - name: 'WeChat'
      icon: 'wechat'
      copy: '微信账号'
    - name: 'QQ'
      icon: 'qq'
      copy: 'qq账号'
  # 个人技能
  skills:
    - skill: 'Java'
      percentage: 80
    - skill: '.NET'
      percentage: 60
    - skill: 'Spring Booot'
      percentage: 85
    - skill: 'Spring Cloud'
      percentage: 30
    - skill: 'Vue'
      percentage: 82
    - skill: 'Linux'
      percentage: 60
  # 个人技能熟练程度的颜色进度配置
  skillCustomColors:
    - color: '#f56c6c'
      percentage: 20
    - color: '#e6a23c'
      percentage: 40
    - color: '#5cb87a'
      percentage: 60
    - color: '#1989fa'
      percentage: 80
    - color: '#6f7ad3'
      percentage: 100
  experiences:
    - content: '个人经历'
      timestamp: '2019-09-10 12:00'
      size: 'large'
      type: 'primary'
    - content: '个人经历'
      timestamp: '2020-06-06 07:00'
      color: '#0bbd87'
    - content: '个人经历'
      timestamp: '2023-06-06 07:00'
      size: 'large'
    - content: '个人经历'
      timestamp: '2023-09-08 06:00'
      hollow: true
      type: 'primary'
    - content: '个人经历'
      timestamp: '2023-9-11 20:46'
      color: '#ff0081'
  projectsInfo:
    - name: '项目名称'
      url: ''
      skills:
        - Vue
        - 项目用到了哪些技术栈
      description: '项目描述'
    - name: '项目名称'
      url: ''
      skills:
        - Vue
        - Spring Boot
      description: '项目描述'
  introduction:
    content: '个人简介'
    # 个人简介中的关键词高亮
    keywords:
      - Spring
      - Spring Boot
      - MyBatis
      - Linux
      - Java
website:
  title: SpringHui
  ICPRecordNumber: xxxxxxxxx
  backgroundWords:
    - Java
    - Spring
    - SpringBoot
    - SpringCloud
    - Rabbit
    - Nacos
    - ES
    - Netty
    - Mysql
    - Redis
    - Vue
    - Html
    - CSS
    - JS
    - .NET
    - WPF
    - ASP
  backgroundColor: #222
  backgroundItemInfoBorderColor: #22d3ee
  cardInfo:
    # default
    # 神秘紫蓝渐变 mystic-violet-blue-gradient
    # 天空蓝渐变 sky-blue-gradient
    # 瑰丽紫红渐变 magnificent-purple-red-gradient
    # 温暖阳光渐变 warm-sunlight-gradient
    # 自然绿意渐变 natural-greenery-gradients
    theme: sky-blue-gradient
    borderWidth: 4px
    borderRadius: 16px
```

## 运行 or 部署

### 运行
```shell
# 安装依赖
npm install
# 运行
npm run dev
# 打包
npm run build
```

### 部署
> 可以使用宝塔可视化操作部署

**Docker部署**

## 运行镜像
```shell
docker pull ghcr.io/hui3215/hui-homepage:latest

docker run -d --name hui-homepage -p 80:80 -v /root/hui-homepage/dist/config/:/usr/share/nginx/html/config/ hui-homepage:latest
```

## 构建镜像并运行
```shell
## 通过项目构建并运行docker镜像
docker build -t homepage .
# 运行在80 端口并绑定本地/root/hui-homepage/dist/config/中的application.yml 配置文件
docker run -d --name hui-homepage -p 80:80 -v /root/hui-homepage/dist/config/:/usr/share/nginx/html/config/ homepage
```

## 关于

本项目免费使用，欢迎各位毕业生使用本项目增加个人主页简历
* 本项目免费使用，已经标注作者，禁止删除
* 可以对本项目二次开发，仍需注明原作者
* 喜欢的老板们可以点个Star,投个币
