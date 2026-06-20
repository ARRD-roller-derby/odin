FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN corepack enable && corepack prepare pnpm@10.28.1 --activate

RUN pnpm install --frozen-lockfile --config.strict-dep-builds=false

FROM base AS builder

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Les variables NEXT_PUBLIC_* doivent être disponibles au moment du build
ARG NEXT_PUBLIC_URL_BUCKET
ENV NEXT_PUBLIC_URL_BUCKET=${NEXT_PUBLIC_URL_BUCKET:-https://arrd.s3.fr-par.scw.cloud/}

RUN pnpm build

FROM node:22-alpine AS runner

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
# Les variables NEXT_PUBLIC_* doivent être définies au runtime aussi
ENV NEXT_PUBLIC_URL_BUCKET=""

CMD ["node", "server.js"]
