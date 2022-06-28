ARG NODE_IMAGE=node:16.15.1-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /var/www/app && chown node:node /var/www/app
WORKDIR /var/www/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install
COPY --chown=node:node . .

FROM dependencies AS build
RUN yarn build

FROM base as production
ENV NODE_ENV=production
COPY --chown=node:node ./package*.json ./
RUN yarn install --pure-lockfile --production
COPY --chown=node:node --from=build /var/www/app/build .
CMD yarn start --production