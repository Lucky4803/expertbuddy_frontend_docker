# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy application code
COPY . .

# Build the Next.js app
RUN npm run build

# Install a simple HTTP server for static files (if using `next export`)
# RUN npm install -g serve

# Expose the default Next.js port
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "start"]
