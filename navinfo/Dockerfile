FROM ubuntu:latest

LABEL com.navinfo.image.name="navinfo:fe"
LABEL com.navinfo.image.authors="liunian7965"
USER root:root

ADD navinfo/resolved.conf /etc/systemd/
ADD navinfo/sources.list /etc/apt/

SHELL ["/bin/bash", "--login", "-c"]

RUN chmod 644 /etc/systemd/resolved.conf \
    && mkdir -p ~/.npm_global \
    && mkdir -p ~/.npm_cache \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && source ~/.bashrc \
    && nvm install 14 \
    && nvm install 16 \
    && nvm install 18 \
    && nvm use 18 \
    && npm config set prefix ~/.npm_global \
    && npm config set cache ~/.npm_cache \
    && npm add -g npm \
    && npm add -g pnpm \
    && npm add -g zx \
    && curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

CMD echo "nodejs 以及 npm 版本："; \
    node -v; \
    npm -v; \
    echo "pnpm 版本："; \
    pnpm -v; \
    echo "yarn 版本："; \
    yarn -v; \
    echo "git 版本："; \
    git -v;
