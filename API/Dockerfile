FROM node:20

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 8081

CMD ["./start-api.sh"]

USER node