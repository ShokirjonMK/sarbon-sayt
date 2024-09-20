# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app for production
RUN npm run build

# npm run start
RUN npm run start

# Expose the port that the Next.js app will run on
EXPOSE 8801

# Start the Next.js app and bind to 0.0.0.0
CMD ["npm", "run", "start", "--", "-p", "8801", "-H", "0.0.0.0"]
