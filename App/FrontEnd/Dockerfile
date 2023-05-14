FROM node:18-slim

COPY app app
COPY src src
COPY package.json package.json

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]