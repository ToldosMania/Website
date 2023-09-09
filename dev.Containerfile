FROM node:lts-slim AS build
VOLUME ["/app"]
WORKDIR /deps
COPY package*.json ./
COPY pnpm*.yaml ./

RUN corepack enable pnpm && \
    pnpm install --frozen-lockfile

WORKDIR /app
CMD ["pnpm","run","dev","--host"]