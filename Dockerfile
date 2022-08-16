FROM node:16.16.0

WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install

COPY . .

RUN chown -R node:node /usr/app
USER node

EXPOSE 3001
CMD ["npm", "run", "start:dev:nestjs"]
