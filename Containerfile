FROM docker.io/oven/bun:latest AS build
WORKDIR /app
COPY package*.json ./
COPY bun.lockb ./

RUN bun install --frozen-lockfile
COPY . .
RUN bun x astro build 

FROM docker.io/nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080