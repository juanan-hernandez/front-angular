FROM node:11

RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY ./ /app/

# Install app dependencies.
RUN npm install
RUN npm install -g @angular/cli
# RUN npm rebuild node-sass

EXPOSE 4200

CMD ["npm", "start"]

