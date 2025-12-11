# stated as a working version
FROM node:14

WORKDIR /app

# rootless
RUN chown -R node:node /app
USER node

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "test"]