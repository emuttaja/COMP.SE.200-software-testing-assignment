# stated as a working version
FROM node:14

# rootless
RUN useradd -m -u 1000 nodeuser

WORKDIR /app

RUN chown -R nodeuser:nodeuser /app

user nodeuser

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "test"]