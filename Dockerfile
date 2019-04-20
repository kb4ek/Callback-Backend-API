FROM aws/codebuild/nodejs:10.14.1-1.7.0

RUN mkdir -p /app
WORKDIR /app
ADD . /app
 
RUN npm install
ENV PORT=80
CMD npm start
