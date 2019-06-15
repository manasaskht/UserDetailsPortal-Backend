# Use node 10.15.1 LTS
FROM node:10.15.1

# Change working directory
WORKDIR /assignment1_webservices-master

# Copy source code
COPY . /assignment1_webservices-master

# Install dependencies
RUN npm -g install sails

RUN ls

# Expose API port to the outside
EXPOSE 1337

# Launch application
CMD ["sails","lift"]