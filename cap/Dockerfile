# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the cap folder to the container's /app directory
COPY cap/package.json cap/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the cap folder
COPY cap ./

# Expose the port on which the Next.js app will run
EXPOSE 3000

# Run the Next.js app in development mode
CMD ["npm", "run", "dev"]
