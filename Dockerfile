# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (improves caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run dev

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
