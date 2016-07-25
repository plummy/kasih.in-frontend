FROM node:latest

MAINTAINER spondbob spondbob@eamca.com

# Install & cache modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm i webpack webpack-dev-server -g && npm install && npm install --only=dev

# Add base code & node modules to app
ENV app /var/app
RUN mkdir -p $app && cp -a /tmp/node_modules $app
WORKDIR $app
ADD . $app