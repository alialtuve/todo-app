FROM node:19-alpine3.18 AS base

WORKDIR /api

FROM base AS dev

COPY package*.json ./

RUN npm install

COPY tsconfig*.json ./

COPY . .

ENV PORT=5000

EXPOSE $PORT

CMD [ "npm", "run", "dev" ]
