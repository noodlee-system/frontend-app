# STEP 1 - Build static website
FROM node:10-alpine AS builder

# Create application directory
WORKDIR /app

# Install application dependencies
COPY package.json package-lock.json  /app/

RUN cd /app && npm set progress=false && npm install --unsafe-perm

# Copy project files into the docker image
COPY .  /app

# Run build scripts
RUN cd /app && node ./docker/build-script.js

RUN cd /app && npm run build

# STEP 2 - Build small nginx image with static website
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy website from 'builder' image to default nginx public folder
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Copy nginx configuration
COPY --from=builder /app/docker/nginx-conf /etc/nginx/conf.d/

EXPOSE 80
