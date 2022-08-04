FROM node:16.15.1
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install -g npm@8.6.0
RUN curl -v https://registry.npmjs.com/
RUN npm ci && npm cache clean --force

COPY . .
RUN chown -R node:node /app
USER node

EXPOSE 7050
CMD ["npm", "run", "start"]
