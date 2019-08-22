### STAGE 1: Build ###
FROM node:10-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN node ./docker/build-script.js

RUN npm run build

### STAGE 2: Setup ###
FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY --from=builder /app/docker/nginx-conf /etc/nginx/conf.d/
