FROM node:18-slim

WORKDIR App

COPY app app
COPY src src
COPY package.json package.json

ENV APP_NAME=Test

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]