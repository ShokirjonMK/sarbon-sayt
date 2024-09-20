# Use an official Node.js runtime as the base image
FROM node:18-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the Next.js app and bind to 0.0.0.0
CMD ["npm", "run", "dev"]
