FROM node:16.13.1
# Create app directory

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
# COPY .npmrc .npmrc

RUN apt-get update && \
    apt-get -y install xvfb gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 \
      libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 \
      libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
      libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
      libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget && \
    rm -rf /var/lib/apt/lists/*

# Add user so we don't need --no-sandbox.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

# RUN npm install -g yarn 
ARG build_env
ENV deploy_env ${build_env}

RUN npm install -g yarn@1.22.19 --force
RUN npm install -g npm@8.15.1 --force

# RUN yarn cache clean
RUN yarn install

COPY . /usr/src/app


RUN yarn build:${build_env}

#COPY . /usr/src/app

EXPOSE 3000

RUN chmod +x ./start.sh

CMD ./start.sh ${deploy_env}

