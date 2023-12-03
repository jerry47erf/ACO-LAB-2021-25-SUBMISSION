FROM alpine
MAINTAINER SUDIPT
RUN apk update  
RUN apk add nodejs   
RUN mkdir /app
COPY index.js /app    
WORKDIR /app
RUN node index.js