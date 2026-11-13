FROM oven/bun:1.4.3 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun ci --ignore-scripts
COPY . .
RUN bun run build

FROM oven/bun:1.4.3-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY serve.ts ./
EXPOSE 3000
CMD ["bun", "serve.ts"]
