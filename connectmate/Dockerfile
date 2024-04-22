# Create a directory in the container to store the app.
RUN mkdir app

# Set the working directory to the app directory.
WORKDIR /app

# Copy the public directory to the app directory.
COPY public /app/public

# Copy the src directory to the app directory.
COPY src /app/src

# Copy the package.json file to the app directory.
COPY package.json /app/package.json

# Copy the tailwind.config.js file to the app directory.
COPY tailwind.config.js /app/tailwind.config.js

# Copy the tsconfig.json file to the app directory.
COPY tsconfig.json /app/tsconfig.json

# Execute the yarn install command to install the dependencies.
RUN yarn install

# Expose the port where the application will be running.
EXPOSE 3000

# Command to run the application when the container starts.
CMD ["yarn", "start"]

# To build the Docker image, run the following command:
# docker run -d -p 3000:3000 image
