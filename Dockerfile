FROM node:carbon

RUN mkdir -p /app
WORKDIR /app
ADD . /app
 
RUN npm install
ENV PORT=80
CMD npm start
