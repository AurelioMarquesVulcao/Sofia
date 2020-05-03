FROM node:alpine

# usar outro workdir para desenvolvimento, corrigir proximas atualizações
WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]