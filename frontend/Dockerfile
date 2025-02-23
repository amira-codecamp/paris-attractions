FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./dist/paris-attractions-website /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
