# Build stage
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package files for dependency installation
# We copy root package.json and lockfile because it's a monorepo
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the specific application
RUN npx nest build client-insights-feedback

# Prune development dependencies to keep the image small
# We do this in a separate step or stage if we wanted to be extremely cached, 
# but for simplicity in monorepo we'll just install prod deps in the next stage.


# Production stage
FROM node:22-alpine AS runner

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init curl

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3002

# Set working directory
WORKDIR /usr/src/app

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs

# Copy package files again to install only production dependencies
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts

# Copy built assets from builder stage
# Adjust the path according to where nest build outputs (dist/apps/client-insights-feedback)
COPY --from=builder --chown=nodejs:nodejs /usr/src/app/dist/apps/client-insights-feedback ./dist/apps/client-insights-feedback

# Use the non-root user
USER nodejs

# Expose the application port
EXPOSE 3002

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:3002/ || exit 1

# Start the application using dumb-init
CMD ["dumb-init", "node", "dist/apps/client-insights-feedback/main"]
