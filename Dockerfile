FROM node:16-alpine as installer

WORKDIR /opt/app

COPY package*.json ./
RUN npm install

FROM node:16-alpine

ARG WORKDIR=/opt/app

RUN apk add --update-cache chromium && \
    rm -rf /var/cache/apk/* /tmp/*

ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_FLAGS=--no-sandbox,--headless,--disable-gpu,--remote-debugging-port=9222,--hide-scrollbars,--disable-dev-shm-usage

EXPOSE 3001

WORKDIR $WORKDIR
#RUN chown -R node:node $WORKDIR
#USER node

COPY --from=installer $WORKDIR/node_modules node_modules/
COPY prerender/index.js prerender/index.js
COPY package*.json tsconfig*.json ./
COPY src src/

CMD ["npm", "run", "start:dev:nestjs"]
