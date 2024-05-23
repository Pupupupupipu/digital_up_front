FROM node:14.2.1

# Create and set the working directory
RUN mkdir /front
WORKDIR /front

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your frontend code into the container
COPY . .


# Command to run the Next.js development server
CMD ["npm", "run", "dev"]