FROM node:18

WORKDIR /app

# rootless
RUN chown -R node:node /app
USER node

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "test"]