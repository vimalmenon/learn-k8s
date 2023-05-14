FROM node:18-slim

COPY app app
COPY src src
COPY package.json package.json

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]