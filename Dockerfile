# 基础 image
FROM nginx
MAINTAINER hui
# 复制项目发布文件
COPY  dist/  /usr/share/nginx/html/