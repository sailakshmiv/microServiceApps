# MicroServices Architecture APP

This repo has 4 apps. Below is the flow:

1. **app.server.1** it parses the data from a data.txt file and emits the data line by line on a particular port(8082)
2. **app.server.2** it recieves the emitted data by connectind to the emitting port, processes the data and inserts in remote mongoDB database.
3. **api.server.3** it is simply an API server for client applications. It exposes the api's to access the data from the mongoDB database.
4. **webApp.client** it is a client applicaiton (webApp), which provides a dashboard to view the real time data and search it. The dashboard entire data is getting refreshed after every 5s using polling.

## SetUp Steps
 - clone the repo
 - change the db url in app.server.2>config>config.js, I used mlab mongoDb Service.
 - start the microservices individually in below order:
    * webApp.client
    * api.server
    * app.server.2
    * app.server.1
 
## commands
 - to start: `npm start`
 - to debug: `node run debug`
 - else above debug does not work
    * Install Debug module globally: `npm install debug -g`
    * `DEBUG='main:*' node app.js`
