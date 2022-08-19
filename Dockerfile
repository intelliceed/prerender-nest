FROM node:16-alpine as installer

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci

FROM node:16-alpine as builder

ARG WORKDIR=/opt/app

WORKDIR $WORKDIR

COPY --from=installer $WORKDIR/node_modules node_modules/
COPY package*.json tsconfig*.json ./
COPY src src/
RUN npm run build

FROM node:16-alpine

ARG WORKDIR=/opt/app

WORKDIR $WORKDIR
USER node

COPY --from=builder $WORKDIR/dist/* ./

EXPOSE 3001

CMD ["npm", "run", "start:prod:dist"]
