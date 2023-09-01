FROM node:lts-alpine3.17 as builder

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn 
COPY . .
RUN yarn build

FROM node:lts-alpine3.17
WORKDIR /usr/src/app

RUN apk update && apk upgrade
USER node

COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/build .
ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]