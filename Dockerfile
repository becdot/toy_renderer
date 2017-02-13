FROM node:6.9.5

# Install renderer
COPY . /opt/app/toy_renderer
WORKDIR /opt/app/toy_renderer

# Add dependancies and remove glide cached files
RUN npm install

EXPOSE 9999
CMD ["npm start"]
