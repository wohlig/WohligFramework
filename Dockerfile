FROM alpine
WORKDIR /app
RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn
RUN yarn global add pm2
COPY package.json .   
COPY yarn.lock . 
RUN yarn install
COPY . .
EXPOSE 80
CMD ["pm2-runtime", "process.yml"]




