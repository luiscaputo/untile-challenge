FROM node:18.19

ENV PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --cache-clear

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "run", "start" ]