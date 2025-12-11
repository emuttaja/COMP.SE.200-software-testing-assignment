FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# rootless
RUN chown -R node:node /app
USER node

CMD ["npm", "test"]