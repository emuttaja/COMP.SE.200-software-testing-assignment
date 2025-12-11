FROM node:18

WORKDIR /app

COPY . .
RUN npm install

# rootless
RUN chown -R node:node /app
USER node

CMD ["npm", "test"]