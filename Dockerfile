# 基础 image
FROM nginx
MAINTAINER hui
LABEL maintainer="2420228300@qq.com"
# 复制项目发布文件
COPY  dist/  /usr/share/nginx/html/