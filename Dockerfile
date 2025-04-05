FROM node:14  

USER root  

WORKDIR /app  

COPY . .  

RUN npm install express

EXPOSE 80  

CMD ["node", "server.js"] 