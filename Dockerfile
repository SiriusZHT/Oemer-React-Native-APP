FROM alpine:node

WORKDIR /app

COPY package.json .
RUN npm install --only=prod

COPY . .

CMD ["yarn", "run", "web"]