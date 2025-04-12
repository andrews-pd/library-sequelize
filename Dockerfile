FROM node:20-alpine AS build-env

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["dev"]