FROM node:10-alpine
WORKDIR /app
RUN  yarn global add pm2
COPY package.json .   
COPY yarn.lock . 
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["pm2-runtime", "production.yml"]