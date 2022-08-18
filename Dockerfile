FROM node:16-alpine as installer

WORKDIR /opt/app

COPY package*.json ./
RUN npm install

FROM node:16-alpine

ARG WORKDIR=/opt/app

EXPOSE 3001

WORKDIR $WORKDIR
RUN chown -R node:node $WORKDIR
USER node

COPY --from=installer $WORKDIR/node_modules node_modules/
COPY package*.json tsconfig*.json ./
COPY src src/

CMD ["npm", "run", "start:dev"]
