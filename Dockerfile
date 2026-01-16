FROM node:24-alpine
RUN npm install -g pnpm
RUN apk add --no-cache \
    fontconfig \
    freetype \
    harfbuzz \
    ttf-liberation
WORKDIR /bot
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
CMD ["node", "/bot/main.ts"]