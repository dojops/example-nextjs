FROM node:20 AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY --from=builder /app/out ./out
RUN npm i -g serve
EXPOSE 3000
CMD ["serve", "out", "-l", "3000"]
