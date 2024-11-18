FROM node:23-alpine3.20 AS builder

RUN addgroup -S coodesh \
    && adduser -S coodesh -G coodesh

WORKDIR /coodesh

COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .

ENV NEXT_PUBLIC_API_URL=https://de1.api.radio-browser.info/json/

RUN yarn build

FROM node:23-alpine3.20 AS production

RUN addgroup -S coodesh \
    && adduser -S coodesh -G coodesh

WORKDIR /coodesh

COPY --from=builder /coodesh/package.json ./
COPY --from=builder /coodesh/node_modules ./node_modules
COPY --from=builder /coodesh/.next ./.next
COPY .env ./

USER coodesh

EXPOSE 3000

CMD [ "yarn", "start" ]