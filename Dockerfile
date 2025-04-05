# Dockerfile
# Use the official Node.js image (LTS version)
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the entire source code
COPY . .

# Build the application for production
RUN npm run build

# Production stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install serve globally to run the built application
RUN npm install -g serve

# Copy the dist folder from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000 (the port Vite has been configured to use)
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"]