# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve to run the static files
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Expose port 8080 (required by Cloud Run)
EXPOSE 8080

# Set PORT environment variable
ENV PORT=8080

# Start the server on the PORT defined by Cloud Run
CMD ["sh", "-c", "serve -s dist -l $PORT"]
