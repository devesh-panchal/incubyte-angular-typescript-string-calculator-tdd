# Step 1: Build the Angular App
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Angular dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Angular project for production
RUN npm run build --prod

# Step 2: Serve the Angular App using Nginx
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the Nginx public directory
COPY --from=build /app/dist/angular-string-calculator-tdd /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
