FROM node:19-alpine3.18 AS base

WORKDIR /client

COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev-exposed" ]
