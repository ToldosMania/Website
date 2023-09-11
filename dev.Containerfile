FROM docker.io/oven/bun:latest
VOLUME ["/app"]
WORKDIR /deps
COPY package*.json ./
COPY bun.lockb ./
RUN bun install --frozen-lockfile

WORKDIR /app
CMD ["bun","--bun","run","dev","--host"]