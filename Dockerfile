FROM node:16.16.0

ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_DEBUGGING_PORT=9222 \
    CHROME_FORWARD_HEADERS=true \
    CHROME_FLAGS=--no-sandbox,--headless,--disable-gpu,--remote-debugging-port=9222,--hide-scrollbars,--disable-dev-shm-usage

WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install

COPY . .

RUN chown -R node:node /usr/app
USER node

EXPOSE 7050
CMD ["npm", "run", "start:dev:nestjs"]
