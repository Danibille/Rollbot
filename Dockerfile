FROM node:24-alpine
RUN npm install -g pnpm
WORKDIR /bot
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
CMD ["node", "/bot/main.ts"]