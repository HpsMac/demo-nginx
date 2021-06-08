FROM nginx:alpine
# ADD ./dist /usr/share/nginx/html
COPY ./html/* /usr/share/nginx/html

EXPOSE 80