FROM node:18

LABEL com.navinfo.image.name="navinfo:fe"
LABEL com.navinfo.image.authors="liunian7965"
USER root:root

ADD sources.list /etc/apt/

RUN npm add -g --force  npm \
    && npm add -g --force pnpm \
    && npm add -g --force yarn

CMD echo "nodejs 以及 npm 版本："; \
    node -v; \
    npm -v; \
    echo "pnpm 版本："; \
    pnpm -v; \
    echo "yarn 版本："; \
    yarn -v; \
    echo "git 版本："; \
    git -v;