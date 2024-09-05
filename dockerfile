# Use the official Oven Bun image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app
RUN bun upgrade
# Copy the package files and install dependencies using Bun
COPY package*.json ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Run the build command using Bun
RUN bun run build

# Expose the port your application will run on (replace 3000 with your actual port if different)
EXPOSE 3000

# Set memory and init options for running the container
ENTRYPOINT [ "bun" ]
CMD ["run", ".output/server/index.mjs"]
