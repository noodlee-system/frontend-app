FROM node:10-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY --from=builder /app/docker/nginx-conf /etc/nginx/conf.d/
