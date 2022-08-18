FROM node:16-alpine as installer

WORKDIR /opt/app

COPY package*.json ./
RUN npm install

FROM node:16-alpine

ARG WORKDIR=/opt/app

RUN apk add --update-cache chromium && \
    rm -rf /var/cache/apk/* /tmp/*

ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_DEBUGGING_PORT=9222 \
    CHROME_FLAGS=--no-sandbox,--headless,--disable-gpu,--remote-debugging-port=9222,--hide-scrollbars,--disable-dev-shm-usage \
    CHROME_FORWARD_HEADERS=true

EXPOSE 3000

WORKDIR $WORKDIR
USER node

COPY --from=installer $WORKDIR/node_modules node_modules/
COPY index.js package*.json ./

CMD ["node", "index.js"]
