FROM node:12.13.1
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --production 

COPY . .

EXPOSE 3080
CMD npm start