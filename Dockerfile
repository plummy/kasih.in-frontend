FROM node:latest

MAINTAINER spondbob spondbob@eamca.com

#RUN apt-get update -qq && apt-get install -y build-essential libpq-dev curl


# Install & cache modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm i webpack webpack-dev-server -g && npm install && npm install --only=dev

# Add base code & node modules to app
ENV app /var/app
RUN mkdir -p $app && cp -a /tmp/node_modules $app
WORKDIR $app
ADD . $app

# Run webpack
#CMD webpack-dev-server --config webpack.hot.config.js --hot --progress --inline --host=0.0.0.0