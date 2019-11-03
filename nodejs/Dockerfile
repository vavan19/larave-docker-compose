FROM node:10-alpine

EXPOSE 8080

RUN mkdir -p /var/www

ADD src/* /var/www/

WORKDIR /var/www/

RUN npm install

CMD [ "node", "app.js" ]