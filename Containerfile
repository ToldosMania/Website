FROM node:lts-slim AS build
WORKDIR /app
COPY package*.json ./
COPY pnpm*.yaml ./
RUN corepack enable pnpm

RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run -r build

FROM docker.io/nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080