FROM alpine:3.8

RUN apk add --update nodejs
RUN apk add --update npm

RUN mkdir /myapp
ENV APP /myapp
ADD ./ $APP
WORKDIR $APP

RUN npm install

EXPOSE 5020

CMD npm start

