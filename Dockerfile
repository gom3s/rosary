FROM node:12-stretch

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

RUN yarn global add @api-platform/client-generator

# Prevent the reinstallation of node modules at every changes in the source code
COPY package.json package-lock.json ./
RUN npm ci

COPY . ./

CMD npm start
 