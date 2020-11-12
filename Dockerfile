FROM node:lts-alpine3.10

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]