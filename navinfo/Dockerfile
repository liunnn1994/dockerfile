FROM node:18

LABEL com.navinfo.image.name="navinfo:fe"
LABEL com.navinfo.image.authors="liunian7965"
USER root:root

ADD navinfo/resolved.conf /etc/systemd/
# ADD navinfo/sources.list /etc/apt/

RUN chmod 644 /etc/systemd/resolved.conf \
    && npm add -g npm \
    && npm add -g --force pnpm@8.6.1 \
    && npm add -g --force yarn@1.22.19 \
    && npm add -g zx

CMD echo "nodejs 以及 npm 版本："; \
    node -v; \
    npm -v; \
    echo "pnpm 版本："; \
    pnpm -v; \
    echo "yarn 版本："; \
    yarn -v; \
    echo "git 版本："; \
    git -v;
