# ENV EXECUTION

FROM node:20.10.0

# define the directory

WORKDIR /app

# copy the package.json file to install dependencies
COPY package.json .

#install all dependencies
RUN npm install

# set NODE-ENV var env
ENV NODE_ENV=production

# copy all files from current directory to /app in container
COPY . .

# expose port 3000
EXPOSE 3000

# run the app
CMD ["npm","run", "start"]