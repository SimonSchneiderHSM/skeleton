# Version 0.0.1
FROM node:alpine
MAINTAINER Simon Reymann

# Install tools
RUN apk --update add git openssh python make g++

# Bundle app source
RUN mkdir /root/repositories

RUN mkdir /root/.ssh
#COPY ./ssh_config /root/.ssh/config

COPY id_rsa /root/.ssh/id_rsa
COPY id_rsa.pub /root/.ssh/id_rsa.pub

RUN chmod 400 /root/.ssh/id_rsa
RUN chmod 400 /root/.ssh/id_rsa.pub

RUN ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts
#RUN ssh -T git@github.com

RUN git clone git@github.com:ProcessEngineJS/demo.git -b feature/docker ~/repositories/demo

# Give access to private npm
RUN rm -fr /root/.npm
COPY ./.npmrc /root/.npmrc

# Install app dependencies
RUN cd /root/repositories/demo && npm cache verify && npm install
RUN cd /root/repositories && npm install graphql@0.8.2 react@15.6.1 react-dom@15.6.1
RUN cd /root/repositories/demo && rm -rf ./node_modules/graphql && rm -rf ./node_modules/react
RUN cd /root/repositories/demo && npm run build

CMD /root/repositories/demo/deployment/docker_start.sh
