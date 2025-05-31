FROM node:20

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    libjpeg-dev \
    libpng-dev \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV npm_config_platform=linux

RUN npm install

EXPOSE 3000