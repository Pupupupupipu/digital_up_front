FROM node:14

# Create and set the working directory
RUN mkdir /front
WORKDIR /front

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your frontend code into the container
COPY . .

# Set environment variable to specify the port
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Command to run the Next.js development server
CMD ["npx", "next", "dev"]