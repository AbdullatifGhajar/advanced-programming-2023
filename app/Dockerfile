FROM node:20

WORKDIR /app

COPY package*.json ./

COPY --chown=node:node package.json .

RUN npm install

COPY . .

RUN npm run build

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]

USER node